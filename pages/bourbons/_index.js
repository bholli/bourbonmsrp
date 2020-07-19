import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'
import Nav from '../../components/Nav'

const Page = ({bourbons}) => (
  
    <div>
        <Nav />
        {bourbons.map(bourbon => (
            <div>
            <Link href='/bourbons/[slug]' as={`/bourbons/${bourbon.slug}`}>
            <a>
            <img src={`https://api.bourbonspotter.com${bourbon.image.formats.thumbnail.url}`} alt='' />
            <h2 class="">{bourbon.name}</h2>
            {bourbon.msrp}
            </a>
            </Link>
            </div>
        ))}
    </div>
    
)

Page.getInitialProps = async function(){
    const response = await fetch('https://api.bourbonspotter.com/bourbons');
    const bourbons = await response.json();
    return { bourbons }
}


export default Page