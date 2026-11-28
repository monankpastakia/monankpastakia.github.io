/* ============================================================
   Resume rendering + export (ATS-friendly, single column)
   window.ResumeExport = { defaultView, renderSheet, css, downloadWord, injectCss, esc }
   A "view" = { basics, headline, summary, skills:[{group,items:[str]}],
                experience:[{company,role,location,start,end,engagements:[{client,domain,period,tech:[str],bullets:[str]}]}],
                education, certifications:[str], languages:[str] }
   ============================================================ */
(() => {
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const css = `
  .rs{font-family:Calibri,"Segoe UI",Arial,sans-serif;color:#111;font-size:10pt;line-height:1.35;background:#fff;padding:0.45in 0.55in;max-width:8.5in;margin:0 auto}
  .rs h1{font-size:21pt;margin:0;letter-spacing:.2px}
  .rs .hl{font-size:11.5pt;color:#333;margin:2px 0 3px}
  .rs .ct{font-size:9.5pt;color:#333;margin-bottom:6px}
  .rs h2{font-size:10.5pt;text-transform:uppercase;letter-spacing:1px;border-bottom:1.5px solid #222;padding-bottom:2px;margin:10px 0 5px}
  .rs p{margin:0 0 3px}
  .rs .job{margin-bottom:7px}
  .rs .jh,.rs .eh{display:flex;justify-content:space-between;gap:12px}
  .rs .jh{font-weight:700;font-size:10.5pt}
  .rs .jh span:last-child,.rs .eh span:last-child{font-weight:400;white-space:nowrap}
  .rs .jr{font-style:italic;color:#333}
  .rs .eng{margin:4px 0 2px 0}
  .rs .eh{font-size:10pt}
  .rs .es{font-size:9pt;color:#444}
  .rs ul{margin:2px 0 0 18px;padding:0}
  .rs li{margin-bottom:1.5px}
  .rs .sk b{font-weight:700}
  `;

  function defaultView(R) {
    return {
      basics: R.basics,
      headline: R.basics.title,
      summary: R.basics.summary,
      skills: R.skillGroups.map((g) => ({ group: g.group, items: g.items.filter((i) => i.show !== false).map((i) => i.name) })).filter((g) => g.items.length),
      experience: R.experience.map((j) => ({
        company: j.company, role: j.role, location: j.location, start: j.start, end: j.end,
        engagements: j.engagements.map((g) => ({
          client: g.client, domain: g.domain, period: g.period, tech: g.stack || [],
          bullets: g.bullets.filter((b) => b.show).map((b) => b.text)
        }))
      })),
      education: R.education,
      certifications: R.certifications.map((c) => c.name),
      languages: R.spokenLanguages || []
    };
  }

  function renderSheet(v) {
    const b = v.basics;
    const contact = [b.location, b.phone, b.email, b.linkedin && b.linkedin.replace(/^https?:\/\/(www\.)?/, ""), b.github && b.github.replace(/^https?:\/\//, ""), b.website && b.website.replace(/^https?:\/\//, "")]
      .filter(Boolean).map(esc).join(" &nbsp;|&nbsp; ");
    return `<div class="rs">
      <h1>${esc(b.name)}</h1>
      <div class="hl">${esc(v.headline)}</div>
      <div class="ct">${contact}</div>
      <h2>Professional Summary</h2><p>${esc(v.summary)}</p>
      <h2>Technical Skills</h2>
      ${v.skills.map((g) => `<p class="sk"><b>${esc(g.group)}:</b> ${g.items.map(esc).join(", ")}</p>`).join("")}
      <h2>Professional Experience</h2>
      ${v.experience.map((j) => `<div class="job">
        <div class="jh"><span>${esc(j.company)}${j.location ? " - " + esc(j.location) : ""}</span><span>${esc(j.start)} - ${esc(j.end)}</span></div>
        <div class="jr">${esc(j.role)}</div>
        ${j.engagements.map((g) => `<div class="eng">
          <div class="eh"><span><b>${esc(g.client)}</b>${g.domain ? " | " + esc(g.domain) : ""}</span>${j.engagements.length > 1 || j.start + j.end !== g.period.replace(" - ", "") ? `<span>${esc(g.period)}</span>` : ""}</div>
          ${g.tech && g.tech.length ? `<div class="es"><b>Tech:</b> ${g.tech.map(esc).join(", ")}</div>` : ""}
          <ul>${g.bullets.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}
      </div>`).join("")}
      <h2>Certifications</h2><p>${(v.certifications || []).map(esc).join(" &nbsp;•&nbsp; ")}</p>
      <h2>Education</h2>
      ${(v.education || []).map((e) => `<p><b>${esc(e.degree)}</b>, ${esc(e.school)} (${esc(e.year)})</p>`).join("")}
      ${v.languages && v.languages.length ? `<p><b>Languages:</b> ${v.languages.map(esc).join(", ")}</p>` : ""}
    </div>`;
  }

  function slug(v) { return (v.basics.name || "Resume").replace(/[^\w]+/g, "-"); }

  function downloadWord(v, suffix = "") {
    // Word opens HTML-in-.doc natively; use File > Save As > .docx if you need real docx.
    const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
      <head><meta charset="utf-8"><title>${esc(v.basics.name)} Resume</title>
      <style>@page{size:8.5in 11in;margin:.5in}${css.replace("max-width:8.5in;margin:0 auto", "")}.rs .jh,.rs .eh{display:block}</style></head>
      <body>${renderSheet(v)}</body></html>`;
    const blob = new Blob(["﻿", html], { type: "application/msword" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${slug(v)}-Resume${suffix}.doc`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  function injectCss() {
    if (document.getElementById("rs-css")) return;
    const s = document.createElement("style"); s.id = "rs-css"; s.textContent = css; document.head.appendChild(s);
  }

  window.ResumeExport = { defaultView, renderSheet, css, downloadWord, injectCss, esc };
})();
