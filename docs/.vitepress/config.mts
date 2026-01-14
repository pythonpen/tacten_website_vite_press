import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
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
