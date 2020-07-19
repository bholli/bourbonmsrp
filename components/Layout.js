import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'
import Scripts from './Scripts'

const Layout = (props) => (
    <>
        <Nav />

        <main>
            <div class="preloader bg-black flex-column justify-content-center align-items-center">
                <div class="position-relative">
                    <img class="navbar-brand-light common" src="/assets/img/loading.gif" alt="bourbon msrp loading animation" />
                </div>
            </div>
            <div class="container">
                {props.children}
            </div>
        </main>

        <Footer />

        <Scripts />
        
    </>
)

export default Layout