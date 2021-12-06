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
      
      <script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '3215114661844754');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=3215114661844754&ev=PageView&noscript=1"
/></noscript>
      
      </Head>
      


      

    <Header />

    
    
     <Banner />

      
     <Ingredient />


     <Pub />
    
  

    </div>
  )
}
