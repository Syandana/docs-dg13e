import 'nextra-theme-docs/style.css'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

// export default function Nextra({ Component, pageProps }) {
//   return <Component {...pageProps}>
//     <Layout></Layout>
//   </Component>
// }

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default App
