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
      { text: 'Guide', link: '/guide/' },
      { text: 'Elements', link: '/elements/' },
      { text: 'Demo App', link: 'https://hora.studioalex.one/demo/' },
      { text: 'Changelog', link: 'https://github.com/studioalex/hora/blob/main/README.md' },
      { text: 'GitHub', link: 'https://github.com/studioalex/hora' }
    ],
    sidebar: {
      '/guide/': [{
        text: 'Guide',
        items: [
          { text: 'Items and Fields', link: '/guide/data_fields' },
          { text: 'Static header and fields', link: '/guide/static' },
          { text: 'Custom Data Rendering', link: '/guide/custom_data_rendering' },
          { text: 'Sorting', link: '/guide/sorting' },
          { text: 'Field Settings', link: '/guide/settings' },
          { text: 'Selection support', link: '/guide/selection_support' },
          { text: 'Details support', link: '/guide/details_support' },
          { text: 'Loading State', link: '/guide/loading_state' },
          { text: 'No Data State', link: '/guide/no_data_state' },
          { text: 'Grid Headline', link: '/guide/headline' },
          { text: 'Grid styling', link: '/guide/grid_styling' },
          { text: 'Component reference', link: '/guide/definition_reference' },
        ]
      }],
      '/elements/': [{
        text: 'Elements',
        items: [
          { text: 'Button', link: '/elements/button/button' }
        ]
      }]
    },
    footer: {
      message: 'Released under the GPLV3+ License.',
      copyright: 'Copyright © 2022-present Alexander Sedeke'
    }
  }
})
