import Link from 'next/link'

const Search = () => (
    <section class="slice bg-gradient-primary" data-offset-top="#header-main">
            <div class="container py-6">
                <div class="row justify-content-center text-center">
                <div class="col-lg-9">
                    <h2 class="mb-4 text-white">What bourbon are you looking for?</h2>
                    <div>
                    <div class="form-group bg-white rounded-pill px-2 py-2 shadow">
                        <div class="row">
                        <div class="col-8 col-md-9">
                            <div class="input-group input-group-merge shadow-none">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-transparent border-0"><i class="fas fa-search"></i></span>
                            </div>
                            <input type="text" class="form-control form-control-flush shadow-none" placeholder="Search for prices ..."/>
                            </div>
                        </div>
                        <div class="col-4 col-md-3">
                            <button type="button" class="btn btn-block btn-primary rounded-pill">
                            <span class="d-block d-md-none"><i class="fas fa-search"></i></span>
                            <span class="d-none d-md-block">Search</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    <small class="form-text text-white">Popular searches: <a href="#" class="text-white font-weight-bold">Blanton's</a>, <a href="#" class="text-white font-weight-bold">Weller 12</a>, <a href="#" class="text-white font-weight-bold">Weller Antique 107</a>, <a href="#" class="text-white font-weight-bold">Buffalo Trace</a></small>
                    </div>
                </div>
                </div>
            </div>
            <a href="#bourbons" class="tongue tongue-bottom tongue-section-primary" data-scroll-to>
                <i class="fas fa-angle-down"></i>
            </a>
        </section>
)

export default Search