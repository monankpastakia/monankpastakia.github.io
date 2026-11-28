/* ============================================================
   SITE CONFIG  -  the only file you edit for integrations
   ============================================================ */
window.SITE_CONFIG = {
  // --- GitHub portfolio -------------------------------------------------
  githubUser: "monankpastakia",
  pinnedRepos: ["playwright-typescript", "webdriver-appium-cucumber-typescript", "playwright-cucumber-java-testng", "cypress-javascript", "playwright-python-behavex"],  // only public ones appear; empty list = auto
  showContribChart: true,       // contribution heat-map image (ghchart.rshah.org)

  // --- Analytics (use any/all; leave "" to disable) ---------------------
  analytics: {
    goatcounter: "monankpastakia",          // your code -> https://CODE.goatcounter.com  (free, no cookies)
    ga4: "",                    // e.g. "G-XXXXXXXXXX"
    cloudflareToken: ""         // Cloudflare Web Analytics beacon token
  },

  // --- Instant "recruiter opened / downloaded" alerts -------------------
  // URL of your deployed Cloudflare Worker (see /worker + README). "" = off
  notifyEndpoint: "https://portfolio-notify.monankpastakia.workers.dev",

  // Honour browser Do-Not-Track / Global Privacy Control (recommended: true)
  respectDNT: true,

  // --- Resume files -----------------------------------------------------
  // Leave "" to auto-generate from resume-data.js. Or drop your own polished
  // files into assets/resume/ and put the paths here.
  resumeFiles: {
    pdf:  "",                   // e.g. "assets/resume/Monank-Pastakia-SDET-Resume.pdf"
    docx: ""                    // e.g. "assets/resume/Monank-Pastakia-SDET-Resume.docx"
  }
};
