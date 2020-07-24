import Head from 'next/head'
import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'

import Disqus from "disqus-react"
import ReactPlayer from 'react-player'

const Bourbon = ({ bourbon }) => {
    return(   
        <>

        <Head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>What is the MSRP of {bourbon[0].name}? - Bourbons - BourbonMSRP.com</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <meta name="title" content={"What is the MSRP of " + bourbon[0].name + "?"}/>
            <meta name="author" content="BHOLLI"/>
            <meta name="description" content={"What is the MSRP of " + bourbon[0].name + "? According to a number of sources, the price of " + bourbon[0].name + " is around $" + bourbon[0].msrp}/>
            <meta name="keywords" content={bourbon[0].name + ", " + bourbon[0].name + " msrp, " + bourbon[0].name + " retail price, bourbon msrp, what does bourbon cost, buy bourbon online, where to buy bourbon, get bourbon shipped, bourbon, bourbon msrp, bourbon price, bourbon retail price, allocated bourbon, where to buy bourbon, bourbon abbreviations, bourbon facebook groups, bourbon instagram profiles, bourbon videos"} />
            <link rel="canonical" href={"https://api.bourbonspotter.com" + bourbon[0].image.url}/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={"https://www.bourbonmsrp.com/bourbons/" + bourbon[0].slug}/>
            <meta property="og:title" content={"What is the MSRP of " + bourbon[0].name + "?"}/>
            <meta property="og:description" content={"What is the MSRP of " + bourbon[0].name + "? According to a number of sources, the price of" + bourbon[0].name + " is around $" + bourbon[0].msrp}/>
            <meta property="og:image" content={"https://api.bourbonspotter.com" + bourbon[0].image.url}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={"https://www.bourbonmsrp.com/bourbons/" + bourbon[0].slug}/>
            <meta property="twitter:title" content={"What is the MSRP of " + bourbon[0].name + "?"}/>
            <meta property="twitter:description" content={"What is the MSRP of " + bourbon[0].name + "? According to a number of sources, the price of" + bourbon[0].name + " is around $" + bourbon[0].msrp}/>
            <meta property="twitter:image" content={"https://api.bourbonspotter.com" + bourbon[0].image.url}/>

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
            <div className="container mt4rem">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-6 card-bourbon-view" key={bourbon[0].id}>

                        <div className="card text-center">
                            <div className=" mx-auto mt-n6">
                                <img src={`https://api.bourbonspotter.com${bourbon[0].image.url}`} alt='Image of {bourbon.name}' className="card-img-top border-0 img-bourbon" />
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">{bourbon[0].name}</h1>
                                <span className="card-subtitle animate-up-5 msrp">MSRP ${bourbon[0].msrp}</span>
                                <div className="share">
                                    <a href={"https://www.facebook.com/sharer/sharer.php?u=https://www.bourbonmsrp.com/bourbons/" + bourbon[0].slug} target="_blank" className="btn facebook btn-sm"><i className="fab fa-facebook-square"></i> Share on Facebook</a>
                                    <a href={"http://twitter.com/share?url=https://www.bourbonmsrp.com/bourbons/" + bourbon[0].slug } target="_blank" className="btn twitter btn-sm"><i className="fab fa-twitter"></i> Tweet on Twitter</a>
                                    <a href={"http://pinterest.com/pin/create/button/?url=https://www.bourbonmsrp.com/bourbons/" + bourbon[0].slug + "&media=https://api.bourbonspotter.com" + bourbon[0].image.url} target="_blank"  className="btn pinterest btn-sm pin-it-button" count-layout="horizontal"><i className="fab fa-pinterest"></i> Pin on Pinterest</a>
                                </div>
                                <div className="bourbon-notes">
                                    <h2>Tasting Notes: </h2> {bourbon[0].notes}
                                </div>

                                <div className="bourbon-videos">
                                    {bourbon[0].video_embeds.map(embed => (

                                        <div className="video" key={embed.id}>
                                            <h3>{embed.name}</h3>
                                            <ReactPlayer url={embed.url} />
                                        </div>

                                    ))}
                                </div>
                                
                            </div>
                        </div>

                    </div>

                </div>

                <div className="row justify-content-center">

                    <div className="col-md-8 comments">
                        <Disqus.DiscussionEmbed shortname='bourbonmsrp' config={
                                {
                                    url: 'https://www.bourbonmsrp.com/bourbons/' + bourbon[0].slug,
                                    identifier: bourbon[0].id,
                                    title: bourbon[0].name
                                }
                            }
                        />

                    </div>
                </div>

            </div>
        </Layout>

</>
    )
}

Bourbon.getInitialProps = async({ query }) => {
    
    const { slug } = query;
    const response = await fetch(`https://api.bourbonspotter.com/bourbons?slug=${slug}`);
    const bourbon = await response.json();
    return { bourbon }
}

export default Bourbon;