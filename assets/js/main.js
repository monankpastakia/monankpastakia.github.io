(() => {
  const R = window.RESUME, C = window.SITE_CONFIG, E = window.ResumeExport, esc = E.esc;
  const $ = (s) => document.querySelector(s);
  const b = R.basics;
  const engs = R.experience.flatMap((e) => e.engagements.map((g) => ({ ...g, company: e.company })));

  /* ---------- static fills ---------- */
  document.title = `${b.name} | ${b.title.split("|")[0].trim()} Portfolio`;
  $("#logo").innerHTML = `${esc(b.name.split(" ")[0])}<span>.</span>`;
  $("#h-eyebrow").textContent = b.availability;
  $("#h-name").innerHTML = `Hi, I'm <span class="grad-text">${esc(b.name)}</span>`;
  $("#h-title").textContent = b.title;
  $("#h-role").textContent = b.tagline;
  $("#h-gh").href = b.github; $("#h-li").href = b.linkedin;
  $("#h-gh").target = $("#h-li").target = "_blank"; $("#h-gh").rel = $("#h-li").rel = "noopener";
  $("#c-li").href = b.linkedin; $("#c-gh").href = b.github;
  $("#c-li").target = $("#c-gh").target = "_blank";
  if (b.email) { const m = $("#c-mail"); m.hidden = false; m.href = `mailto:${b.email}?subject=${encodeURIComponent("SDET opportunity for " + b.name)}`; }
  $("#yr").textContent = new Date().getFullYear(); $("#f-name").textContent = b.name;

  $("#stats").innerHTML = R.stats.map((s) =>
    `<div class="card stat reveal"><b data-count="${s.value}" data-pre="${s.prefix || ""}" data-suf="${s.suffix || ""}">0</b><span>${esc(s.label)}</span></div>`).join("");

  $("#about-card").innerHTML = R.about.map((p) => `<p style="margin:0 0 .9rem">${esc(p)}</p>`).join("") + `<p class="note" style="margin:0">📍 ${esc(b.location)} · 🗣 ${esc((R.spokenLanguages || []).join(", "))}</p>`;
  $("#about-chips").innerHTML = R.aboutChips.map((t) => `<span class="chip core">${esc(t)}</span>`).join("");

  /* ---------- experience: employer cards with expandable client engagements ---------- */
  $("#timeline").innerHTML = R.experience.map((e, ei) => `
    <article class="card emp reveal">
      <div class="top"><h3>${esc(e.company)} <span class="co">· ${esc(e.role)}</span></h3>
        <span class="when">${esc(e.start)} – ${esc(e.end)} · ${esc(e.location)}</span></div>
      ${e.blurb ? `<p class="note" style="margin:.3rem 0 0">${esc(e.blurb)}</p>` : ""}
      <div class="engs">${e.engagements.map((g, gi) => `
        <details class="eng" data-caps="${esc(g.caps.join("|"))}" data-client="${esc(g.client)}" ${ei === 0 && gi === 0 ? "open" : ""}>
          <summary>
            <span class="eng-name">${esc(g.client)}</span>
            <span class="chip dom">${esc(g.domain)}</span>
            <span class="eng-when">${esc(g.period)}</span>
            <span class="chev" aria-hidden="true">▾</span>
          </summary>
          <div class="eng-body">
            ${g.project ? `<p class="proj">${esc(g.project)}</p>` : ""}
            <p>${esc(g.summary)}</p>
            <div class="chips">${g.stack.map((s) => `<span class="chip core">${esc(s)}</span>`).join("")}</div>
            <ul>${g.bullets.map((x) => `<li>${esc(x.text)}</li>`).join("")}</ul>
          </div>
        </details>`).join("")}
      </div>
    </article>`).join("");

  // capability filter
  const filters = $("#filters");
  filters.innerHTML = `<button class="chip fbtn on" data-cap="">All</button>` + R.capabilities.map((c) => `<button class="chip fbtn" data-cap="${esc(c)}" aria-pressed="false">${esc(c)}</button>`).join("");
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".fbtn"); if (!btn) return;
    const cap = btn.dataset.cap;
    filters.querySelectorAll(".fbtn").forEach((x) => { x.classList.toggle("on", x === btn); x.setAttribute("aria-pressed", x === btn); });
    document.querySelectorAll("details.eng").forEach((d) => {
      const match = !cap || d.dataset.caps.split("|").includes(cap);
      d.hidden = !match; if (cap && match) d.open = true;
    });
    document.querySelectorAll("article.emp").forEach((a) => { a.hidden = ![...a.querySelectorAll("details.eng")].some((d) => !d.hidden); });
    const all = document.querySelectorAll("details.eng"), shown = [...all].filter((d) => !d.hidden).length, st = $("#filter-status");
    st.hidden = !cap;
    if (cap) { st.innerHTML = `Showing ${shown} of ${all.length} engagements matching <b>${esc(cap)}</b> · <button class="btn small" id="reset-filter">Reset filter</button>`; $("#reset-filter").onclick = () => filters.querySelector('[data-cap=""]').click(); }
    window.Track && Track.event("filter_capability", { cap: cap || "all" }, { notify: false });
  });
  $("#expand").onclick = () => document.querySelectorAll("details.eng:not([hidden])").forEach((d) => (d.open = true));
  $("#collapse").onclick = () => document.querySelectorAll("details.eng").forEach((d) => (d.open = false));
  // which clients get opened = recruiter interest signal
  document.addEventListener("toggle", (e) => {
    if (e.target.matches && e.target.matches("details.eng") && e.target.open && window.Track) Track.event("engagement_open", { client: e.target.dataset.client }, { notify: false });
  }, true);

  /* ---------- skills + certs/education ---------- */
  $("#skills-grid").innerHTML = R.skillGroups.map((g) => `
    <div class="card reveal"><h3>${esc(g.group)}</h3>
      <div class="chips">${g.items.map((i) => `<span class="chip${i.show ? " core" : ""}">${esc(i.name)}</span>`).join("")}</div></div>`).join("") +
    `<div class="card reveal"><h3>Certifications</h3><ul class="plain">${R.certifications.map((c) => `<li><a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.name)} ↗</a></li>`).join("")}</ul>
      <h3 style="margin-top:1.2rem">Education</h3><p class="note" style="margin:.3rem 0 0">${R.education.map((x) => `${esc(x.degree)}, ${esc(x.school)} (${esc(x.year)})`).join("<br>")}</p></div>`;

  /* ---------- case studies ---------- */
  $("#stories-grid").innerHTML = R.caseStudies.map((c) => `
    <article class="card story reveal">
      <div class="chips" style="margin:0 0 .6rem"><span class="chip dom">${esc(c.client)}</span>${c.stack.map((t) => `<span class="chip core">${esc(t)}</span>`).join("")}</div>
      <h3>${esc(c.title)}</h3>
      <dl><dt>Problem</dt><dd>${esc(c.problem)}</dd>
      <dt>Approach</dt><dd><ul>${c.approach.map((a) => `<li>${esc(a)}</li>`).join("")}</ul></dd>
      <dt>Outcome</dt><dd>${esc(c.outcome)}</dd></dl>
      ${c.metric ? `<div class="metric"><b class="grad-text">${esc(c.metric.value)}</b><span>${esc(c.metric.label)}</span></div>` : ""}
    </article>`).join("");

  /* ---------- repo showcase: one compact table; repos flip to "public" automatically once you publish them ---------- */
  const reqLink = (n) => b.email ? `mailto:${b.email}?subject=${encodeURIComponent("Code walkthrough / access request: " + n)}` : b.linkedin;
  function renderShowcase(pub = new Set()) {
    const list = R.showcase || []; const host = $("#showcase-grid");
    if (!list.length) { host.hidden = true; return; }
    const open = list.filter((x) => pub.has(x.name)).length;
    host.innerHTML = `<div class="card reveal in" style="grid-column:1/-1"><div class="row" style="justify-content:space-between;margin-bottom:.6rem">
      <h3>${list.length} framework repositories · ${new Set(list.flatMap((x) => x.stack)).size} technologies <span class="note">(${open} public)</span></h3>
      <a class="btn small" data-req="all" href="${esc(reqLink("framework repositories"))}" target="_blank" rel="noopener">Request walkthrough / access</a></div>
      <div style="overflow-x:auto"><table class="auto"><thead><tr><th>Repository</th><th>Stack</th><th>Access</th></tr></thead><tbody>${list.map((x) => {
        const isPub = pub.has(x.name);
        return `<tr><td>${isPub ? `<a href="https://github.com/${esc(C.githubUser)}/${esc(x.name)}" target="_blank" rel="noopener"><b>${esc(x.name)}</b> ↗</a>` : `<b>${esc(x.name)}</b>`}<br><span class="note">${esc(x.desc)}</span>${x.demo ? `<br><button class="btn small" data-demo="${esc(x.demo)}" data-name="${esc(x.name)}" style="margin-top:.4rem">▶ Watch demo</button>` : ""}</td>
          <td><div class="chips">${x.stack.map((t) => `<span class="chip core">${esc(t)}</span>`).join("")}</div></td>
          <td>${isPub ? "✅ Public" : "🔒 On request"}</td></tr>`; }).join("")}</tbody></table></div></div>`;
  }
  window.__renderShowcase = renderShowcase; renderShowcase();
  document.addEventListener("click", (e) => {
    const d = e.target.closest("[data-demo]"); if (!d) return;
    let dlg = $("#demo-dlg");
    if (!dlg) {
      dlg = document.createElement("dialog"); dlg.id = "demo-dlg";
      dlg.innerHTML = `<div class="row" style="justify-content:space-between;margin-bottom:.5rem"><b id="demo-title"></b><button class="btn small" id="demo-close">✕ Close</button></div>
        <video controls playsinline preload="metadata" controlsList="nodownload noplaybackrate" disablePictureInPicture style="width:100%;border-radius:8px;background:#000"></video>`;
      document.body.appendChild(dlg);
      const v = dlg.querySelector("video"); v.addEventListener("contextmenu", (ev) => ev.preventDefault());
      const close = () => { v.pause(); dlg.close(); };
      dlg.querySelector("#demo-close").onclick = close;
      dlg.addEventListener("click", (ev) => { if (ev.target === dlg) close(); });
      dlg.addEventListener("close", () => v.pause());
    }
    dlg.querySelector("#demo-title").textContent = d.dataset.name + " - demo";
    const v = dlg.querySelector("video"); v.src = d.dataset.demo; dlg.showModal(); v.play().catch(() => {});
    if (window.Track) Track.event("repo_demo_play", { repo: d.dataset.name });
  });
  document.addEventListener("click", (e) => { const a = e.target.closest("[data-req]"); if (a && window.Track) Track.event("repo_access_request", { repo: a.dataset.req }); });

  /* ---------- GitHub: live repos ---------- */
  const repoCard = (name, desc, meta, url) => `
    <a class="card repo reveal" href="${esc(url)}" target="_blank" rel="noopener" style="color:inherit;text-decoration:none">
      <h3>📦 ${esc(name)}</h3><p>${esc(desc || "No description yet.")}</p><div class="meta">${meta}</div></a>`;
  $("#projects-grid").innerHTML = repoCard(`${b.github.split("/").pop()} on GitHub`, "Browse my repositories: automation frameworks, test utilities and experiments.", "↗ github.com", b.github);

  async function loadRepos() {
    const u = C.githubUser; if (!u) return;
    try {
      let repos = JSON.parse(sessionStorage.getItem("repos:" + u) || "null");
      if (!repos) {
        const r = await fetch(`https://api.github.com/users/${encodeURIComponent(u)}/repos?per_page=100&sort=updated`);
        if (!r.ok) throw new Error(r.status);
        repos = await r.json(); sessionStorage.setItem("repos:" + u, JSON.stringify(repos));
      }
      repos = repos.filter((x) => !x.fork && !x.archived);
      renderShowcase(new Set(repos.map((x) => x.name)));
      if (C.pinnedRepos.length) repos = C.pinnedRepos.map((n) => repos.find((x) => x.name === n)).filter(Boolean);
      else repos = repos.sort((a, c) => c.stargazers_count - a.stargazers_count || new Date(c.pushed_at) - new Date(a.pushed_at)).slice(0, 6);
      if (!repos.length) return;
      $("#projects-grid").innerHTML = repos.map((x) => repoCard(x.name, x.description,
        `${x.language ? "● " + esc(x.language) : ""}<span>★ ${x.stargazers_count}</span><span>⑂ ${x.forks_count}</span>`, x.html_url)).join("");
      $("#gh-note").innerHTML = `Live from <a href="https://github.com/${esc(u)}" target="_blank" rel="noopener">github.com/${esc(u)}</a>`;
      if (C.showContribChart) {
        const c = $("#contrib"); c.hidden = false;
        c.innerHTML = `<img alt="GitHub contribution graph for ${esc(u)}" loading="lazy" src="https://ghchart.rshah.org/6d5ef0/${encodeURIComponent(u)}" onerror="this.closest('#contrib').hidden=true">`;
      }
    } catch (_) { /* keep fallback card */ }
  }
  loadRepos();

  /* ---------- dashboard (computed from R.experience) ---------- */
  const companies = new Set(R.experience.map((e) => e.company));
  const toolCount = R.skillGroups.reduce((n, g) => n + g.items.length, 0);
  const kpis = [
    { label: "Client engagements", value: engs.length, note: `across ${companies.size} employers` },
    { label: "Industries", value: new Set(engs.map((g) => g.domain.split("/")[0].trim())).size, note: "finance, health, telecom, retail, energy, CPG" },
    { label: "Capabilities applied", value: R.capabilities.length, note: "UI · mobile · API · perf · data · AI" },
    { label: "Tools & technologies", value: toolCount, note: "frameworks, languages, CI/CD, test mgmt" }
  ];
  $("#kpis").innerHTML = kpis.map((k) => `<div class="card kpi reveal"><h3>${esc(k.label)}</h3>
    <b class="grad-text" data-count="${k.value}" data-suf="" data-pre="">0</b><span>${esc(k.note)}</span></div>`).join("");

  // Gantt: one row per engagement
  (function gantt() {
    const num = (s) => { const [y, m] = s.split("-").map(Number); return y + (m - 1) / 12; };
    const rows = [...engs].sort((a, c) => num(c.from) - num(a.from) || num(c.to) - num(a.to));
    const min = Math.floor(Math.min(...rows.map((r) => num(r.from)))), max = Math.ceil(Math.max(...rows.map((r) => num(r.to) + 1 / 12)));
    const W = 920, L = 210, rowH = 30, top = 26, H = top + rows.length * rowH + 8;
    const x = (v) => L + ((v - min) / (max - min)) * (W - L - 10);
    const color = { "Publicis Sapient": "var(--accent)", "TELUS": "var(--accent-2)", "SaskTel": "var(--warn)" };
    let s = `<svg class="chart" viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Timeline of ${rows.length} client engagements from ${min} to ${max}">`;
    for (let yr = min; yr <= max; yr += 2) s += `<line class="grid-l" x1="${x(yr)}" x2="${x(yr)}" y1="${top - 6}" y2="${H - 8}"/><text x="${x(yr)}" y="14" text-anchor="middle">${yr}</text>`;
    rows.forEach((r, i) => {
      const y = top + i * rowH, x1 = x(num(r.from)), w = Math.max(x(num(r.to) + 1 / 12) - x1, 6);
      s += `<text x="${L - 10}" y="${y + 17}" text-anchor="end">${esc(r.client.length > 30 ? r.client.slice(0, 29) + "…" : r.client)}</text>
        <rect x="${x1}" y="${y + 5}" width="${w}" height="18" rx="9" fill="${color[r.company] || "var(--accent)"}" opacity=".9"><title>${esc(r.client)} (${esc(r.company)}): ${esc(r.period)}</title></rect>`;
    });
    $("#gantt").innerHTML = s + `</svg><div class="chips" style="margin-top:.4rem">${Object.entries(color).map(([k, v]) => `<span class="chip"><span class="dot" style="background:${v}"></span>${k}</span>`).join("")}</div>`;
  })();

  // Capability matrix
  (function matrix() {
    const caps = R.capabilities;
    const sorted = [...engs].sort((a, c) => c.from.localeCompare(a.from));
    const total = caps.map((c) => engs.filter((g) => g.caps.includes(c)).length);
    $("#matrix").innerHTML = `<table class="matrix"><thead><tr><th>Engagement</th>${caps.map((c) => `<th scope="col"><span>${esc(c)}</span></th>`).join("")}</tr></thead><tbody>` +
      sorted.map((g) => `<tr><th scope="row">${esc(g.client)}<small>${esc(g.domain)}</small></th>${caps.map((c) => g.caps.includes(c) ? `<td class="on" aria-label="yes">●</td>` : `<td aria-label="no"></td>`).join("")}</tr>`).join("") +
      `</tbody><tfoot><tr><th scope="row">Engagements using it</th>${total.map((t) => `<td>${t}</td>`).join("")}</tr></tfoot></table>`;
  })();

  /* ---------- resume download buttons (tracked) ---------- */
  function fileDownload(href) { const a = document.createElement("a"); a.href = href; a.download = ""; document.body.appendChild(a); a.click(); a.remove(); }
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-dl]"); if (!btn) return;
    e.preventDefault();
    const kind = btn.dataset.dl, f = C.resumeFiles || {};
    window.Track && Track.event("resume_download", { format: kind });
    document.querySelectorAll("details.menu").forEach((d) => d.removeAttribute("open"));
    if (kind === "pdf") f.pdf ? fileDownload(f.pdf) : window.open("resume.html?print=1" + (window.Track && Track.ref ? "&r=" + encodeURIComponent(Track.ref) : ""), "_blank");
    else f.docx ? fileDownload(f.docx) : E.downloadWord(E.defaultView(R));
  });
  document.addEventListener("click", (e) => { if (!e.target.closest("details.menu")) document.querySelectorAll("details.menu").forEach((d) => d.removeAttribute("open")); });

  /* ---------- mobile menu ---------- */
  const navEl = $("#nav-links"), menuBtn = $("#menu");
  const setMenu = (open) => { navEl.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", open); menuBtn.textContent = open ? "✕" : "☰"; menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
  menuBtn.addEventListener("click", () => setMenu(!navEl.classList.contains("open")));
  navEl.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("click", (e) => { if (!e.target.closest("header.nav")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  /* ---------- theme toggle ---------- */
  $("#theme").addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    const apply = () => { document.documentElement.dataset.theme = next; try { localStorage.setItem("theme", next); } catch (_) {} };
    document.startViewTransition ? document.startViewTransition(apply) : apply();
  });

  /* ---------- count-up + reveal fallback ---------- */
  const io = new IntersectionObserver((es) => es.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target; io.unobserve(el);
    if (el.dataset.count) {
      const end = +el.dataset.count, pre = el.dataset.pre || "", suf = el.dataset.suf || "", t0 = performance.now();
      const step = (t) => { const p = Math.min((t - t0) / 1100, 1); el.textContent = pre + Math.round(end * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    } else el.classList.add("in");
  }), { threshold: 0.2 });
  document.querySelectorAll("[data-count], .reveal").forEach((el) => io.observe(el));
})();
