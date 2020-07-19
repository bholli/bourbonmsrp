import Head from 'next/head'
import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'
import Styles from '../../components/Styles'

const Page = ({channels}) => (
  <>

    <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Bourbon Channels on YouTube - BourbonMSRP.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <meta name="title" content="Spaces - Blank page"/>
        <meta name="author" content="Themesberg"/>
        <meta name="description" content="Premium Directory Listing Bootstrap 4 Template featuring 37 hand-crafted pages, a dashboard an Mapbox integration. Spaces also comes with a complete UI Kit featuring over 700 components by Themesberg."/>
        <meta name="keywords" content="bootstrap, bootstrap 4 template, directory listing bootstrap, bootstrap 4 listing, bootstrap listing, bootstrap 4 directory listing template, vector map, leaflet js template, mapbox theme, mapbox template, dashboard, themesberg, user dashboard bootstrap, dashboard bootstrap, ui kit, bootstrap ui kit, premium bootstrap theme" />
        <link rel="canonical" href="https://themesberg.s3.us-east-2.amazonaws.com/public/products/spaces/thumbnail.jpg"/>

        
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://demo.themesberg.com/pixel-pro"/>
        <meta property="og:title" content="Spaces - Blank page"/>
        <meta property="og:description" content="Premium Directory Listing Bootstrap 4 Template featuring 37 hand-crafted pages, a dashboard an Mapbox integration. Spaces also comes with a complete UI Kit featuring over 700 components by Themesberg."/>
        <meta property="og:image" content="https://themesberg.s3.us-east-2.amazonaws.com/public/products/spaces/thumbnail.jpg"/>

        
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://demo.themesberg.com/pixel-pro"/>
        <meta property="twitter:title" content="Spaces - Blank page"/>
        <meta property="twitter:description" content="Premium Directory Listing Bootstrap 4 Template featuring 37 hand-crafted pages, a dashboard an Mapbox integration. Spaces also comes with a complete UI Kit featuring over 700 components by Themesberg."/>
        <meta property="twitter:image" content="https://themesberg.s3.us-east-2.amazonaws.com/public/products/spaces/thumbnail.jpg"/>

        <Styles />
        
    </Head>

    <Layout>
      <div>
        <h1>Bourbon Channels on Youtube</h1>
        {channels.map(channel => (

          <div>
            <Link href='/youtube-channels/[id]' as={`/youtube-channels/${channel.id}`}>
              <a>{channel.name} -- {channel.url}</a>
            </Link>
          </div>
        ))}
      </div> 
    </Layout>

  </>
)

Page.getInitialProps = async function(){
    const response = await fetch('https://api.bourbonspotter.com/youtube-channels');
    const channels = await response.json();
    return { channels }
}

export default Page