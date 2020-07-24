import Head from 'next/head'
import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'

import Disqus from "disqus-react"

const Page = ({ abbreviation }) => {
    return(   
    
        <>

            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>What does {abbreviation.name} mean? - Abbreviations - BourbonMSRP.com</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <meta name="title" content={"What does " + abbreviation.name + " mean? - Abbreviations - BourbonMSRP.com"}/>
                <meta name="author" content="BHOLLI"/>
                <meta name="description" content={"There is a large number of bourbon abbreviations that are commonly used. What does " + abbreviation.name + " mean? It means " + abbreviation.description}/>
                <meta name="keywords" content={abbreviation.name + ", what does " + abbreviation.name + " mean, bourbon abbreviations, bourbon, bourbon msrp, bourbon price, bourbon retail price, allocated bourbon, where to buy bourbon, bourbon abbreviations, bourbon facebook groups, bourbon instagram profiles, bourbon videos"} />
                <link rel="canonical" href="https://www.bourbonmsrp.com/assets/img/bourbonmsrp.jpg"/>

                
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={"https://www.bourbonmsrp.com/abbreviations/" + abbreviation.id}/>
                <meta property="og:title" content={"What does " + abbreviation.name + " mean? - Abbreviations - BourbonMSRP.com"}/>
                <meta property="og:description" content={"There is a large number of bourbon abbreviations that are commonly used. What does " + abbreviation.name + " mean? It means " + abbreviation.description}/>
                <meta property="og:image" content="https://www.bourbonmsrp.com/assets/img/bourbonmsrp.jpg"/>

                
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={"https://www.bourbonmsrp.com/abbreviations/" + abbreviation.id}/>
                <meta property="twitter:title" content={"What does " + abbreviation.name + " mean? - Abbreviations - BourbonMSRP.com"}/>
                <meta property="twitter:description" content={"There is a large number of bourbon abbreviations that are commonly used. What does " + abbreviation.name + " mean? It means " + abbreviation.description}/>
                <meta property="twitter:image" content="https://www.bourbonmsrp.com/assets/img/bourbonmsrp.jpg"/>

                <link rel="apple-touch-icon" sizes="120x120" href="/assets/img/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/assets/img/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/assets/img/favicon/safari-pinned-tab.svg" color="#000"/>
                <meta name="msapplication-TileColor" content="#000"/>
                <meta name="theme-color" content="#000"/>
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
                        <div className="col-md-6 card-abbreviation-view">

                            <div className="card text-center">
                                <h1 className="card-title">{abbreviation.name}</h1>
                                <h2 className="h4 description">{abbreviation.description}</h2>
                                <div className="share">
                                    <a href={"https://www.facebook.com/sharer/sharer.php?u=https://www.bourbonmsrp.com/abbreviations/" + abbreviation.id } target="_blank" className="btn facebook btn-sm"><i className="fab fa-facebook-square"></i> Share on Facebook</a>
                                    <a href={"http://twitter.com/share?url=https://www.bourbonmsrp.com/abbreviations/" + abbreviation.id } target="_blank" className="btn twitter btn-sm"><i className="fab fa-twitter"></i> Tweet on Twitter</a>
                                </div>
                                <div className="card-body">
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-md-8 comments">
                            <Disqus.DiscussionEmbed shortname='bourbonmsrp' config={
                                    {
                                        url: 'https://bourbonmsrp.com/abbreviations/' + abbreviation.id,
                                        identifier: abbreviation.id,
                                        title: abbreviation.name
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
    const response = await fetch(`https://api.bourbonspotter.com/abbreviations/${id}`);
    const abbreviation = await response.json();
    return { abbreviation }
}

export default Page;