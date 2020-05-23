import Link from 'next/link'
import Layout from '../components/Layout'
import Search from '../components/Search'
import Fetch from 'isomorphic-unfetch'

const Home = ({bourbons}) => (
    <div>
      <Search />
        <Layout>

            <div className="container">
                <div className="row" id="bourbons">
                    
                    {bourbons.map(bourbon => (

                        <div class="col-xl-3 col-lg-4 col-md-6 bourbon_listing">
                          
                          <div class="card hover-shadow-lg hover-translate-y-n10">
                            <div class="card-body text-center">
                              <div class="avatar-parent-child">
                              <Link href='/bourbon/[slug]' as={`/bourbon/${bourbon.slug}`}>
                                 <a>
                                  <img src={`http://api.bourbonspotter.com${bourbon.image.formats.thumbnail.url}`} alt='' />
                                  </a>
                              </Link>
                                <span class="avatar-child avatar-badge bg-info"></span>
                              </div>
                              <h5 class="mt-3 mb-0 bourbon_name">{bourbon.name}</h5>
                            </div>
                            <div class="card-footer">
                              <div class="actions d-flex justify-content-between">
                              <Link href='/bourbon/[slug]' as={`/bourbon/${bourbon.slug}`}>
                    <a className="action-item btn btn-block">
                                  <span class="btn-inner--icon">View</span>
                                  </a>
                          </Link>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                ))}

                </div>
            </div>
            
        </Layout>
    </div>
    
)

Home.getInitialProps = async function(){
    const response = await fetch('https://api.bourbonspotter.com/bourbons');
    const bourbons = await response.json();
    return { bourbons }
}


export default Home