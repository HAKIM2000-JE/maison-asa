
import Image from 'next/image'

import styles from '../styles/Pub.module.css'
import React, { useState, useEffect } from "react";



function Pub() {
    const [show, handleShow] = useState("none");
  //const [user, setUser] = useStateValue([]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500 && window.scrollY<8000) {
        handleShow("flex");
      } else handleShow("none");
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const openCheckout = (link)=>{
       window.location= link
   }

    return (
        <div className={styles.pub} style={{display:`${show}`}} >
          <div className={styles.left}>
            
                <h1>DELICES MAROCAINS</h1>
                <h5 className={styles.avis_subtitle}> AUX PEPITES D'ARGAN</h5>

               
          </div>
          <div className={styles.center}>
           <br />
          <h2 className={styles.prodcut_title} >CRÈME ANTI-ÂGE & HYDRATATION</h2>
          </div>
          <div className={styles.right}>
          <button className={styles.ajouter_btn} onClick={()=>{openCheckout("https://boutique.maisondasa.com/fr/anti-age-hydratants/17-creme-visage-bio-delices-marocains-aux-pepites-d-argan.html")}}>ACHETEZ </button>
          </div>
            
        </div>
    )
}

export default Pub
