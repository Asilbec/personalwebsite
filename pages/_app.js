import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/introduction.css'
import '../styles/services.css'

import { Toaster } from 'react-hot-toast'
import { StateContext } from '../context/StateContext'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {

  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
