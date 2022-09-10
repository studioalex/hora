import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
  lang: 'en-US',
  title: 'Hora Grid',
  description: 'Vue 3 Data Grid Component Documentation.',
  appearance: true,
  base: '/',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/data_fields' },
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
          { text: 'Headline', link: '/guide/headline' },
          { text: 'Loading State', link: '/guide/loading_state' },
          { text: 'No Data State', link: '/guide/no_data_state' },
          { text: 'Styling options', link: '/guide/styling' },
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
    },

    algolia: {
      appId: 'NBVX6OR8H4',
      apiKey: 'ffd35574f8f7cbf4dc554e9fa3ba7a66',
      indexName: 'hora',
      // searchParameters: {
      //   facetFilters: ['tags:en'],
      // },
    }
  }
})
