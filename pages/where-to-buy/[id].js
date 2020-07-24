import Head from 'next/head'
import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'

import Disqus from "disqus-react"

const Page = ({ website }) => {
    return(   
        <>

            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>Buy Bourbon Online at {website.name} - Where to Buy Bourbon Online - Bourbon MSRP</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <meta name="title" content={"Buy Bourbon Online at " + website.name + " - Where to Buy Bourbon Online - Bourbon MSRP"} />
                <meta name="author" content="BHOLLI"/>
                <meta name="description" content={"Looking for a place to buy bourbon online? Buy Bourbon Online at " + website.name}/>
                <meta name="keywords" content={website.name + ", " + website.url.replace('https://','').replace('/','') + ", bourbon, bourbon msrp, bourbon price, bourbon retail price, allocated bourbon, where to buy bourbon, bourbon abbreviations, bourbon facebook groups, bourbon instagram profiles, bourbon videos"} />
                <link rel="canonical" href={"http://api.bourbonspotter.com" + website.image[0].url}/>

                
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={"https://www.bourbonmsrp.com/where-to-buy/" + website.id}/>
                <meta property="og:title" content={"Buy Bourbon Online at " + website.name + " - Where to Buy Bourbon Online - Bourbon MSRP"}/>
                <meta property="og:description" content={"Looking for a place to buy bourbon online? Buy Bourbon Online at " + website.name}/>
                <meta property="og:image" content={"http://api.bourbonspotter.com" + website.image[0].url}/>

                
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={"https://www.bourbonmsrp.com/where-to-buy/" + website.id}/>
                <meta property="twitter:title" content={"Buy Bourbon Online at " + website.name + " - Where to Buy Bourbon Online - Bourbon MSRP"}/>
                <meta property="twitter:description" content={"Looking for a place to buy bourbon online? Buy Bourbon Online at " + website.name}/>
                <meta property="twitter:image" content={"http://api.bourbonspotter.com" + website.image[0].url}/>


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
                        <div className="col-md-6 mt-6 card-website-view">

                            <div className="card text-center">
                                <div className=" mx-auto mt-n6">
                                    <img src={`https://api.bourbonspotter.com${website.image[0].url}`} alt='Image of website.image' className="card-img-top border-0 img-website" />
                                </div>
                                <h1 className="card-title">{website.name}</h1>
                                <div className="website">{website.url.replace('https://', '').replace('/','')}</div>
                                <div className="share">
                                    <a href={"https://www.facebook.com/sharer/sharer.php?u=https://www.bourbonmsrp.com/where-to-buy/" + website.id } target="_blank" className="btn facebook btn-sm"><i className="fab fa-facebook-square"></i> Share</a>
                                    <a href={"http://twitter.com/share?url=https://www.bourbonmsrp.com/where-to-buy/" + website.id } target="_blank" className="btn twitter btn-sm"><i className="fab fa-twitter"></i> Tweet</a>
                                </div>
                                <div className="card-body">
                                    <a href={`${website.url}?ref=bourbonmsrp.com`} target="_blank" className="btn btn-lg btn-black">Shop Now</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-md-8 comments">
                            <Disqus.DiscussionEmbed shortname='bourbonmsrp' config={
                                    {
                                        url: 'https://www.bourbonmsrp.com/where-to-buy/' + website.id,
                                        identifier: website.id,
                                        title: website.name
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

Page.getInitialProps = async({ query }) => {
    
    const { id } = query;
    const response = await fetch(`https://api.bourbonspotter.com/online-stores/${id}`);
    const website = await response.json();
    return { website }
}

export default Page;