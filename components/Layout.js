import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import Search from './Search'

const Layout = (props) => (
    <main>
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="BourbonMSRP.com is a list of bourbons along with their retail and secondary prices." />
            <meta name="author" content="BourbonMSRP.com" />
            <title>Bourbon MSRP - A list of bourbons along with their retail and secondary prices.</title>
            <link rel="icon" href="/assets/img/brand/favicon.png" type="image/png" />
            <link rel="stylesheet" href="/assets/libs/@fortawesome/fontawesome-free/css/all.min.css" />
            <link rel="stylesheet" href="/assets/libs/swiper/dist/css/swiper.min.css" />
            <link rel="stylesheet" href="/assets/css/purpose-blue-light.css" id="stylesheet" />
            <link rel="stylesheet" href="/assets/css/bourbonmsrp.css" id="stylesheet" />
        </Head>
        <Header />
        <Search />
        <div className="main-content">
            <section class="slice bg-section-secondary">
                 <div class="container">
                     {props.children}
                </div>
            </section>
        </div>
    </main>

    
)

export default Layout