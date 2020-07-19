import Link from 'next/link'

const Nav = () => (
    <header class="header-global">
        <nav id="navbar-main" class="navbar navbar-main navbar-expand-lg  py-lg-3 px-lg-2 navbar-light navbar-transparent">
            <div class="container-fluid">
                <a class="navbar-brand @@logo_classes" href="index.html">
                    <img class="navbar-brand-light common" src="assets/img/logo.png" alt="bourbon msrp logo" />
                </a>
                <div class="navbar-collapse collapse" id="navbar_global">
                    <div class="navbar-collapse-header">
                        <div class="row">
                            <div class="col-6 collapse-brand">
                                <a href="index.html">
                                    <img class="navbar-brand-light common" src="assets/img/logo.png" alt="bourbon msrp logo" />
                                </a>
                            </div>
                            <div class="col-6 collapse-close">
                                <a href="#navbar_global" role="button" class="fas fa-times" data-toggle="collapse"
                                    data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false"
                                    aria-label="Toggle navigation"></a>
                            </div>
                        </div>
                    </div>
                    <ul class="navbar-nav navbar-nav-hover justify-content-center">
                        <li class="nav-item">
                            <a href="index.html" class="nav-link">
                                <span class="nav-link-inner-text mr-1">Bourbons</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="abbreviations.html" class="nav-link">
                                <span class="nav-link-inner-text mr-1">Abbreviatons</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="where-to-buy.html" class="nav-link">
                                <span class="nav-link-inner-text mr-1">Where to Buy</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-link-inner-text mr-1"><i class="fab fa-instagram instagram"></i> Profiles</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-link-inner-text mr-1"><i class="fab fa-facebook-square facebook"></i> Groups</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-link-inner-text mr-1"><i class="fab fa-youtube youtube"></i> Channels</span>
                            </a>
                        </li>
                        
                        
                        
                    </ul>
                </div>
                <div class="d-none d-lg-block @@cta_button_classes">
                    &nbsp;
                </div>
                <div class="d-flex d-lg-none align-items-center">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global"
                        aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation"><span
                            class="navbar-toggler-icon"></span></button>
                </div>
            </div>
        </nav>
    </header>
)

export default Nav