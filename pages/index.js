import Head from 'next/head'

import Banner from '../component/Banner'

import Header from '../component/Header'
import Ingredient from '../component/Ingredient'
import Pub from '../component/Pub'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (

    
    <div className={styles.container_app}>
    <Head>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossOrigin="anonymous"
/>
    <script src="https://unpkg.com/react/umd/react.production.min.js" ></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossOrigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossOrigin></script>
  <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=320, height=device-height, target-densitydpi=medium-dpi" />
      </Head>
      


      

    <Header />

    
    
     <Banner />

      
     <Ingredient />


     <Pub />
    
  

    </div>
  )
}
