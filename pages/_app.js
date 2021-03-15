import 'nextra-theme-docs/style.css'
import Layout from '../components/Layout'

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps}>
    <Layout></Layout>
  </Component>
}
