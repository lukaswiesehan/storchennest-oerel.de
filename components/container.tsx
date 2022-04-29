import Head from 'next/head'
import {useRouter} from 'next/router'

export const Container = ({children, ...customMeta}) => {
  const router = useRouter()

  const meta = {
    title: 'Storchennest Oerel',
    description:
      'Das bisher einzige Storchennest in Oerel wurde im Herbst 2019 im Mühlenbruchsweg durch die Anwohner der Straße errichtet. Bereits im darauffolgenden Frühjahr zog das Storchenpaar ein, das nun jährlich in dieses Nest zurückkehrt.',
    url: 'https://storchennest-oerel.de',
    name: 'Storchennest Oerel',
    image: 'https://storchennest-oerel.de/images/banner.jpg',
    type: 'website',
    ...customMeta
  }
  const jsonLd = {
    '@context': 'http://www.schema.org',
    '@type': 'WebSite',
    name: meta.name,
    url: meta.url
  }

  return (
    <div className="relative overflow-x-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${meta.url}${router.asPath}`} />
        <link rel="canonical" href={`${meta.url}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      </Head>
      {children}
    </div>
  )
}
