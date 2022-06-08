/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */

export default {
  lang: 'en-US',
  title: 'VitePress',
  description: 'Just playing around.',
  themeConfig: {
    nav: [
      {
        text: 'GitLab',
        link: 'https://github.com/alexandervu/one-ui'
      }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Introduction', link: '/' }
        ]
      },
      {
        text: 'Styling',
        items: getVariables()
      },
      {
        text: 'Components',
        items: getComponents()
      }
    ]
  }
}

function getComponents() {
  return [
    { text: 'Button', link: '/guide/button/button' },
    { text: 'Pageloader', link: '/guide/pageloader/pageloader' },
    { text: 'SearchField', link: '/guide/searchfield/searchfield' }
  ]
}

function getVariables() {
  return [
    { text: 'Colors', link: '/styling/colors/colors' },
    { text: 'Fonts', link: '/styling/fonts/fonts' },
    { text: 'Icons', link: '/styling/icons/icons' },
    { text: 'Variables', link: '/styling/variables' }
  ]
}