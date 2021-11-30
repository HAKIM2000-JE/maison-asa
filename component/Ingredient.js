import Image from 'next/image'
import {  useEffect } from 'react'
import styles from '../styles/Ingredient.module.css'
import ReactPlayer from 'react-player'
import Comment from './Comment'
import axios from 'axios'
import { useState, useRef } from 'react'

import Footer from '../component/Footer'
import ProductList from './ProductList';
import Product from './Product'
import Avis from './Avis';
import products from './data'

import { Carousel, Button, Container, Row } from "react-bootstrap";




export default function Ingredient() {

    const [visibility, setvisiblity] = useState(Array(3).fill('none'))
    const [color, setColor] = useState(Array(3).fill(''))
    const [bg, setBg] = useState(Array(3).fill(''))


    const [index, setIndex] = useState(0);

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


  useEffect(() => {
 
 const loadData= ()=>{
//       axios.get(`https://SNYXWMN5BZVWLGUNZCJD4L1Z1JTHUDG2@boutique.maisondasa.com/api/products/?output_format=JSON`,{
//          headers:{
//     "Content-Type": "application/json",
//     Authorization:  "Basic SNYXWMN5BZVWLGUNZCJD4L1Z1JTHUDG2",
  
    
      

//   }
//       })
//       .then(res => {
//         console.log(res)
      
      //})

  console.log(products[0])
    }

    loadData()
  }, [])

    const seeValue = (i)=>{
        const styleList = Array(3).fill('none')
        const styleColor = Array(3).fill('')
        const styleBg = Array(3).fill('')
        if(visibility[i]=='block'){
            styleList[i]='none'
            


        }else{
            styleList[i]='block'
            styleColor[i]='white'
            styleBg[i]="#c59280"
        }
       
        setvisiblity(styleList)
        setBg(styleBg)
        setColor(styleColor)
        

    }
    return (
        <div className={styles.Ingredient}>
 
          <div className={styles.arcade_container} >
               <img  src="/arcade (2).svg" className={styles.arcade}  />
             
          </div>



        <div className={styles.products}>


        <div className={styles.space}>
         <br /><br /><br /><br /><br />
        </div>


         <div className={styles.utilisations_row}>
         <div className={styles.product}>

<Image src="/_Groupe_1.svg" width="70" height="70"  />
<p>PRODUITS ENGAGÉS, NATURELS ET BIOLOGIQUES</p>

</div>

<div className={styles.product}>

<Image src="/maison-d'Asa-_livraison.svg" width="90" height="90"  />
<p>LIVRAISON OFFERTE dès 150 €</p>
</div>
         </div>


         <div className={styles.utilisations_row} >
           
         <div className={styles.product}>
                <Image src="/maison-d'Asa-_hand.svg" width="90" height="90"  />
                <p>FIDÉLITÉ RÉCOMPENSÉE Plus vous achetez, plus vous cumulez des avantages et remises</p>
                </div>

                <div className={styles.product}>
                <Image src="/maison-d'Asa-_payement.svg" width="90" height="90" />
                <p>PAIEMENT SECURISÉ</p>
                </div>
         </div>

        

        </div>

        
            <div className={styles.product_animation}>
               <div className={styles.product_desc}>
            
                 
               </div>
               { /*<div className={styles.product_img}>
                <Image src="/produit.png" width="200"  height="300" />
                   
    </div>*/}

               <div className={styles.title_ingredient} >
               <img  src="/title.png" />

               </div>
               
                <video  autoPlay muted width="75%" style={{position:'relative' , top:"120px" , left:"-30px"}} >

                 

                <source src="/ANIMATIION-MAISON-DASA_2.mp4" 
                        type="video/mp4"/>

               

                Sorry, your browser doesn't support embedded videos.
                </video>


               





                
            </div>
  

            <br /><br />
            <br /><br /><br /><br />

            

            <button className={styles.ajouter_btn} onClick={()=>{openCheckout("https://boutique.maisondasa.com/fr/anti-age-hydratants/17-creme-visage-bio-delices-marocains-aux-pepites-d-argan.html")}} >ACHETEZ MAINTENANT</button>



            
           <div className={styles.products}  >

            <div className={styles.certif_row} >
            <div className={styles.product}>
               
                
               <Image src="/maison-d'Asa-_certif-locale.svg" width="65" height="65"  />


               </div>

               <div className={styles.product}>

               <Image src="/maison-d'Asa-_certif-france.svg" width="65" height="65"  />

               </div>
            </div>


            <div className={styles.certif_row} >
            <div className={styles.product}>
                    <Image src="/maison-d'Asa-_certif-bio.svg" width="65" height="65"  />

                    </div>

                    <div className={styles.product}>
                    <Image src="/maison-d'Asa-_certif-fraiche.svg" width="65" height="65" />

                    </div>
            </div>
                   

                    
            </div>
         


          



            <div className={styles.Images}>

                     <div className={styles.image_left_1} >
                     <Image src="/image1 (2).png" width="990" height="700"  />

                        
                     </div>



                     <div  className={styles.image_left_2} >
                     <Image src="/ELEMENTS-v2-mobile-01.png" width="990" height="700"  />

                        
                     </div>



                     <div className="">
                     <Image src="/image2 (3).png" width="900" height="700"  />

                     



                        
                     </div>
                     
                    
                   
            </div>


            


            <div className={styles.utilisations}>
                <h1>1 SOIN</h1>
                 <h1>4 USTILISATIONS POSSIBLES </h1>


                 
        <div className={styles.utilisations_list}>
        <div className={styles.space}>
         <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
            <div className={styles.utilisations_row}>
            <div className={styles.utilisation_field}>

        
                    <Image src="/maison-d'Asa-_utilisation-1.svg" width={80} height={80}  />
                    <p>SUR LES LÈVRES ABÎMÉES
                    pour les réparer</p>

                    </div>
                    <div className={styles.utilisation_field}>

                    <Image src="/maison-d'Asa-_utilisation-2.svg" width={80}  height={80}   />
                    <p>LES POMMETTES  pour donner un fini glowy à son makeup</p>
                    </div>


            </div>

           
             <div className={styles.utilisations_row}>
             <div className={styles.utilisation_field}>

        
                    <Image src="/maison-d'Asa-_utilisation-3.svg" width={90} height={90} />
                    <p>SUR LES LÈVRES ABÎMÉES
                    pour les réparer</p>

                    </div>
                    <div className={styles.utilisation_field}>

                    <Image src="/maison-d'Asa-_utilisation-4.svg" width={100} height={100} />
                    <p>LES POMMETTES  pour donner un fini glowy à son makeup</p>
                    </div>
             </div>
            
  

        

        
</div>
               
            </div>



            <div className={styles.texture}>

               <div className={styles.texture_small}>
                  <Image src="/image3.png" width={500} height={300} />
               </div>


               <div className={styles.texture_small2}>
                  <Image src="/texture.png" width={300} height={600} />
               </div>


               
            

               <div className={styles.texture_big}>
                  <Image src="/image3.png" width={900} height={500} />
               </div>
             

                <p className={styles.texture_title1} > UNE TEXTURE <br /> GOURMANTE <br /> EXTRA FONDANTE</p>

                <p  className={styles.texture_title2}>AU PARFUM IRRÉSISTIBLE DE ROSE</p>

                <p className={styles.texture_text} >Solide, puis crémeux sous les doigts, le baume fond avec gourmandise sur les lèvres pour les envelopper de confort. Formulé sans parfum ajouté, il libère une odeur toastée gourmande, totalement régressive ! La texture est rapidement absorbée et laisse un confort souple 
non collant</p>
             
            </div>




           { /*<div className={styles.voyage}>
                <h1>UN VOYAGE </h1>
                 
                <ReactPlayer url='https://www.youtube.com/watch?v=zPbHRlNIhvg' className={styles.video} width="100%" height="500px" />
              
            </div>*/
}


        {  /*  <div className={styles.comment_section}>
              <div className={styles.comment_section_header}> 
                  <div  className={styles.comment_section_header_left}>
                       <h1 >COMMENTAIRES  <br /> DES  CLIENTS</h1>
                       <Image src="/60 Avis.svg" height="200" width="1100" />
                       <p >This product is rated 4.4 out of 5 stars. 
We have collected more than 491 reviews</p>
                  </div>
                  <div  className={styles.comment_section_header_right}>
                       
                       <Image src="/users_rating.svg" height="300" width="1100" />
                      
                  </div>
              </div>
              <div className={styles.comment_section_body}>
              
                    <Comment image="/comment_image1.png" text="this cream make my  
skin look very healthy, 
i love it!" title="NIHON" rating="/stars5.svg"  impression="IN LOVE" date="12/04/2021"/>
                  
<Comment  image="/comment_image2.png"  text="very hydrating my skin looks perfect with no makeup" title="SANA" rating="/stars4.svg"  impression="HYDRATING" date="11/02/2021"/>
<div className={styles.other_comment}>
<Comment  image="/comment_image3.png" text="I like this cream " title="JULIE" rating="/stars3.svg"  impression="NICE BRAND" date="23/02/2021" />
<Comment  image="/comment_image1.png" text="natural cream with good results" title="LAURA" rating="/stars5.svg"  impression="GOOD" date="08/07/2021"/>
</div>
              </div>
              <div className={styles.pagination}>
                 <Image src="/pagination.svg" height="50" width="150" />
              </div>
                      
          
</div>*/}


        <div className={styles.fq_container}>
              <h1>F&Q</h1>
           
              <h2>VOS QUESTIONS FRÉQUENTES SUR LES PRODUITS: </h2>
              <br /><br /><br /> 
              <div className={styles.fq_row}   style={{backgroundColor:`${bg[0]}`}} onClick={ ()=>{seeValue(0)} } >
                 <h3 style={{color:`${color[0]}` , backgroundColor:`${bg[0]}`}}>QUELLE EST LA MEILLEURE FAÇON D'APPLIQUER LE PARFUM ?</h3>
                 
                 <p style={{display:`${visibility[0]}`}} >C'est tout un art. A l'inverse de ce qui est souvent communiqué,   certains des meilleurs endroits pour appliquer du parfum sur le   corps sont parfois incongrus, comme le pli du coude et même   l'arrière du genou. On peut aussi les vaporiser sur les poignets. Ce   qu'il faut retenir: le parfum tient plus longtemps sur les parties   chaudes de votre corps. </p>
              </div>

              <div className={styles.fq_row}  style={{backgroundColor:`${bg[1]}`}} onClick={()=>{seeValue(1)}}>
                 <h3 style={{color:`${color[1]}` }}>QUELLE EST LA MEILLEURE FAÇON D'APPLIQUER LE PARFUM ?</h3>
                 
                 <p style={{display:`${visibility[1]}`}}>C'est tout un art. A l'inverse de ce qui est souvent communiqué,   certains des meilleurs endroits pour appliquer du parfum sur le   corps sont parfois incongrus, comme le pli du coude et même   l'arrière du genou. On peut aussi les vaporiser sur les poignets. Ce   qu'il faut retenir: le parfum tient plus longtemps sur les parties   chaudes de votre corps. </p>
              </div>

              <div className={styles.fq_row} style={{backgroundColor:`${bg[2]}`}} onClick={()=>{seeValue(2)}}>
                 <h3 style={{color:`${color[2]}`  }}>QUELLE EST LA MEILLEURE FAÇON D'APPLIQUER LE PARFUM ?</h3>
                 
                 <p style={{display:`${visibility[2]}`}}>C'est tout un art. A l'inverse de ce qui est souvent communiqué,   certains des meilleurs endroits pour appliquer du parfum sur le   corps sont parfois incongrus, comme le pli du coude et même   l'arrière du genou. On peut aussi les vaporiser sur les poignets. Ce   qu'il faut retenir: le parfum tient plus longtemps sur les parties   chaudes de votre corps. </p>
              </div>
              
           </div>
           





            <div className={styles.avis_container}>
               
               <h1>AVIS </h1>
               <hr  className={styles.border} />
               <br />
               <Avis />
               <Avis />
               <Avis />
               <br />
               <hr  className={styles.border} />
            </div>

           

           
           
            <div className={styles.related} >


                <h1>RELATED PRODCUTS </h1>
                <br />


                <div className={styles.controls}>
                  <div onClick={onPrevClick}>
                     <Image src="/maison-d'Asa-_fleche-gauche.svg" width={30} height={30} />
                  </div>

                  <div onClick={onNextClick}>
                     <Image src="/maison-d'Asa-_fleche-droite.svg" width={30} height={30} />
                  </div>
                </div>
              
    <Carousel   ref={ref} style={{width:'80%' , display:'grid', placeItems:'center' }} variant="#DB9D7B" >
    
  
  <Carousel.Item interval={5000} >
  <div className={styles.related_list}>
              {  
                 products.map((p)=>(
                    <>
                    <Product image={p.product10.image_link}  link={p.product10.detail_link} title={p.product10.meta_title[1].value} price={ parseInt(p.product10.price) } /> 
                     <Product image={p.product27.image_link} link={p.product27.detail_link} title={p.product27.meta_title[1].value} price={ parseInt(p.product27.price) } /> 
                     <Product image={p.product44.image_link} className={styles.prod3} link={p.product44.detail_link} title={p.product44.meta_title[1].value} price={ parseInt(p.product44.price) }   />
                    </>
                  

                 ))
                 
               } 
                </div>

    
  </Carousel.Item>
  <Carousel.Item interval={5000}>
  <div className={styles.related_list}>
  {  
                 products.map((p)=>(
                    <>
                    <Product  image={p.product17.image_link} link={p.product17.detail_link}  title={p.product17.meta_title[1].value} price={ parseInt(p.product17.price) } /> 
                     <Product image={p.product4.image_link} link={p.product4.detail_link}  title={p.product4.meta_title[1].value} price={ parseInt(p.product4.price) } /> 
                     <Product image={p.product23.image_link} className={styles.prod3} link={p.product23.detail_link}  title={p.product23.meta_title[1].value} price={ parseInt(p.product23.price) } />
                    </>
                  

                 ))
                 
               } 
                </div>


  </Carousel.Item>

  <Carousel.Item interval={5000}>
  <div className={styles.related_list}>
  {  
                 products.map((p)=>(
                    <>
                    <Product image={p.product29.image_link} link={p.product29.detail_link}  title={p.product29.meta_title[1].value} price={ parseInt(p.product29.price) }   /> 
                     <Product image={p.product22.image_link} link={p.product22.detail_link}  title={p.product22.meta_title[1].value} price={ parseInt(p.product22.price) } /> 
                     <Product image={p.product16.image_link} className={styles.prod3} link={p.product16.detail_link}  title={p.product16.meta_title[1].value} price={ parseInt(p.product16.price) }  />
                    </>
                  

                 ))
                 
               } 
                </div>


  </Carousel.Item>
</Carousel>
                
                

                
            </div>

     <div className={styles.banner}>

        <h1>PEAU SECHE EN MANQUE DE NUTRITION ?</h1>
        <p>Un coffret de 4 soins 100% naturels aux probiotiques, pour une peau durablement nourrie, pleine de confort et lumineuse. Adapté aux peaux sèches, réactives, sujettes aux rougeurs</p>
        <button className={styles.ajouter_btn_banner} onClick={()=>{openCheckout("https://boutique.maisondasa.com/fr/anti-age-hydratants/17-creme-visage-bio-delices-marocains-aux-pepites-d-argan.html")}}>ACHETEZ MAINTENANT</button>
     
    </div>



    <div className={styles.products} style={{backgroundColor:"transparent" }}>
    <div className={styles.space}>
         <br /><br /><br /><br /><br /> <br />
        </div>
         <div className={styles.utilisations_row}>
         <div className={styles.product}>

<Image src="/_Groupe_1.svg" width="70" height="70"  />
<p>PRODUITS ENGAGÉS,
    NATURELS ET BIOLIGIQUE</p>

</div>

<div className={styles.product}>

<Image src="/maison-d'Asa-_livraison.svg" width="90" height="90"  />
<p>LIVRAISON OFFERTE
À PARTIR DE 150€</p>
</div>
         </div>


         <div className={styles.utilisations_row}>
           
         <div className={styles.product}>
                <Image src="/maison-d'Asa-_hand.svg" width="90" height="90"  />
                <p>NOUS CONTACTER
MAIL : HELLO@MAISOND’ASA.CO
INSTAGRAM : @MAISOND’ASA</p>
                </div>

                <div className={styles.product}>
                <Image src="/maison-d'Asa-_payement.svg" width="90" height="90" />
                <p>PAIEMENTS SÉCURISÉS</p>
                </div>
         </div>

        

        </div>

        
          

    



        <div className={styles.Insta} onClick={()=>{openCheckout("https://www.instagram.com/maisondasa/?hl=en")}}>

           <Image src="/instagram.png" height="800" width={1550} />
        
        </div>

        <div className={styles.Insta_mobile} onClick={()=>{openCheckout("https://www.instagram.com/maisondasa/?hl=en")}}>

           <Image src="/insta_mobile.png" height={1200} width={800} />
        
        </div>


        <div className={styles.prize}>

         <Image src="/logo-best spa.png" height={200} width={200} />
         <h1>MAISON D'ASA</h1>
        <p>Une invitation au voyage vers le plaisir absolu pour retrouver votre douceur avec des produits naturels et à la marocaine disponible chez le meilleur sap au monde Maison d'Asa</p>

</div>

          

<div className={styles.products}  style={{position: "relative" ,  margin:'30px',  backgroundColor:"transparent" }} >

<div className={styles.certif_row} >
<div className={styles.product}>
   
    
   <Image src="/maison-d'Asa-_certif-locale.svg" width="65" height="65"  />


   </div>

   <div className={styles.product}>

   <Image src="/maison-d'Asa-_certif-france.svg" width="65" height="65"  />

   </div>
</div>


<div className={styles.certif_row} >
<div className={styles.product}>
        <Image src="/maison-d'Asa-_certif-bio.svg" width="65" height="65"  />

        </div>

        <div className={styles.product}>
        <Image src="/maison-d'Asa-_certif-fraiche.svg" width="65" height="65" />

        </div>
</div>
       

        
</div>





            <Footer/>
    </div>

    

         
     
            
      
       
    )
}