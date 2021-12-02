import styles from '../styles/Footer.module.css'
import Image from 'next/image'
function Footer() {


  const openCheckout = (link)=>{
    window.location= link
}


    return (


        <div className={styles.footer_conatiner}>
        <h1 className={styles.newLetter} >NEWSLETTER</h1>
        <input type="text" className={styles.newInupt} />
        <div className={styles.footer} >
        
        <div className={styles.left}>
           <div className={styles.options}>
               <div className={styles.option}>
                 <h1 onClick={()=>{openCheckout("https://www.fedex.com/en-fr/conditions-of-carriage.html")}}>LIVRAISON</h1>
                  <p onClick={()=>{openCheckout("https://www.fedex.com/en-fr/conditions-of-carriage.html")}} >Fedex Express Aramex</p>

               </div>

               <div className={styles.option}>
                 <h1 onClick={()=>{openCheckout("https://boutique.maisondasa.com/fr/content/2-mentions-legales")}}>COMPAGNIE</h1>
                  <p onClick={()=>{openCheckout("https://boutique.maisondasa.com/fr/content/2-mentions-legales")}} >Mentions Légales 
Conditions Générales de vente</p>

               </div>

               <div className={styles.option}>
                 <h1>SERVICE CLIENTELE</h1>
                  <p onClick={()=>{openCheckout("https://boutique.maisondasa.com/fr/nous-contacter")}} >Contactez-Nous</p>

               </div>

               <div className={styles.option}>
                 <h1>NEED HELP ? YOU CAN CALL US</h1>
                  <p>+212 (0)5 61 20 15 12 
Monday - Sunday </p>

               </div>
           
           </div>


            <Image src="/payment.svg"  height="100" width="500"  />
            <p>ALL RIGHTS RESERVED © 2021 MAISON D’ASA</p>
        </div>


        <div className={styles.right}>
           <Image src="/logo_footer.svg" height="90" width="90" />
           
        </div>
   
       
   </div>
        </div>
        
    )
}

export default Footer
