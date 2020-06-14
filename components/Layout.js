import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

const Layout = (props) => (
    <main>
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="BourbonMSRP.com is a list of bourbons along with their retail and secondary prices." />
            <meta name="author" content="BourbonMSRP.com" />
            <title>bourbon msrp - A list of bourbons along with their retail and secondary prices.</title>
            <link rel="icon" href="/assets/img/brand/favicon.png" type="image/png" />
            <link rel="stylesheet" href="/assets/libs/@fortawesome/fontawesome-free/css/all.min.css" />
            <link rel="stylesheet" href="/assets/libs/swiper/dist/css/swiper.min.css" />
            <link rel="stylesheet" href="/assets/css/purpose.css" id="stylesheet" />
            <link rel="stylesheet" href="/assets/css/bourbonmsrp.css" id="stylesheet" />
        </Head>

        
        <div className="main-content">
            <section class="slice bg-section-secondary">
                 <div class="container">
                     {props.children}
                </div>
            </section>
        </div>

        <script src="/assets/js/purpose.core.js"></script>
        <script src="/assets/libs/apexcharts/dist/apexcharts.min.js"></script>
        <script src="/assets/js/purpose.js"></script>
        <script src="/assets/js/bourbonmsrp.js"></script>

    </main>

    
)

export default Layout