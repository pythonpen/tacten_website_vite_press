import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BioGraph - Open Source HIMS/EHR Platform",
  description: "100% Open-Source Full-Spectrum Hospital Information Management System and Electronic Health Record Platform built on Frappe Framework and ERPNext ecosystem. Zero vendor lock-in, dramatically lower TCO.",
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'keywords', content: 'HIMS, EHR, EMR, Hospital Information System, Electronic Health Record, Open Source Healthcare, Frappe, ERPNext, FHIR, HL7, DICOM, Healthcare IT' }],
    ['meta', { name: 'author', content: 'Tacten Services LLP' }],
    ['meta', { property: 'og:title', content: 'BioGraph - Open Source HIMS/EHR Platform' }],
    ['meta', { property: 'og:description', content: '100% Open-Source Full-Spectrum Hospital Information Management System built on Frappe Framework and ERPNext ecosystem.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'BioGraph - Open Source HIMS/EHR Platform' }],
    ['meta', { name: 'twitter:description', content: '100% Open-Source Full-Spectrum Hospital Information Management System built on Frappe Framework and ERPNext ecosystem.' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    siteTitle: false,
    nav: [
      {
        text: 'Products',
        items: [
          { text: 'Biograph', link: '/products/biograph' },
          { text: 'Hydra', link: '/products/hydra' }
        ]
      },
      { text: 'Solutions', link: '/solutions' },
      { text: 'Expertise', link: '/expertise' },
      { text: 'Services', link: '/services' },
      {
        text: 'Resources',
        items: [
          { text: 'Docs', link: '/docs/' },
          { text: 'Blog', link: '/blog/' }
        ]
      },
      { text: '|', link: ' ' },
      { text: 'About', link: '/about' },
      { text: 'Contact Us', link: '/contact' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Documentation',
          items: [
            { text: 'Getting Started', link: '/docs/getting-started' },
            { text: 'Architecture & Technology', link: '/docs/architecture' },
            { text: 'Community & Support', link: '/docs/community-support' },
            { text: 'Developer Ecosystem', link: '/docs/developer-ecosystem' },
            { text: 'Pricing & Licensing', link: '/docs/pricing' },
            { text: 'ROI Calculator', link: '/docs/roi-calculator' },
            { text: 'Migration & Implementation', link: '/docs/migration' }
          ]
        }
      ],
      '/products/biograph/': [
        {
          text: 'Biograph',
          items: [
            { text: 'Overview', link: '/products/biograph' },
            { text: 'Clinical Excellence', link: '/products/biograph/clinical-excellence' },
            { text: 'Business Operations', link: '/products/biograph/business-operations' },
            { text: 'Platform & Technology', link: '/products/biograph/platform-technology' }
          ]
        },
        {
          text: 'Products',
          items: [
            { text: 'Back to Products', link: '/docs/' },
            { text: 'Hydra', link: '/products/hydra' }
          ]
        }
      ],
      '/': [
        {
          text: 'Products',
          collapsed: false,
          items: [
            { text: 'Biograph', link: '/products/biograph' },
            { text: 'Hydra', link: '/products/hydra' }
          ]
        },
        { text: 'Solutions', link: '/solutions' },
        { text: 'Expertise', link: '/expertise' },
        { text: 'Services', link: '/services' },
        {
          text: 'Resources',
          items: [
            { text: 'Docs', link: '/docs/' },
            { text: 'Blog', link: '/blog/' }
          ]
        },
        { text: 'About', link: '/about' },
        { text: 'Contact Us', link: '/contact' }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
