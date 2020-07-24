import Head from 'next/head'
import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'

const Page = ({ channel }) => {
    return(   
        <>

            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>{channel.name} - Bourbon Channels on YouTube - BourbonMSRP.com</title>
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
                
                <link rel="apple-touch-icon" sizes="120x120" href="/assets/img/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/assets/img/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/assets/img/favicon/safari-pinned-tab.svg" color="#ffffff"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="theme-color" content="#ffffff"/>
                <link type="text/css" href="/vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet"/>
                <link type="text/css" href="/vendor/leaflet/dist/leaflet.css" rel="stylesheet"/>
                <link rel="stylesheet" href="/vendor/@fancyapps/fancybox/dist/jquery.fancybox.min.css"/>
                <link rel="stylesheet" href="/vendor/jqvmap/dist/jqvmap.min.css"/>
                <link type="text/css" href="/css/spaces.css" rel="stylesheet"/>
                <link type="text/css" href="/css/styles.css" rel="stylesheet"/>
            </Head>

            <Layout>
                <div>
                    <h1>{channel.name}</h1>
                    <span>{channel.url}</span>
                </div>
            </Layout>

        </>
    )
}

Page.getInitialProps = async({ query }) => {
    
    const { id } = query;
    const response = await fetch(`https://api.bourbonspotter.com/youtube-channels/${id}`);
    const channel = await response.json();
    return { channel }
}

export default Page;