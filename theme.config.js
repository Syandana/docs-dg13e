export default {
  repository: 'https://github.com/Syandana/docs-dg13e',
  titleSuffix: ' – DG2E',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">DG2E</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Emang Beda
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="id" />
      <meta name="description" content="emang beda" />
      <meta name="og:description" content="emang beda" />
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      <meta name="twitter:image" content="https://external-preview.redd.it/EO6fS_WfR5dYFNu9dIj-sOGoDiegIZnpop5Nr_-oJBY.png?format=pjpg&auto=webp&s=e07823343804c69842e03f4509cb8c95c9670986" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="Portal Info DG-E" />
      <meta name="og:image" content="https://external-preview.redd.it/EO6fS_WfR5dYFNu9dIj-sOGoDiegIZnpop5Nr_-oJBY.png?format=pjpg&auto=webp&s=e07823343804c69842e03f4509cb8c95c9670986" />
      <meta name="apple-mobile-web-app-title" content="Info DG2E" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
      <link href="/styles/main/styles.css" rel="stylesheet" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  darkMode: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>{new Date().getFullYear()} © Syandsign Studio.</>
}
