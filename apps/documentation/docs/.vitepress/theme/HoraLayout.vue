<script setup>
  import { onMounted } from 'vue'
  import DefaultTheme from 'vitepress/theme'
  
  const { Layout } = DefaultTheme

  onMounted(() => {
    if (!document.getElementById('GoogleAnalytics')) {
      window.ga = function () {
        ga.q.push(arguments)
      }
      ga.q = []
      ga.l = +new Date
      ga('create', 'G-2M0DTC110D', 'auto')
      ga('set', 'anonymizeIp', true)
      ga('set', 'transport', 'beacon')
      ga('send', 'pageview')

      let src = 'https://www.google-analytics.com/analytics.js'
      let script = document.createElement('script')
      script.setAttribute('src', src)
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('id', 'GoogleAnalytics')
      document.head.appendChild(script)
    }
  })
  </script>
  
  <template>
    <Layout>
    </Layout>
  </template>
