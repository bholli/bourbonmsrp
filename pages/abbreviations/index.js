import Head from 'next/head'
import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'


function filter() {
    var input, filter, filter_items, items, content, i, txtValue;
    input = document.getElementById("filter");
    filter = input.value.toUpperCase();
    filter_items = document.getElementById("filter_items");
    items = filter_items.getElementsByClassName("_item");
    for (i = 0; i < items.length; i++) {
        content = items[i].getElementsByTagName("div")[0];
        txtValue = content.textContent || content.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

const Page = ({abbreviations}) => (
    <>

        <Head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Abbreviations - BourbonMSRP.com</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <meta name="title" content="Abbreviations - BourbonMSRP.com"/>
            <meta name="author" content="BHOLLI"/>
            <meta name="description" content="There is a large number of bourbon abbreviations that are commonly used. What do they mean? Here's a list that can help."/>
            <meta name="keywords" content="abbreviations, bourbon abbreviations, bourbon, bourbon msrp, bourbon price, bourbon retail price, allocated bourbon, where to buy bourbon, bourbon abbreviations, bourbon facebook groups, bourbon instagram profiles, bourbon videos" />
            <link rel="canonical" href="https://www.bourbonmsrp.com/assets/img/bourbonmsrp.jpg"/>

            
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://www.bourbonmsrp.com/abbreviations"/>
            <meta property="og:title" content="Abbreviations - BourbonMSRP.com"/>
            <meta property="og:description" content="There is a large number of bourbon abbreviations that are commonly used. What do they mean? Here's a list that can help."/>
            <meta property="og:image" content="https://www.bourbonmsrp.com/assets/img/bourbonmsrp.jpg"/>

            
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://www.bourbonmsrp.com/abbreviations"/>
            <meta property="twitter:title" content="Abbreviations - BourbonMSRP.com"/>
            <meta property="twitter:description" content="There is a large number of bourbon abbreviations that are commonly used. What do they mean? Here's a list that can help."/>
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

            <section className="section-header abbreviations">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 text-center">
                            <form action="#">
                                <div className="form-group bg-white shadow-soft rounded-pill mb-4 px-3 py-2">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <div className="input-group input-group-merge shadow-none">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text bg-transparent border-0">
                                                        <i className="fas fa-search"></i>
                                                    </span>
                                                </div>
                                                <input id="filter" onChange={filter} type="text" className="form-control border-0 form-control-flush shadow-none pb-2" placeholder="Search for abbreviations..." required=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container mt4rem">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div id="filter_items">

                            {abbreviations.map(abbreviation => (

                                <div key={abbreviation.id} className="_item card border-light mb-3 py-3 animate-up-5">
                                    <div className="card-body d-flex align-items-center flex-wrap flex-lg-nowrap py-0">
                                        
                                        <div className="col-lg-3 col-8 pl-0 ml-2">
                                            <Link href='/abbreviations/[id]' as={`/abbreviations/${abbreviation.id}`}><a  className="h6 text-sm">{abbreviation.name}</a></Link>
                                        </div>
                                        <div className="col-12 col-lg-9 d-flex align-items-center px-0">
                                            <div className="col col-lg-11 px-0">
                                                <div className="d-flex flex-wrap flex-lg-nowrap align-items-center">
                                                    <Link href='/abbreviations/[id]' as={`/abbreviations/${abbreviation.id}`}><a className="col-12 col-lg pl-0 font-weight-normal text-dark d-none d-sm-block mt-2 mt-lg-0">{abbreviation.description}</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                               
                                    </div>
                                </div>


                            ))}

                                

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>

</>
)

Page.getInitialProps = async function(){
    const response = await fetch('https://api.bourbonspotter.com/abbreviations');
    const abbreviations = await response.json();
    return { abbreviations }
}

export default Page