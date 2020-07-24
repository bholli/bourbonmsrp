import Link from 'next/link'

const Header = () => (
  
  <header className="header-global">
    <div className="container">
      <div className="align-items-center navbar-brand-container py-lg-4 px-lg-2 ">
          <Link href="/">
            <a className="navbar-brand @@logo_classes">
              <img className="navbar-brand-light common" src="/assets/img/logo-alt.png" alt="bourbon msrp logo" />
              <img className="navbar-brand-mobile common" src="/assets/img/logo-mobile.png" alt="bourbon msrp logo" />
            </a>
          </Link>
      </div>
    </div>
    
    <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-light">
        <div className="container-fluid">
            
            <div className="navbar-collapse collapse align-center" id="navbar_global">
                <div className="navbar-collapse-header">
                    <div className="row">
                        <div className="col-6 collapse-brand">
                          <Link href="/">
                            <a>
                                <img className="navbar-brand navbar-brand-mobile-nav common" src="/assets/img/logo-alt.png" alt="bourbon msrp logo" />
                            </a>
                          </Link>
                        </div>
                        <div className="col-6 collapse-close">
                          <Link href="#navbar_global">
                            <a role="button" className="fas fa-times" data-toggle="collapse"
                                data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false"
                                aria-label="Toggle navigation"></a>
                          </Link>
                        </div>
                    </div>
                </div>
                <ul className="navbar-nav navbar-nav-hover justify-content-center">
                    <li className="nav-item">
                      <Link href="/">
                        <a className="nav-link">
                            <span className="nav-link-inner-text mr-1">Bourbons</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/abbreviations">
                        <a className="nav-link">
                            <span className="nav-link-inner-text mr-1">Abbreviatons</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/where-to-buy">
                        <a className="nav-link">
                            <span className="nav-link-inner-text mr-1">Where to Buy</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about">
                        <a className="nav-link">
                            <span className="nav-link-inner-text mr-1">About</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item hide">
                      <Link href="/instagram-profiles">
                        <a className="nav-link">
                            <span className="nav-link-inner-text mr-1"><i className="fab fa-instagram instagram"></i> Profiles</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item hide">
                      <Link href="/facebook-groups">
                        <a className="nav-link">
                            <span className="nav-link-inner-text mr-1"><i className="fab fa-facebook-square facebook"></i> Groups</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item hide">
                      <Link href="/youtube-channels">
                        <a className="nav-link">
                            <span className="nav-link-inner-text mr-1"><i className="fab fa-youtube youtube"></i> Channels</span>
                        </a>
                      </Link>
                    </li>
                    
                </ul>
            </div>
            <div className="d-flex d-lg-none align-items-center">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global"
                    aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
            </div>
        </div>
    </nav>
  </header>

)

export default Header