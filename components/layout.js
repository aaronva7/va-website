import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.css'
import ReactGA from 'react-ga'

class Layout extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-91316269-3', {
      debug: true,
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }  
  render() {
    return (
      <div>
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://use.typekit.net/eur3cic.css" />
            <link rel="stylesheet" href="/css/all.min.css" rel='stylesheet' />
            <link rel='icon' href='/favicon.ico' />            
        </Head>
        {this.props.children}
      </div>
    ) 
  }
}

export default Layout