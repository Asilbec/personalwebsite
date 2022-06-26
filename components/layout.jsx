import React from 'react';
import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Bek</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300" rel="stylesheet"></link>
      </Head>
      <header>
      </header>
      <div className='introduction-container'>
        <div className='introduction-container-content'>
          <div>
            <h1>Welcome,</h1>
            <h1>We"re here to <mark>help!</mark> </h1>
            <p>The next step in online marketing</p>
            <div className='introduction-button-container'>
              <button>More</button>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </div>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout