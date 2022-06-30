import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Bek</title>
      </Head>
      <header>
      </header>
      <div className='introduction-container'>
        <div className='introduction-container-content'>
          <div>
            <h1>Welcome,</h1>
            <h1>{"We're here to"} help! </h1>
            <p>The next step in online marketing</p>
            <div className='introduction-button-container'>
              <button>
                <a href='#future-text'>
                  Explore
                </a>
              </button>
              <button>
                <a href='#services-container-id'>
                About
                  </a></button>
            </div>
          </div>
        </div>
      </div>
      <main className="main-container">
        {children}
      </main>
    </div>
  )
}

export default Layout