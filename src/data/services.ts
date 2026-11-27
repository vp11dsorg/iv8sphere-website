export type Service = { slug:string; title:string; group:string; tagline:string; intro:string; deliverables:string[]; parent:string };
export const SERVICES: Service[] = [
  {
    "slug": "web-design",
    "title": "Web Design",
    "group": "Website Services",
    "tagline": "Custom websites that sell while you sleep.",
    "intro": "Design a custom, mobile-first website for your business \u2014 no templates, no shortcuts.",
    "deliverables": [
      "Custom design, no templates",
      "UX research, wireframes and prototypes",
      "Responsive and accessible build",
      "Copywriting and on-page SEO"
    ],
    "parent": "/services/website-services"
  },
  {
    "slug": "ux-design",
    "title": "UX Design",
    "group": "Website Services",
    "tagline": "Websites people remember \u2014 and use.",
    "intro": "UX research and design that turns visitors into enquiries, sales and sign-ups.",
    "deliverables": [
      "User research and journey mapping",
      "Wireframes and interactive prototypes",
      "Usability testing before launch",
      "Conversion-focused layouts"
    ],
    "parent": "/services/website-services"
  },
  {
    "slug": "website-builder",
    "title": "Website Builder",
    "group": "Website Services",
    "tagline": "Your site, editable by you.",
    "intro": "Built on WordPress \u2014 38.6% of the web \u2014 Shopify, Wix or Squarespace. You pick, we build, you edit.",
    "deliverables": [
      "Setup on your own account",
      "Training video so you can edit with confidence",
      "Templates customised to your brand",
      "Launch, SEO and analytics included"
    ],
    "parent": "/services/website-services"
  },
  {
    "slug": "no-code-app-builder",
    "title": "No-Code App Builder",
    "group": "Website Services",
    "tagline": "An app for your business, without the code.",
    "intro": "A native iOS and Android app built with FlutterFlow or Adalo, published to the App Store and Google Play.",
    "deliverables": [
      "Native iOS + Android publishing",
      "Database, login and payments",
      "Push notifications",
      "Handover and training included"
    ],
    "parent": "/services/website-services"
  },
  {
    "slug": "ecommerce",
    "title": "eCommerce Setup",
    "group": "Website Services",
    "tagline": "A store that sells, day and night.",
    "intro": "An online store on Shopify or WooCommerce, set up with products, payments, shipping and tax.",
    "deliverables": [
      "Store setup on Shopify or WooCommerce",
      "Products, payments and shipping configured",
      "Discounts, emails and abandoned-cart flows",
      "Training so you can run it yourself"
    ],
    "parent": "/services/website-services"
  },
  {
    "slug": "managed-wordpress",
    "title": "Managed WordPress Hosting",
    "group": "Managed Hosting",
    "tagline": "WordPress, managed for you.",
    "intro": "Your WordPress site hosted, secured, backed up and updated \u2014 you never touch a server.",
    "deliverables": [
      "Free migration",
      "Daily backups with self-restore",
      "SSL, security and updates",
      "Support that answers"
    ],
    "parent": "/services/managed-hosting"
  },
  {
    "slug": "vps-hosting",
    "title": "Managed VPS Hosting",
    "group": "Managed Hosting",
    "tagline": "Your own server, without the sysadmin.",
    "intro": "A managed virtual private server sized to your traffic, patched and monitored for you.",
    "deliverables": [
      "Managed setup, patching and monitoring",
      "Daily backups",
      "Scaling when traffic grows",
      "Migration included"
    ],
    "parent": "/services/managed-hosting"
  },
  {
    "slug": "dedicated-hosting",
    "title": "Dedicated Server Hosting",
    "group": "Managed Hosting",
    "tagline": "A whole server, just for you.",
    "intro": "A dedicated server for busy sites and stores, managed end to end.",
    "deliverables": [
      "Dedicated resources, no neighbours",
      "Managed setup and monitoring",
      "Daily backups and security",
      "Custom quote for your workload"
    ],
    "parent": "/services/managed-hosting"
  },
  {
    "slug": "cloud-infrastructure",
    "title": "Cloud & Infrastructure",
    "group": "Professional Services",
    "tagline": "Cloud that scales without drama.",
    "intro": "Cloud infrastructure designed, deployed and run for you \u2014 landing zones, networking and monitoring included.",
    "deliverables": [
      "Landing-zone design and deployment",
      "Networking, identity and security guardrails",
      "Monitoring, alerts and cost control",
      "Documentation and handover"
    ],
    "parent": "/services/professional-services"
  },
  {
    "slug": "kubernetes",
    "title": "Managed Kubernetes",
    "group": "Professional Services",
    "tagline": "Kubernetes, run for you.",
    "intro": "Managed Kubernetes clusters \u2014 deployed, upgraded and monitored, so your team ships instead of babysitting clusters.",
    "deliverables": [
      "Managed cluster setup and upgrades",
      "Deployments, scaling and monitoring",
      "Security and backup policies",
      "Runbooks and team training"
    ],
    "parent": "/services/professional-services"
  },
  {
    "slug": "openshift",
    "title": "Managed OpenShift",
    "group": "Professional Services",
    "tagline": "OpenShift, managed end to end.",
    "intro": "Red Hat OpenShift on your cloud, managed by people who run it every day \u2014 with the guardrails compliance needs.",
    "deliverables": [
      "OpenShift cluster deployment",
      "Operators, pipelines and GitOps",
      "Security, RBAC and policy guardrails",
      "Monitoring and incident support"
    ],
    "parent": "/services/professional-services"
  },
  {
    "slug": "managed-containers",
    "title": "Managed Container Hosting",
    "group": "Professional Services",
    "tagline": "Containers, hosted and managed.",
    "intro": "All your container workloads in one managed platform \u2014 builds, deploys, scaling and rollbacks handled.",
    "deliverables": [
      "Container platform setup",
      "CI/CD and automated deploys",
      "Autoscaling and health checks",
      "Logs, metrics and alerts"
    ],
    "parent": "/services/professional-services"
  },
  {
    "slug": "compliance-readiness",
    "title": "Compliance Readiness",
    "group": "Professional Services",
    "tagline": "Compliant by design \u2014 not certified by us.",
    "intro": "We help your cloud meet HIPAA, PCI DSS and SOC 2 requirements: gap review, landing zone and audit evidence. We help you get compliant \u2014 we do not certify you.",
    "deliverables": [
      "Compliance gap review",
      "Landing zone with guardrails",
      "Audit evidence pack",
      "Roadmap to your audit"
    ],
    "parent": "/services/professional-services"
  },
  {
    "slug": "ai-consulting",
    "title": "AI Consulting",
    "group": "Professional Services",
    "tagline": "AI that saves time, not headlines.",
    "intro": "Practical AI: chat, content and automation that fits your business and your data.",
    "deliverables": [
      "AI use-case review",
      "Chat, content and automation builds",
      "Data and privacy review",
      "Team training and rollout"
    ],
    "parent": "/services/professional-services"
  },
  {
    "slug": "consultancy",
    "title": "Technology Consultancy",
    "group": "Professional Services",
    "tagline": "A clear plan before you spend.",
    "intro": "Independent advice on stack, vendors and roadmap \u2014 so you buy once, and buy right.",
    "deliverables": [
      "Architecture and vendor review",
      "Roadmap and budget plan",
      "Build-vs-buy advice",
      "Second opinion on proposals"
    ],
    "parent": "/services/professional-services"
  },
  {
    "slug": "staffing",
    "title": "Design & Developer Staffing",
    "group": "Professional Services",
    "tagline": "Extra hands, when you need them.",
    "intro": "Project-based designers and developers from our team, embedded in yours for as long as you need them.",
    "deliverables": [
      "Dedicated designer or developer",
      "Weekly sprints, clear deliverables",
      "No long contract",
      "Your tools, your process"
    ],
    "parent": "/services/professional-services"
  },
  {
    "slug": "talent-marketplace",
    "title": "Talent Marketplace",
    "group": "Professional Services",
    "tagline": "Vetted talent, on demand.",
    "intro": "Designers, developers and strategists from our vetted marketplace, matched to your project in days.",
    "deliverables": [
      "Vetted profiles, matched in days",
      "Project-based, no hiring overhead",
      "Quality review on every delivery",
      "Scale up or down per sprint"
    ],
    "parent": "/services/professional-services"
  }
];
