import Link from 'next/link'

const Header = () => (
  
    <header class="header header-transparent" id="header-main">

    <nav class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light bg-white" id="navbar-main">
      <div class="container px-lg-0">

        <a class="navbar-brand mr-lg-5" href="index.html">
          bourbon msrp
        </a>

        <button class="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar-main-collapse">
          <ul class="navbar-nav align-items-lg-center">

            <li class="nav-item ">
              <a class="nav-link" href="index.html">Overview</a>
            </li>

            <li class="nav-item ">
              <a class="nav-link" href="index.html">Abbreviations</a>
            </li>

            <li class="nav-item ">
              <a class="nav-link" href="index.html">Contact</a>
            </li>
       
          </ul>
          
        </div>
      </div>
    </nav>
  </header>

)

export default Header