import Link from 'next/link'

const Nav = () => (

<nav class="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-danger mt-4">
    <div class="container">
        <a class="navbar-brand" href="#">Bourbon MSRP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-danger" aria-controls="navbar-danger" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-danger">
            
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#">
                        <i class="fab fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#">
                        <i class="fab fa-twitter"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#">
                        <i class="fab fa-google-plus"></i>
                        <span class="nav-link-inner--text d-lg-none">Google +</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#">
                        <i class="fab fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
            </ul>
            
        </div>
    </div>
</nav>
)

export default Nav