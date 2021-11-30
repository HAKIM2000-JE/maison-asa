import Image from 'next/image'

import styles from '../styles/Product.module.css'

function Product({image, title , price , link}) {
    
   const openDetails = (link)=>{
       window.location= link
   }


    return (
        <div className={styles.product} >
           <Image src={image} height={350} width={300} />
           <div className={styles.avis}>

                 
                <h1>{title}</h1>
                

                <div className={styles.avis_image}>
                <Image src="/avis.svg" height="100" width="150" />
                    
                </div>


                <p className={styles.prodcut_price} >{price} MAD</p>

   
            </div>
            <button className={styles.ajouter_btn} onClick={ ()=>{  openDetails(link)}} >VOIR CE PRODUIT</button>
            
        </div>
    )
}

export default Product
