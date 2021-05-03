import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <link href="/styles/main/styles.css" rel="stylesheet" />
    </Head>
    <div>
      {props.children}
    </div>
  </div>
)

export default Layout