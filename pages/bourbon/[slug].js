import Link from 'next/link'
import Layout from '../../components/Layout'

import fetch from 'isomorphic-unfetch'

const Bourbon = ({ bourbon }) => {
    return(   
        <Layout>
            <Link href="/"><a>&laquo; back</a></Link>
            <h1>{bourbon[0].name}</h1>
            <h3>${bourbon[0].msrp}</h3>
            <h3>Secondary price: ${bourbon[0].secondary}</h3>
            <img src={`http://api.bourbonspotter.com${bourbon[0].image.url}`} alt='' />
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