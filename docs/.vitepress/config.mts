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

    sidebar: [
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
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
