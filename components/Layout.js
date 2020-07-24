import React, { Component } from 'react'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import Scripts from './Scripts'
import ReactGA from 'react-ga'

export default class Layout extends React.Component{
    componentDidMount() {
        ReactGA.initialize('UA-2006061-62');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    render() {
        return (
            <>
                <Header />
                <main>   
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </main>
                <Footer />
                <Scripts />  
            </>
        )
    }
}
