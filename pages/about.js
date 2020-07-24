import Head from 'next/head'
import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

const About = () => (
    <>

        <Head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>About - BourbonMSRP.com</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <meta name="title" content="About - BourbonMSRP.com"/>
            <meta name="author" content="BourbonMSRP.com"/>
            <meta name="description" content="BourbonMSRP.com is simply a list of awesome bourbons along with their retail prices. The website was developed and is maintained by Brandon Holliday - a husband, father, senior web developer, and bourbon enthusiast from southern Louisiana, USA."/>
            <meta name="keywords" content="bourbonmsrp.com, about bourbon, brandon holliday, louisiana bourbon enthusiast, bourbon msrp, what does bourbon cost, buy bourbon online, where to buy bourbon, get bourbon shipped, bourbon, bourbon msrp, bourbon price, bourbon retail price, allocated bourbon, where to buy bourbon, bourbon abbreviations, bourbon facebook groups, bourbon instagram profiles, bourbon videos" />
            <link rel="canonical" href="https://www.bourbonmsrp.com/assets/img/bourbonmsrp.jpg"/>

            
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://www.bourbonmsrp.com/about"/>
            <meta property="og:title" content="About - BourbonMSRP.com"/>
            <meta property="og:description" content="BourbonMSRP.com is simply a list of awesome bourbons along with their retail prices. The website was developed and is maintained by Brandon Holliday - a husband, father, senior web developer, and bourbon enthusiast from southern Louisiana, USA."/>
            <meta property="og:image" content="https://www.bourbonmsrp.com/assets/img/bourbonmsrp.jpg"/>

            
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://www.bourbonmsrp.com/about"/>
            <meta property="twitter:title" content="About - BourbonMSRP.com"/>
            <meta property="twitter:description" content="BourbonMSRP.com is simply a list of awesome bourbons along with their retail prices. The website was developed and is maintained by Brandon Holliday - a husband, father, senior web developer, and bourbon enthusiast from southern Louisiana, USA."/>
            <meta property="twitter:image" content="https://www.bourbonmsrp.com/assets/img/bourbonmsrp.jpg"/>
            
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
            <div className="container-fluid mt4rem">
                <div className="row justify-content-center card-about-view">
                    <div className="col-md-4 animate-up-5">
                        <div className="card text-center text-justify mb-6">
                            <h1>Hi.</h1>
                            <p className="lead">
                                My name is Brandon, and <s>I built</s> <em>I'm building</em> BourbonMSRP.com.
                            </p>

                            <img src="/assets/img/me2.jpg" alt="brandon holliday photo, bourbonmsrp.com developer" className="card-img-top rounded-xl p-2" />
                            <p>
                                It all started in the Fall of 2018...
                            </p>
                            <p> 
                                When I bought my first bottle of <Link href="/bourbons/blantons-original-single-barrel-bourbon-whiskey"><a>Blanton's</a></Link> for $149.99, I was <strong>super excited!</strong> That is...until I discovered that I <strong>overpaid</strong> by nearly $100!!!
                            </p>
                            <p>
                                Honestly, I felt like I had gotten robbed. I vowed to never overpay for bourbon again. But each time I discovered a unicorn in the wild, I kept asking myself, "am I paying too much?"
                            </p>
                            <p>
                                So, to avoid the trap of overpaying for 
                                bourbon, I built myself a nifty spreadsheet that included the <strong>msrp</strong> of all of the <strong>bourbons</strong> that I had my eye on. I've used my spreadsheet for years, and it's allowed me to make 
                                smart decisions on whether or not to buy whatever <em>tempting</em> bottle just so happened to be in front of me. As a result, I've purchased a number of amazing bourbons that include <Link href="/bourbons/blantons-original-single-barrel-bourbon-whiskey"><a>Blanton's</a></Link>, <Link href=""><a>Weller 12</a></Link>, and even <Link href="/bourbons/thomas-h-handy-sazerac-straight-rye-whiskey"><a>Thomas H. Handy</a></Link> all at <strong>msrp</strong>.
                            </p>
                            <p>
                                Today, I'm a member of multiple bourbon groups on social media, and I have noticed that many newcomers have the same question(s) that I once had. So, I've decided to harness my 
                                web + app development experience and publish my own personal data, in hopes of helping as many bourbon lovers, as possible, answer that age-old question - <em>How much should bourbon cost?</em>.
                            </p>

                            <p>
                                If you have any requests and/or suggestions on how to make <Link href="/"><a>www.bourbonmsrp.com</a></Link> even better, or if you'd simply like to say 'hi', drop me a line at <a href="mailto:bholli@gmail.com">bholli@gmail.com</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>

</>
)

export default About