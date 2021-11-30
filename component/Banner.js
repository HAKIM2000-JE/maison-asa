
import Image from 'next/image'

import styles from '../styles/Banner.module.css'
import { Carousel} from "react-bootstrap";
import Product from './Product';

import { useState, useRef } from 'react'
export default function Banner() {

  const ref = useRef(null);

const onPrevClick = () => {
  ref.current.prev();
};
const onNextClick = () => {
  ref.current.next();
};

const openCheckout = (link)=>{
       window.location= link
   }


    return (
      
        <div className={styles.banner}>

        <div className={styles.controls}>
                  <div onClick={onPrevClick}>
                     <Image src="/maison-d'Asa-_fleche-gauche.svg" width={30} height={30} />
                  </div>

                  <div onClick={onNextClick}>
                     <Image src="/maison-d'Asa-_fleche-droite.svg" width={30} height={30} />
                  </div>
                </div>

                    
    <Carousel ref={ref} controls={false}  indicators={false}  style={{width:'100%' , display:'grid' ,  placeItems:'center' }} >


    
  
    <Carousel.Item interval={5000}>

     <div className={styles.banner_image1}>
        
     </div>
    
  


      
    </Carousel.Item>
    <Carousel.Item interval={5000}>
    <div className={styles.banner_image}>
        
     </div>


    
  
  
    </Carousel.Item>


    <Carousel.Item interval={5000}>

<div className={styles.banner_image3}>
   
</div>




 
</Carousel.Item>
  </Carousel>


  <div className={styles.content}>


<div className={styles.avis}>

       
      <h1>DELICES MAROCAINS</h1>
      <h5 className={styles.avis_subtitle}> AUX PEPITES D'ARGAN</h5>

      <div className={styles.avis_image}>
      <Image src="/avis.svg" height="120" width="120" />
          
      </div>


      <h2 className={styles.prodcut_title} >CRÈME ANTI-ÂGE & HYDRATATION</h2>
      
      <p  className={styles.prodcut_description} >La crème anti-âge & hydratation Délices Marocains aux pépites d’argan protège efficacement le capital jeunesse de la peau. Sa composition bio permet de raffermir la peau, lisser rides et ridules et raviver visiblement l'éclat du teint. Elle a été formulée pour convenir à toutes les peaux, même sensibles.</p>

      <h3 className={styles.prodcut_price} >750 MAD</h3>


      <button className={styles.ajouter_btn} onClick={()=>{openCheckout("https://boutique.maisondasa.com/fr/anti-age-hydratants/17-creme-visage-bio-delices-marocains-aux-pepites-d-argan.html")}}>ACHETEZ MAINTENANT</button>
</div>


<div className={styles.info}>
          <p> <Image src="/puce.png" height="20" width="20"  />Livraison express à domicile </p>
          <p style={{position:'relative' , top:'-10px'}}> <Image src="/puce.png" height="20" width="20"  />2 échantillons offerts à chaque commande !  Profitez-en</p>
          <p style={{position:'relative' , top:'-20px'}}> <Image src="/puce.png" height="20" width="20"   />Avec ce produit, vous gagnez 16 points de fidélité </p>
          
</div>
  
</div>



       

        

        

          
          

            
        </div>
    )
}
