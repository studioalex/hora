import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
  lang: 'en-US',
  title: 'Hora Grid',
  description: 'Component documentation.',
  appearance: true,
  base: '/api/',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/configs' },
      { text: 'Demo App', link: 'https://hora.studioalex.one/demo/' },
      { text: 'Changelog', link: 'https://github.com/studioalex/hora/blob/main/README.md' },
      { text: 'GitHub', link: 'https://github.com/studioalex/hora' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Items and Fields', link: '/guide/data_fields' },
          { text: 'Custom Data Rendering', link: '/guide/custom_data_rendering' },
          { text: 'Sorting', link: '/guide/sorting' },
          { text: 'Static header and columns', link: '/guide/static' },
          { text: 'Field definition reference', link: '/guide/definition_reference' },
        ]
      }
    ],
    footer: {
      message: 'Released under the GPLV3+ License.',
      copyright: 'Copyright © 2022-present Alexander Sedeke'
    }
  }
})