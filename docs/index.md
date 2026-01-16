---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
sidebar: false
---

<HeroSection />

<SecurityTrustBar :items="[
  { icon: 'shield', title: '100% Open Source', description: 'GPL-3.0 License' },
  { icon: 'dollar', title: 'No Per-User Fees', description: 'Zero licensing costs' },
  { icon: 'scale', title: 'Enterprise Scale', description: 'Proven across 10,000+ orgs' },
  { icon: 'lock', title: 'Zero Vendor Lock-In', description: 'Host anywhere' }
]" variant="gradient" />

<ZigZagSection :features="[
  {
    title: 'Deep Healthcare IT Expertise. Delivered Fast.',
    details: 'We specialize in healthcare technology—and we ship quickly.',
    listItems: [
      'Proven experience building <b>Compliant & Interoperable EHR Systems</b>, migration, and specialty workflows',
      '<b>End-to-end delivery</b> across backend, frontend, mobile, and data layers',
      '<b>Rapid delivery sprints</b> to launch v1 early and iterate continuously',
      'Built using modern tech platforms such as <b>Medplum, Metriport, Tuva, Frappe</b>'
    ],
    link: '/expertise',
    linkText: 'From concept to compliant production—without slow, risky implementation cycles.',
    secondaryLink: '/products/biograph',
    secondaryLinkText: 'Check out our Product: Biograph',
    image: '/health.svg'
  },
  {
    title: 'Enterprise-Ready by Design',
    details: 'Built to meet the demands of regulated, high-scale environments from day one.',
    listItems: [
      '<b>Security & compliance first:</b> SSO, RBAC, audit trails, and stateless deployments',
      '<b>HIPAA-compliant architectures</b> for healthcare and life sciences',
      '<b>Interoperable systems</b> that integrate seamlessly with EHRs, third-party tools, and data platforms',
      '<b>Scalable & production-grade</b>, supporting long-term growth and evolving enterprise needs'
    ],
    link: '/solutions',
    linkText: 'Trusted foundations for mission-critical software.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80'
  },
  {
    title: 'Open Source. No Lock-Ins. Full Ownership.',
    details: 'Build with confidence on a truly open foundation. You own your <b>software, data, and infrastructure</b>—no proprietary traps, no vendor lock-in.',
    listItems: [
      '<b>Full source code access</b> for complete control and customization',
      '<b>Standard-based implementations</b> ensuring longevity and compatibility',
      '<b>Community-driven innovation</b> leveraging the best of open source'
    ],
    link: '/services',
    linkText: 'Learn more about our Open Source approach',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80'
  }
]" />

<AboutSection />
