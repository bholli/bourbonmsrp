import Link from 'next/link'
import Layout from '../../components/Layout'

import fetch from 'isomorphic-unfetch'

const Bourbon = ({ bourbon }) => {
    return(   
        <Layout>
            <div className="row">
                <div className="col-md-6">
                    <Link href="/">
                        <a class="btn btn-secondary rounded-pill btn-sm btn-icon">
                            <span class="btn-inner--icon">
                                <i class="fas fa-arrow-left"></i>
                            </span>
                            <span class="btn-inner--text">Back</span>
                        </a>
                    </Link>
                    <br /><br />
                </div>
            </div>
            
            <section class="slice">
                <div class="container">
                    <div class="row row-grid">
                        <div class="col-lg-6">
                            <div data-toggle="sticky" data-sticky-offset="30">
                            <a href={`http://api.bourbonspotter.com${bourbon[0].image.url}`} data-fancybox >
                                <img alt="Image placeholder" src={`http://api.bourbonspotter.com${bourbon[0].image.url}`} class="img-fluid" />
                            </a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="pl-lg-5">
                            <h5 class="h4">{bourbon[0].name}</h5>
                            <h6 class="text-sm">Bourbon</h6>
                    
                            <div class="row align-items-center">
                                <div class="col-6">
                                <span class="static-rating static-rating-sm d-block"><i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star"></i></span>
                                </div>
                                <div class="col-6 text-right">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item">
                                    <span class="badge badge-pill badge-soft-info">ID: #548970</span>
                                    </li>
                                    <li class="list-inline-item">
                                    <span class="badge badge-pill badge-soft-success">In stock</span>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div class="py-4 my-4 border-top border-bottom">
                                <h6 class="text-sm">Description:</h6>
                                <p class="text-sm mb-0">
                                    {bourbon[0].notes}
                                </p>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

Bourbon.getInitialProps = async({ query }) => {
    
    const { slug } = query;
    const response = await fetch(`http://api.bourbonspotter.com/bourbons?slug=${slug}`);
    const bourbon = await response.json();
    return { bourbon }
}

export default Bourbon;