/* ============================================================
   RESUME DATA  -  single source of truth (SDET / QE profile).
   Website, resume.html, Word/PDF export and the JD tailor tool read this.

   KEYWORD BANK (how you reach 55-70% JD coverage honestly):
   - skills  with show:false   -> real skills hidden on the resume by default,
                                  surfaced automatically when a JD asks for them
   - bullets with show:false   -> real achievements kept in reserve, swapped in
                                  when they match a JD better
   - aliases                   -> other ways a JD might word the same skill
   Keep only what is TRUE and you can discuss in an interview.

   TODO (yours): add email/phone if you want them public, and real numbers
   (e.g. "cut regression from 3 days to 4 hours") to the bullets marked  // + metric
   ============================================================ */
window.RESUME = {
  basics: {
    name: "Monank Pastakia",
    title: "Senior SDET | Quality Engineering & Test Automation",
    tagline: "I build fast, reliable test automation and data-quality safety nets for web, mobile, API and enterprise migrations.",
    availability: "Senior SDET · Toronto, Ontario, Canada",
    location: "Toronto, Ontario, Canada",
    email: "pastakia.monank@gmail.com",
    phone: "+1 (587) 784-7869",
    linkedin: "https://www.linkedin.com/in/monank-pastakia-62555187",
    github: "https://github.com/monankpastakia",
    website: "https://monankpastakia.github.io/",
    summary:
      "Senior SDET / Quality Engineer with 12+ years across wealth management, healthcare, telecom, e-commerce, retail and energy. " +
      "Designs Playwright, Selenium, Appium and WebDriverIO automation frameworks (POM, BDD/Cucumber), API and performance testing (Gatling, Locust), CI/CD pipelines (GitHub Actions, Harness), and validates large-scale financial data migrations (Addepar, Salesforce). " +
      "Removes QE bottlenecks in fast-paced Agile delivery, mentors teams on quality best practices, and ships reliable releases at speed."
  },

  stats: [
    { value: 12, suffix: "+", label: "Years in software quality" },
    { value: 7,  suffix: "",  label: "Industries tested across" },
    { value: 10, suffix: "",  label: "Client engagements" },
    { value: 25, suffix: "+", label: "Tools & frameworks" }
  ],

  about: [
    "I'm an SDET who treats quality as an engineering problem: build the framework, wire it into CI, make failures easy to diagnose, and keep the suite fast enough that teams actually trust it.",
    "My day-to-day covers web automation with Playwright and Selenium, mobile automation with Appium on real-device clouds like BrowserStack, and API automation with Rest Assured and Postman, all in maintainable POM/BDD frameworks that run in CI.",
    "From Appium suites on BrowserStack at TELUS, to a Gatling performance framework for an AI-driven marketing platform, to reconciling wealth-management data into Addepar - I move between UI, API, mobile, performance and data validation as the project needs.",
    "I also test the AI itself: AI-driven test execution through MCP (Model Context Protocol) servers, and prompt and LLM-output validation to check that AI features respond accurately, consistently and safely."
  ],
  aboutChips: ["Playwright / Selenium (web)", "Appium (mobile)", "API automation", "AI-driven testing via MCP", "Prompt & LLM output validation", "BDD & POM frameworks", "Performance testing", "Data migration validation", "CI/CD pipelines", "Mentoring & test strategy"],

  /* capability columns for the dashboard matrix */
  capabilities: ["Web UI", "Mobile", "API", "Performance", "Data/Migration", "BDD", "CI/CD", "AI/LLM", "Leadership", "Manual/Exploratory"],

  skillGroups: [
    { group: "Test Automation", items: [
      { name: "Playwright", aliases: ["end-to-end testing", "e2e"], show: true },
      { name: "Selenium WebDriver", aliases: ["selenium", "webdriver"], show: true },
      { name: "Appium", aliases: ["appium 2.0", "mobile automation"], show: true },
      { name: "WebDriverIO", aliases: ["webdriver.io", "wdio"], show: true },
      { name: "XCUITest", aliases: ["ios automation"], show: true },
      { name: "Espresso", aliases: ["android automation"], show: true },
      { name: "Cucumber (BDD/Gherkin)", aliases: ["cucumber", "gherkin", "bdd", "behavior driven development"], show: true },
      { name: "BehaveX (Python BDD)", aliases: ["behavex", "behave", "python bdd", "parallel bdd"], show: true },
      { name: "pytest", aliases: ["py.test", "python testing", "pytest-bdd", "pytest-xdist"], show: true },
      { name: "Page Object Model (POM)", aliases: ["pom", "page object"], show: true },
      { name: "Automation Framework Design", aliases: ["test automation framework", "framework architecture", "sdet", "hybrid framework"], show: true },
      { name: "TestNG", aliases: [], show: true },
      { name: "JUnit", aliases: [], show: true },
      { name: "MSTest", aliases: [], show: false },
      { name: "Allure Reports", aliases: ["allure", "test reporting"], show: true }
    ]},
    { group: "API & Performance Testing", items: [
      { name: "Postman", aliases: [], show: true },
      { name: "Rest Assured", aliases: ["restassured"], show: true },
      { name: "API Testing", aliases: ["api automation", "rest api", "restful", "microservices", "web services"], show: true },
      { name: "Microservices API Automation", aliases: ["microservice testing", "backend api testing", "service-level testing"], show: true },
      { name: "Gatling", aliases: [], show: true },
      { name: "Locust (Python)", aliases: ["locust", "locust.io", "python load testing"], show: true },
      { name: "JMeter", aliases: [], show: true },
      { name: "Load / Stress / Spike Testing", aliases: ["performance testing", "load testing", "stress testing"], show: true }
    ]},
    { group: "Languages", items: [
      { name: "Java", aliases: [], show: true },
      { name: "Python", aliases: ["python3", "python scripting"], show: true },
      { name: "JavaScript", aliases: ["node.js", "nodejs"], show: true },
      { name: "TypeScript", aliases: [], show: true },
      { name: "C#", aliases: [".net"], show: true },
      { name: "Swift", aliases: [], show: false },
      { name: "Kotlin", aliases: [], show: false },
      { name: "SQL", aliases: ["database testing"], show: true },
      { name: "HTML/CSS", aliases: [], show: false },
      { name: "XML", aliases: [], show: false }
    ]},
    { group: "CI/CD, Cloud & Devices", items: [
      { name: "Jenkins", aliases: [], show: true },
      { name: "GitHub Actions", aliases: ["github workflows"], show: true },
      { name: "Harness", aliases: ["harness ci", "harness pipelines", "harness.io"], show: true },
      { name: "Kubernetes (test-runner images)", aliases: ["kubernetes", "k8s", "docker", "containers"], show: false },
      { name: "Azure DevOps", aliases: ["azure pipelines", "tfs", "team foundation server"], show: true },
      { name: "CI/CD", aliases: ["continuous integration", "continuous delivery", "pipelines"], show: true },
      { name: "Git", aliases: ["github", "version control", "pull request"], show: true },
      { name: "Maven", aliases: [], show: false },
      { name: "BrowserStack", aliases: ["cloud device farm", "cross-browser", "cross-device"], show: true },
      { name: "LambdaTest", aliases: ["cloud testing platform"], show: true },
      { name: "Sauce Labs", aliases: ["saucelabs", "cloud testing platform"], show: true },
      { name: "Google Cloud Platform (GCP)", aliases: ["gcp", "google cloud", "log analysis"], show: true }
    ]},
    { group: "QE Practice & Leadership", items: [
      { name: "Test Strategy & Planning", aliases: ["test plan", "test approach", "test estimation", "test design"], show: true },
      { name: "Agile / Scrum / SAFe", aliases: ["agile", "scrum", "safe", "sprint"], show: true },
      { name: "Regression & Smoke Testing", aliases: ["regression testing", "smoke testing"], show: true },
      { name: "Exploratory & Functional Testing", aliases: ["manual testing", "exploratory testing", "functional testing", "uat", "integration testing", "system testing"], show: true },
      { name: "Defect Triage & Root-Cause Analysis", aliases: ["defect management", "bug tracking", "rca"], show: true },
      { name: "Mentoring & Team Leadership", aliases: ["coaching", "technical leadership", "team lead"], show: true },
      { name: "Accessibility Testing", aliases: ["accessibility", "wcag"], show: false },
      { name: "Cross-functional Collaboration", aliases: ["collaboration", "stakeholder", "communication"], show: false }
    ]},
    { group: "Test Management", items: [
      { name: "Jira", aliases: [], show: true },
      { name: "Xray", aliases: [], show: true },
      { name: "TestRail", aliases: [], show: false },
      { name: "Zephyr", aliases: [], show: false },
      { name: "qTest", aliases: [], show: false },
      { name: "HP ALM", aliases: ["alm"], show: false },
      { name: "MTM", aliases: ["microsoft test manager"], show: false },
      { name: "Confluence", aliases: [], show: false }
    ]},
    { group: "Domain & Data", items: [
      { name: "Data Migration & Reconciliation", aliases: ["data validation", "data migration", "data reconciliation", "data quality", "data testing"], show: true },
      { name: "Addepar", aliases: [], show: true },
      { name: "Salesforce", aliases: [], show: true },
      { name: "Wealth Management / Financial Services", aliases: ["financial services", "wealth management", "investment", "banking"], show: true },
      { name: "Healthcare / Medicare", aliases: ["healthcare", "medicare", "hipaa"], show: true },
      { name: "Telecom", aliases: ["telecommunications"], show: false },
      { name: "E-commerce & Retail", aliases: ["e-commerce", "ecommerce", "retail"], show: true },
      { name: "Order Management System (OMS)", aliases: ["oms", "order management"], show: true },
      { name: "Netcracker", aliases: ["telecom oss/bss", "oss", "bss"], show: true },
      { name: "Oracle ATG Commerce", aliases: ["oracle atg"], show: false },
      { name: "GenAI / LLM & Responsible AI Validation", aliases: ["generative ai", "llm", "responsible ai", "ai"], show: true },
      { name: "AI-assisted Testing (Copilot, ChatGPT)", aliases: ["copilot", "chatgpt", "prompt engineering"], show: false }
    ]}
  ],

  /* ---------- Experience: employer -> client engagements ----------
     from/to = YYYY-MM (used by the dashboard timeline) */
  experience: [
    {
      company: "Publicis Sapient", role: "Senior Quality Engineer (SDET), L1", location: "Toronto, ON",
      start: "Jan 2022", end: "Nov 2026",
      blurb: "Consulting engagements across wealth management, healthcare, financial services, energy, retail and CPG.",
      engagements: [
        {
          client: "Corient Partners LLC", domain: "Wealth Management", period: "Jan 2026 - Nov 2026", from: "2026-01", to: "2026-11",
          project: "2026 PMS Consolidation to Addepar Extension",
          caps: ["Data/Migration"],
          stack: ["Addepar", "Salesforce", "Data Migration", "Billing Reconciliation"],
          summary: "Consolidated legacy portfolio-management systems from recently acquired wealth offices into Addepar: discovery, translation, validation and reconciliation of financial, account and billing data.",
          bullets: [
            { show: true,  tags: ["data migration","stakeholder"], text: "Led discovery, translation and standardization of legacy PMS data from acquired wealth offices into Addepar, working directly with office POCs and client stakeholders." },
            { show: true,  tags: ["salesforce","addepar","data"], text: "Mapped and converted disparate datasets to standard formats per business rules and client sign-off; loaded into Salesforce and Addepar with structural accuracy and completeness checks." },
            { show: true,  tags: ["reconciliation","billing","validation"], text: "Validated and reconciled migrated accounts, fee structures and billing groups; produced and finalized post-migration billing reports to verify financial accuracy before client onboarding." }, // + metric: accounts / records reconciled
            { show: false, tags: ["analysis","fee schedules"], text: "Analyzed legacy account setups, billing-group compositions and fee schedules to define validation rules for each office." }
          ]
        },
        {
          client: "Humana", domain: "Healthcare", period: "Oct 2025 - Dec 2025", from: "2025-10", to: "2025-12",
          project: "HUM | Reliance Q4 Extension (Medicare enrollment platform)",
          caps: ["Web UI", "Manual/Exploratory"],
          stack: ["Playwright", "Agile QE", "End-to-End Functional Testing"],
          summary: "Stepped into a high-pressure Q4 window on the Medicare platform (doctor/pharmacy search, plan comparison, enrollment) to clear QE bottlenecks and rapidly scale automation.",
          bullets: [
            { show: true,  tags: ["playwright","automation","regression"], text: "Architected a rapid Playwright web-automation strategy and automated the majority of user stories in an accelerated Q4 timeframe, establishing reliable regression coverage." }, // + metric
            { show: true,  tags: ["process","triage","qe"], text: "Streamlined the QE workflow and defect-triage process to remove testing bottlenecks and stabilize builds under tight release deadlines." },
            { show: true,  tags: ["defects","severity","release"], text: "Identified, documented and tracked high-priority/high-severity defects, partnering with developers to drive fast resolution ahead of production release." },
            { show: false, tags: ["exploratory","manual","e2e"], text: "Performed end-to-end manual and exploratory testing of Medicare enrollment flows: provider search, pharmacy lookup, plan selection and enrollment submission." }
          ]
        },
        {
          client: "The Vanguard Group", domain: "Investments / Wealth", period: "May 2024 - Dec 2024", from: "2024-05", to: "2024-12",
          project: "Vanguard Mobile App (iOS/Android)",
          caps: ["Mobile", "BDD", "Leadership"],
          stack: ["WebDriverIO", "Appium", "JavaScript", "Cucumber (BDD)", "POM", "Jira", "Xray"],
          summary: "Mobile investing platform for registered (IRA, 401K), non-registered and brokerage accounts: portfolio tracking, trading, research, tax forms and bank linking.",
          bullets: [
            { show: true,  tags: ["framework","webdriverio","appium","bdd"], text: "Architected the mobile automation framework and set strategy, standards and guidelines using WebDriverIO, Appium, JavaScript and Cucumber (BDD)." },
            { show: true,  tags: ["leadership","mentoring"], text: "Led and mentored the QA automation team on automation best practices, testing methodology and tooling; reviewed POM framework code and cross-platform execution results." },
            { show: true,  tags: ["gherkin","bdd","strategy","metrics"], text: "Wrote BDD scenarios in Gherkin and produced test estimates, status reports and quality metrics aligned with product goals." },
            { show: false, tags: ["jira","xray","agile"], text: "Managed testing and automation work in Jira and Xray with Agile reporting." },
            { show: false, tags: ["planning","scope","milestones"], text: "Defined scope, objectives and timelines and allocated resources to hit project milestones." }
          ]
        },
        {
          client: "Enterprise Products Operating LP", domain: "Energy (Oil & Gas)", period: "Mar 2023 - Apr 2024", from: "2023-03", to: "2024-04",
          project: "Operations management web application",
          caps: ["Web UI", "CI/CD", "Manual/Exploratory"],
          stack: ["Azure DevOps", "Web UI Automation", "Test Approach Documents"],
          summary: "Web application for managing assets, production, maintenance schedules and compliance reporting across oil and gas operations.",
          bullets: [
            { show: true,  tags: ["test approach","documentation","automation"], text: "Analyzed Technical Acceptance Criteria and business design documents to write Test Approach documents, then built and maintained automation scripts aligned to them." },
            { show: true,  tags: ["azure devops","pipeline","troubleshooting"], text: "Orchestrated automation suite pipelines in Azure DevOps and analyzed failed runs, reproducing locally to isolate root causes and keep scripts reliable." },
            { show: false, tags: ["manual","bugs","triage"], text: "Executed manual test cases and logged bug tickets, collaborating with developers and team leads on triage and resolution." },
            { show: false, tags: ["scrum","agile"], text: "Participated in all scrum ceremonies: planning/grooming, sprint planning, stand-ups and retrospectives." }
          ]
        },
        {
          client: "REI", domain: "Retail / E-commerce", period: "Jan 2022 - Jan 2023", from: "2022-01", to: "2023-01",
          project: "REI web, iOS and Android apps",
          caps: ["Mobile", "Manual/Exploratory"],
          stack: ["XCUITest (Swift)", "Espresso (Kotlin)", "Git", "Charles Proxy"],
          summary: "Web and native mobile apps for product discovery, e-commerce checkout, class booking, loyalty and order tracking.",
          bullets: [
            { show: true,  tags: ["xcuitest","espresso","swift","kotlin","mobile"], text: "Created and updated native mobile automation in XCUITest (Swift) and Espresso (Kotlin), keeping classes, functions and test data aligned to SDET standards." },
            { show: true,  tags: ["estimation","user stories","planning"], text: "Reviewed user stories to estimate SDET automation and manual QA effort; prepared test cases and automation plans." },
            { show: true,  tags: ["defects","charles","logs","git","pull request"], text: "Logged detailed defects with logs, Charles proxy responses, screenshots and video; followed Git PR review and approval processes." },
            { show: false, tags: ["process improvement","reports","scrum"], text: "Proposed process, framework and test-report improvements; active in refinement, planning, bug triage and retrospectives." }
          ]
        },
        {
          client: "Mondelez", domain: "CPG / AI Marketing Platform", period: "Jan 2022 - May 2022", from: "2022-01", to: "2022-05",
          project: "AI-powered digital content platform (Oreo, Chips Ahoy, Milka)",
          caps: ["Web UI", "API", "Performance", "BDD", "AI/LLM"],
          stack: ["Gatling", "Java", "Playwright", "Cucumber", "JavaScript", "TypeScript", "LLM / RAI"],
          summary: "Platform where brand teams generate, validate and publish marketing content across channels using LLMs with Responsible AI checks; TypeScript UI over a multi-layer (DE/DS) backend.",
          bullets: [
            { show: true,  tags: ["gatling","performance","load","stress","spike","java"], text: "Designed a Gatling (Java) framework to measure front-end performance; ran load, stress and spike tests and gave dev and infra teams actionable findings on responsiveness and scalability." }, // + metric
            { show: true,  tags: ["playwright","cucumber","javascript","regression"], text: "Contributed Playwright + Cucumber + JavaScript UI automation, expanding coverage and speeding regression cycles." },
            { show: true,  tags: ["ai","llm","rai","validation"], text: "Validated AI-generated marketing content for brand tone, safety and compliance with Responsible AI (RAI) governance." },
            { show: false, tags: ["performance","memory","latency","defects"], text: "Identified performance bottlenecks, memory issues and high-latency UI components; logged reproducible defects with metrics and analysis." },
            { show: false, tags: ["collaboration","backend","ml"], text: "Worked with developers, DE/DS backend engineers, product managers and AI/ML teams to hold quality standards across the stack." },
            { show: false, tags: ["exploratory","functional","manual"], text: "Ran exploratory and functional testing of content-generation, AI-validation and publishing workflows." }
          ]
        }
      ]
    },
    {
      company: "TELUS", role: "QA Automation Engineer", location: "Canada",
      start: "Mar 2017", end: "Dec 2021",
      blurb: "Mobile and web automation for a streaming service and internal telecom engineering systems.",
      engagements: [
        {
          client: "Mobile Application Automation", domain: "Telecom / Streaming", period: "Mar 2017 - Dec 2021", from: "2017-03", to: "2021-12",
          project: "Native Android & iOS streaming apps",
          caps: ["Mobile", "CI/CD"],
          stack: ["Appium", "Java", "Maven", "TestNG", "BrowserStack", "LambdaTest", "Sauce Labs", "Jenkins", "GitHub Actions", "Harness"],
          summary: "Mobile automation to cut manual testing time and enable rapid regression and smoke runs to speed sprint and release timelines.",
          bullets: [
            { show: true,  tags: ["appium","pom","java","testng","maven"], text: "Built a Page Object Model framework with Maven, TestNG and Appium supporting both native Android and iOS apps." },
            { show: true,  tags: ["browserstack","jenkins","pipeline","reports"], text: "Ran suites on BrowserStack cloud devices through Jenkins pipelines and produced custom HTML reports from TestNG for the project team." },
            { show: true,  tags: ["lambdatest","sauce labs","browserstack","cloud","cross-browser","cross-device"], text: "Ran web and mobile automation on cloud platforms (BrowserStack, LambdaTest, Sauce Labs) for cross-browser and cross-device coverage." },
            { show: false, tags: ["github actions","workflow","pipeline","test automation"], text: "Set up GitHub Actions workflows to run the test automation suites." },
            { show: false, tags: ["harness","pipeline","kubernetes","dashboard","infra"], text: "Set up a Harness pipeline for test automation execution and integrated it with the dev pipeline; worked with the Infra team to configure the Kubernetes image with all required libraries and storage, and built a dashboard to view results from that storage." },
            { show: false, tags: ["requirements","automation candidates","sprint"], text: "Reviewed requirements and manual test cases every sprint to identify scenarios suitable for automation." },
            { show: false, tags: ["peer review","maintenance"], text: "Conducted peer script reviews and maintained automation through UI and functional changes." }
          ]
        },
        {
          client: "Web Application Automation", domain: "Telecom / Internal Asset Management", period: "Mar 2017 - Dec 2021", from: "2017-03", to: "2021-12",
          project: "Internal asset-management web application",
          caps: ["Web UI", "API", "Performance", "CI/CD"],
          stack: ["C#", "Selenium WebDriver", "MSTest", "TFS", "Azure Pipelines", "XML", "Locust", "Python", "Microservices API"],
          summary: "Automated the web interface used by telecom engineering to ingest content across integrated backend systems, reducing manual QA and surfacing issues early in the SDLC.",
          bullets: [
            { show: true,  tags: ["c#","selenium","mstest","pom"], text: "Implemented a Page Object Model framework in C# with MSTest and Selenium WebDriver, including reusable page classes, functions and libraries." },
            { show: true,  tags: ["tfs","azure pipelines","ci","git"], text: "Created TFS/Azure Pipelines integrated with development deployment pipelines and managed Git in the TFS repository." },
            { show: true,  tags: ["microservices","api","backend","automation"], text: "Automated backend microservice API tests alongside the web UI suite to catch integration issues early in the SDLC." },
            { show: false, tags: ["locust","performance","load","api","python"], text: "Performance-tested the web application APIs with Locust (Python)." },
            { show: false, tags: ["xml","test data"], text: "Parsed and updated XML files to load test data onto servers per script requirements." },
            { show: false, tags: ["estimates","planning","traceability","reports"], text: "Prepared automation plans with effort and timelines, plus technical documentation, coverage traceability, test status and defect reports." }
          ]
        }
      ]
    },
    {
      company: "SaskTel", role: "Test Analyst", location: "Canada",
      start: "Aug 2016", end: "Feb 2017",
      blurb: "",
      engagements: [
        {
          client: "E-Commerce Website Redesign", domain: "Telecom / E-commerce", period: "Aug 2016 - Feb 2017", from: "2016-08", to: "2017-02",
          project: "Backend migration to Oracle ATG Commerce",
          caps: ["Web UI", "Manual/Exploratory"],
          stack: ["Oracle ATG Commerce", "Oracle DB", "Java", "XML", "HP ALM"],
          summary: "Tested a redesigned telecom e-commerce site and backend migration managing products, pages, promotions and pricing catalogs.",
          bullets: [
            { show: true,  tags: ["test plan","strategy","hp alm","coverage"], text: "Developed test plans, strategies, scenarios and cases, mapping requirement coverage in HP ALM." },
            { show: true,  tags: ["cross-browser","functional","integration","e2e","usability"], text: "Performed functional, cross-browser, cross-device, integration, system, end-to-end and usability testing across desktop and mobile browsers." },
            { show: false, tags: ["defects","alm","reports"], text: "Logged defects linked to scenarios in HP ALM, escalated critical issues and presented end-of-cycle coverage and defect reports." }
          ]
        }
      ]
    },
    {
      company: "TELUS", role: "QA Analyst", location: "Canada",
      start: "Jul 2014", end: "Jul 2016",
      blurb: "",
      engagements: [
        {
          client: "Web, Mobile & Set-Top-Box Apps", domain: "Telecom / Streaming", period: "Jul 2014 - Jul 2016", from: "2014-07", to: "2016-07",
          project: "TELUS streaming (news, sports, entertainment, family profiles)",
          caps: ["Web UI", "Mobile", "Manual/Exploratory"],
          stack: ["TFS", "SQL", "Quality Engineering"],
          summary: "Quality engineering for web, mobile and STB streaming apps.",
          bullets: [
            { show: true,  tags: ["requirements","test cases","coverage"], text: "Derived scenarios and detailed test cases from BRD, SRS and FRD/wireframes and prepared requirement-coverage documents." },
            { show: true,  tags: ["smoke","regression","uat","accessibility","cross-browser"], text: "Executed build-verification, integration, functional, GUI, regression, exploratory, UAT, accessibility and cross-browser testing." },
            { show: true,  tags: ["sql","database","data validation"], text: "Validated customer profiles, credit-card transactions and purchase records directly in the SQL database to confirm database-to-web integration." },
            { show: false, tags: ["tfs","agile","reports"], text: "Managed user stories, test cases and defects in TFS and reported test and defect status to QA leads, PMs and developers in Agile ceremonies." }
          ]
        }
      ]
    }
  ],

  /* Private repos: shown as "request access" cards (name + what it proves, no code).
     Add one entry per repo you want to feature. Keep descriptions free of client/employer names.
     Example:
     { name: "playwright-ts-bdd-framework", desc: "Playwright + TypeScript + Cucumber framework with POM, Allure and GitHub Actions.",
       stack: ["Playwright","TypeScript","Cucumber","GitHub Actions"], status: "private" }   // status: "private" | "public" (+ url)
  */
  showcase: [
    {"name": "playwright-typescript", "desc": "Playwright end-to-end test automation in TypeScript.", "stack": ["Playwright", "TypeScript"], "status": "private"},
    {"name": "playwright-cucumber-javascript", "desc": "Playwright with Cucumber BDD in JavaScript.", "stack": ["Playwright", "Cucumber", "JavaScript"], "status": "private"},
    {"name": "playwright-javascript", "desc": "Playwright test automation in JavaScript.", "stack": ["Playwright", "JavaScript"], "status": "private"},
    {"name": "playwright-cucumber-java-testng", "desc": "Playwright with Cucumber BDD on Java and TestNG.", "stack": ["Playwright", "Cucumber", "Java", "TestNG"], "status": "private"},
    {"name": "playwright-java-testng", "desc": "Playwright test automation in Java with TestNG.", "stack": ["Playwright", "Java", "TestNG"], "status": "private"},
    {"name": "playwright-java-junit", "desc": "Playwright test automation in Java with JUnit.", "stack": ["Playwright", "Java", "JUnit"], "status": "private"},
    {"name": "playwright-python", "desc": "Playwright test automation in Python.", "stack": ["Playwright", "Python"], "status": "private"},
    {"name": "playwright-python-behavex", "desc": "UI test automation framework (Python, Playwright, BehaveX BDD) for a public demo store: Gherkin features, page objects, self-healing locators, API-timing and console diagnostics, parallel runs, HTML/JSON reports, and a QA dashboard for run history, flaky tests and locator health. Private repo: watch the demo.", "stack": ["Playwright", "Python", "BehaveX"], "status": "private", "demo": "assets/demo/qa_dashboard_demo.webm"},
    {"name": "selenium-java-testng", "desc": "UI test automation framework (Selenium 4, Java, TestNG, Cucumber BDD) for a public demo store: Gherkin features, page objects, parallel scenarios, WebDriver BiDi console and network capture, and a QA dashboard for run history, flaky tests and locator health. Private repo: watch the demo.", "stack": ["Selenium", "Java", "TestNG", "Cucumber"], "status": "private", "demo": "assets/demo/selenium_java_testng_demo.webm"},
    {"name": "appium-java-testng", "desc": "Mobile test automation framework (Appium, Java, TestNG, Cucumber BDD) with Gherkin features, page objects, parallel runs, HTML/JSON reports, and a Python QA dashboard for run history, flaky tests and locator health. Private repo: watch the demo.", "stack": ["Appium", "Java", "TestNG", "Cucumber", "Python"], "status": "private", "demo": "assets/demo/appium_java_testng_demo.webm"},
    {"name": "playwright-csharp-mstest", "desc": "Playwright for .NET with MSTest.", "stack": ["Playwright", "C#", "MSTest"], "status": "private"},
    {"name": "cypress-javascript", "desc": "Cypress end-to-end test automation in JavaScript.", "stack": ["Cypress", "JavaScript"], "status": "private"},
    {"name": "selenium-python", "desc": "Selenium WebDriver test automation in Python.", "stack": ["Selenium", "Python"], "status": "private"},
    {"name": "webdriverio-appium-cucumber-javascript", "desc": "Mobile automation with WebDriverIO, Appium and Cucumber in JavaScript.", "stack": ["WebDriverIO", "Appium", "Cucumber", "JavaScript"], "status": "private"},
    {"name": "webdriver-appium-cucumber-typescript", "desc": "Mobile automation with WebDriverIO, Appium and Cucumber in TypeScript.", "stack": ["WebDriverIO", "Appium", "Cucumber", "TypeScript"], "status": "private"}
  ],

  /* Short Problem -> Approach -> Outcome stories (facts from the engagements above).
     Add  metric: { value: "3d -> 40m", label: "regression time" }  when you have a real number. */
  caseStudies: [
    { client: "Humana", title: "Clearing a Q4 release bottleneck with Playwright", stack: ["Playwright", "Agile QE"],
      problem: "A high-pressure Q4 window on the Medicare enrollment platform: high-severity defects were blocking testing and automation coverage was thin.",
      approach: ["Streamlined QE workflow and defect triage to unblock builds", "Architected a Playwright strategy and automated the majority of user stories fast"],
      outcome: "Stable builds and reliable regression coverage ahead of the production release.", metric: null },
    { client: "Mondelez", title: "Performance-testing an AI content platform's front end", stack: ["Gatling", "Java"],
      problem: "A TypeScript UI over a multi-layer AI backend needed proof it stayed responsive under real load.",
      approach: ["Designed a Gatling (Java) framework focused on front-end performance", "Ran load, stress and spike tests and analyzed bottlenecks, memory issues and latency"],
      outcome: "Actionable findings for dev and infrastructure teams on responsiveness, scalability and stability.", metric: null },
    { client: "Corient Partners", title: "Reconciling acquired wealth-office data into Addepar", stack: ["Addepar", "Salesforce", "Data Reconciliation"],
      problem: "Legacy portfolio systems from newly acquired offices had inconsistent accounts, fee schedules and billing groups.",
      approach: ["Analyzed legacy structures with each office's POCs", "Mapped to standard formats, loaded into Salesforce and Addepar, then reconciled accounts, fees and billing groups"],
      outcome: "Verified post-migration billing reports and a clean client onboarding.", metric: null },
    { client: "TELUS", title: "Mobile automation that sped up sprint releases", stack: ["Appium", "TestNG", "BrowserStack", "Jenkins"],
      problem: "Manual regression on native Android and iOS apps was slowing sprint and release timelines.",
      approach: ["Built a POM framework with Appium, Java, Maven and TestNG", "Ran suites on BrowserStack via Jenkins and published custom HTML reports"],
      outcome: "Rapid regression and smoke runs every sprint, with results shared automatically with the team.", metric: null },
    { client: "TELUS", title: "Test automation as a pipeline: Harness, Kubernetes and a results dashboard", stack: ["Harness", "Kubernetes", "GitHub Actions"],
      problem: "Automation suites needed to run automatically with the dev pipeline, on a consistent environment, with results the team could actually see.",
      approach: ["Set up GitHub Actions workflows and a Harness pipeline for test automation execution, integrated with the dev pipeline", "Worked with the Infra team to configure the Kubernetes image with all required libraries and storage", "Built a dashboard to view results from the storage"],
      outcome: "Automated, repeatable test runs wired into delivery, with results visible in one place.", metric: null },
    { client: "TELUS", title: "API and performance coverage for backend services", stack: ["Microservices API", "Locust", "Python"],
      problem: "The web application sat on multiple integrated backend systems, where UI tests alone found issues late.",
      approach: ["Automated backend microservice API tests", "Load-tested the web application APIs with Locust (Python)"],
      outcome: "Integration and performance issues surfaced earlier in the SDLC.", metric: null }
  ],

  education: [
    { school: "Veer Narmad South Gujarat University (VNSGU)", degree: "Bachelor of Computer Application (B.C.A), Computer Science", year: "2013" }
  ],

  certifications: [
    { name: "Certified SAFe 5 Practitioner", url: "https://www.credly.com/badges/92b43b82-7516-45a8-bd07-17654ee1131c/print" },
    { name: "Professional Scrum Master I (PSM I)", url: "https://www.credly.com/badges/00df0dcd-4f14-4b1f-91b4-504ab41f09c5" }
  ],

  spokenLanguages: ["English", "Hindi", "Gujarati"]
};
