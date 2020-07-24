import Head from 'next/head'
import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Styles from '../components/Styles'

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

const Page = ({bourbons}) => (
    <>
        
        <Head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>BourbonMSRP.com - What should bourbon cost?</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <meta name="title" content="BourbonMSRP.com"/>
            <meta name="author" content="BHOLLI"/>
            <meta name="description" content="What should bourbon cost? Bourbon MSRP (bourbonmsrp.com) answers that by providing a list of popular bourbons along with their msrp (manufacturer's suggested retail price)."/>
            <meta name="keywords" content="bourbon msrp, what does bourbon cost, buy bourbon online, where to buy bourbon, get bourbon shipped, bourbon, bourbon msrp, bourbon price, bourbon retail price, allocated bourbon, where to buy bourbon, bourbon abbreviations, bourbon facebook groups, bourbon instagram profiles, bourbon videos" />
            <link rel="canonical" href="https://www.bourbonmsrp.com/assets/img/bourbonmsrp.jpg"/>

            
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://www.bourbonmsrp.com"/>
            <meta property="og:title" content="BourbonMSRP.com - What should bourbon cost?"/>
            <meta property="og:description" content="What should bourbon cost? Bourbon MSRP (bourbonmsrp.com) answers that by providing a list of popular bourbons along with their msrp (manufacturer's suggested retail price)."/>
            <meta property="og:image" content="https://www.bourbonmsrp.com/assets/img/bourbonmsrp.jpg"/>

            
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://www.bourbonmsrp.com"/>
            <meta property="twitter:title" content="BourbonMSRP.com - What should bourbon cost?"/>
            <meta property="twitter:description" content="What should bourbon cost? Bourbon MSRP (bourbonmsrp.com) answers that by providing a list of popular bourbons along with their msrp (manufacturer's suggested retail price)."/>
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
            <section className="section-header bourbons">
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
                                                <input id="filter" type="text" onChange={filter} className="form-control border-0 form-control-flush shadow-none pb-2" placeholder="Search for bourbons..." required=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt4rem">
                    <div className="row justify-content-center" id="filter_items">
                        
                        {bourbons.map(bourbon => (

                            <div className="_item col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 mt-6 card-bourbon animate-up-5" key={bourbon.id}>
                                <Link href='/bourbons/[slug]' as={`/bourbons/${bourbon.slug}`}>
                                    <a> 
                                        <div className="card border-light text-center">
                                            <div className="profile-thumbnail mx-auto mt-n6">
                                                <img src={`https://api.bourbonspotter.com${bourbon.image.formats.thumbnail.url}`} alt='Image of {bourbon.name}' className="card-img-top border-0 img-bourbon" />
                                            </div>
                                            <div className="card-body">
                                                <h2 className="h4 card-title mb-2">{bourbon.name}</h2>
                                                <span className="card-subtitle text-gray msrp">M$RP</span>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                                
                        ))}

                    </div>
                </div>
            </section>
        </Layout>

    </>
)

Page.getInitialProps = async function(){
    const response = await fetch('https://api.bourbonspotter.com/bourbons?_sort=createdAt:DESC');
    const bourbons = await response.json();
    return { bourbons }
}


export default Page