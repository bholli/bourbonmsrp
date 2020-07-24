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

const Page = ({websites}) => (
  <>

    <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Where to Buy Bourbon Online - Bourbon MSRP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <meta name="title" content="Where to Buy Bourbon Online - Bourbon MSRP"/>
        <meta name="author" content="BHOLLI"/>
        <meta name="description" content="Looking for a place to buy bourbon online? Here's a list of online liquor stores with a great selection of bourbon who ship to many states across the country."/>
        <meta name="keywords" content="buy bourbon online, where to buy bourbon, get bourbon shipped, bourbon, bourbon msrp, bourbon price, bourbon retail price, allocated bourbon, where to buy bourbon, bourbon abbreviations, bourbon facebook groups, bourbon instagram profiles, bourbon videos" />
        <link rel="canonical" href="https://www.bourbonmsrp.com/assets/img/bourbonmsrp.jpg"/>

        
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.bourbonmsrp.com/where-to-buy"/>
        <meta property="og:title" content="Where to Buy Bourbon Online - Bourbon MSRP"/>
        <meta property="og:description" content="Looking for a place to buy bourbon online? Here's a list of online liquor stores with a great selection of bourbon who ship to many states across the country."/>
        <meta property="og:image" content="https://www.bourbonmsrp.com/assets/img/bourbonmsrp.jpg"/>

        
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.bourbonmsrp.com/where-to-buy"/>
        <meta property="twitter:title" content="Where to Buy Bourbon Online - Bourbon MSRP"/>
        <meta property="twitter:description" content="Looking for a place to buy bourbon online? Here's a list of online liquor stores with a great selection of bourbon who ship to many states across the country."/>
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


        <section className="section-header where-to-buy">
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
                                            <input id="filter" type="text" onChange={filter} className="form-control border-0 form-control-flush shadow-none pb-2" placeholder="Search for online stores..." required="" />
                                        </div>
                                    </div>
                                    <div className="col-auto"><button type="submit" className="btn btn-block btn-black rounded-pill">Search</button></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt4rem">
                <div className="row justify-content-center" id="filter_items">
                    
                {websites.map(website => (

                      <div key={website.id} className="_item col-12 col-sm-10 col-md-4 col-lg-3">
                        <div className="card border-light mb-4 animate-up-5 card-website">
                            <div className="row no-gutters align-items-center">
                                <div className="col-12 col-lg-8 col-xl-4 text-center">
                                  <Link href='/where-to-buy/[id]' as={`/where-to-buy/${website.id}`}>
                                    <a>
                                        <img src={`https://api.bourbonspotter.com${website.image[0].url}`} alt="private office" className="card-img p-2 rounded-xl"/>
                                    </a>
                                  </Link>
                                </div>
                                <div className="col-12 col-lg-8 col-xl-8">
                                    <div className="card-body">
                                      <Link href='/where-to-buy/[id]' as={`/where-to-buy/${website.id}`}>
                                        <a>
                                            <h4 className="h5 card-title">{website.name}</h4>
                                        </a>
                                      </Link>
                                        <div className="d-flex my-4 card-rating">
                                            <span className="star fas fa-star text-warning"></span> 
                                            <span className="star fas fa-star text-warning"></span> 
                                            <span className="star fas fa-star text-warning"></span> 
                                            <span className="star fas fa-star text-warning"></span> 
                                            <span className="star fas fa-star text-warning"></span>
                                            <span className="badge badge-pill badge-primary ml-2">5.0</span>
                                        </div> 
                                        <ul className="list-group mb-3">
                                            <li className="list-group-item small p-0 website">{website.url.replace('https://', '').replace('/','')}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          
                ))}

                    
                    
                </div>
            </div>
        </section>

        

        

    </Layout>

  </>
)

Page.getInitialProps = async function(){
    const response = await fetch('https://api.bourbonspotter.com/online-stores?_sort=createdAt:DESC');
    const websites = await response.json();
    return { websites }
}

export default Page