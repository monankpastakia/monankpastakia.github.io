/* ============================================================
   Visitor tracking (privacy-friendly) -> window.Track.event()
   - Pageviews via GoatCounter / GA4 / Cloudflare (whichever you configure)
   - Recruiter-tagged links:  https://site/?r=acme-jane  -> every event carries "acme-jane"
   - Optional instant alert (Telegram/Slack/Teams/Discord) through a Cloudflare Worker
   ============================================================ */
(() => {
  const C = window.SITE_CONFIG || {};
  const A = C.analytics || {};
  const qs = new URLSearchParams(location.search);
  const optedOut = C.respectDNT && (navigator.doNotTrack === "1" || navigator.globalPrivacyControl === true);

  // Recruiter / campaign tag, remembered for the session
  let ref = qs.get("r") || qs.get("ref") || qs.get("utm_campaign") || "";
  try { if (ref) sessionStorage.setItem("ref", ref); else ref = sessionStorage.getItem("ref") || ""; } catch (_) {}
  ref = ref.slice(0, 60);

  const state = { start: Date.now(), maxScroll: 0, sections: new Set(), left: false };

  function load(src, attrs = {}) {
    const s = document.createElement("script");
    s.async = true; s.src = src;
    Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
    document.head.appendChild(s);
  }

  if (!optedOut) {
    if (A.goatcounter) load("https://gc.zgo.at/count.js", { "data-goatcounter": `https://${A.goatcounter}.goatcounter.com/count` });
    if (A.ga4) {
      load(`https://www.googletagmanager.com/gtag/js?id=${A.ga4}`);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { dataLayer.push(arguments); };
      gtag("js", new Date());
      gtag("config", A.ga4, { anonymize_ip: true, custom_map: { dimension1: "ref" } });
    }
    if (A.cloudflareToken) load("https://static.cloudflareinsights.com/beacon.min.js", { "data-cf-beacon": JSON.stringify({ token: A.cloudflareToken }) });
  }

  function beacon(payload) {
    if (!C.notifyEndpoint || optedOut) return;
    try {
      // text/plain avoids a CORS preflight
      navigator.sendBeacon(C.notifyEndpoint, new Blob([JSON.stringify(payload)], { type: "text/plain" }));
    } catch (_) {}
  }

  function event(name, props = {}, opts = {}) {
    if (optedOut) return;
    const data = { ...props, ref };
    if (window.gtag) gtag("event", name, data);
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: `event/${name}${props.format ? "-" + props.format : ""}${ref ? "/" + ref : ""}`, title: name, event: true });
    }
    if (opts.notify !== false) {
      beacon({
        event: name, ref, ...props,
        path: location.pathname, referrer: document.referrer || "",
        lang: navigator.language, tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
        screen: `${screen.width}x${screen.height}`
      });
    }
  }

  // ---- automatic events ----
  addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("pv")) { try { sessionStorage.setItem("pv", "1"); } catch (_) {} event("pageview"); }

    // outbound / contact links
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[href]");
      if (!a) return;
      const h = a.getAttribute("href");
      if (h.startsWith("mailto:")) event("email_click");
      else if (/github\.com/.test(h)) event("github_click", { target: h.slice(0, 120) });
      else if (/linkedin\.com/.test(h)) event("linkedin_click");
    });

    // section interest
    const io = new IntersectionObserver((es) => es.forEach((en) => {
      if (en.isIntersecting && en.target.id && !state.sections.has(en.target.id)) {
        state.sections.add(en.target.id);
        event("section_view", { section: en.target.id }, { notify: false });
      }
    }), { threshold: 0.4 });
    document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));

    addEventListener("scroll", () => {
      const h = document.documentElement;
      state.maxScroll = Math.max(state.maxScroll, Math.round(((h.scrollTop + innerHeight) / h.scrollHeight) * 100));
    }, { passive: true });
  });

  function leave() {
    if (state.left || !sessionStorage.getItem("pv")) return;
    state.left = true;
    event("leave", {
      seconds: Math.round((Date.now() - state.start) / 1000),
      scroll: state.maxScroll,
      sections: [...state.sections].join(",")
    });
  }
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") leave(); });
  addEventListener("pagehide", leave);

  window.Track = { event, ref };
})();
