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

    const [visibility, setvisiblity] = useState(Array(7).fill('none'))
    const [color, setColor] = useState(Array(7).fill(''))
    const [bg, setBg] = useState(Array(7).fill(''))


    const [index, setIndex] = useState(0);

    const ref = useRef(null);

  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  const openCheckout = (link)=>{
       window.location= "https://boutique.maisondasa.com/fr/commande"
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
        const styleList = Array(7).fill('none')
        const styleColor = Array(7).fill('')
        const styleBg = Array(7).fill('')
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
               <img  src="/_Groupe_ (11).svg" className={styles.arcade1}  />
             
          </div>



        <div className={styles.products}>


        <div className={styles.space}>
         <br /><br /><br /><br /><br />
        </div>


         <div className={styles.utilisations_row}>
         <div className={styles.product}>

<Image src="/_Groupe_1.svg" width="70" height="70"  />
<p>PRODUITS ENGAG??S, NATURELS ET BIOLOGIQUES</p>

</div>

<div className={styles.product}>

<Image src="/maison-d'Asa-_livraison.svg" width="90" height="90"  />
<p>LIVRAISON OFFERTE d??s 150 ???</p>
</div>
         </div>


         <div className={styles.utilisations_row} >
           
         <div className={styles.product}>
                <Image src="/maison-d'Asa-_hand.svg" width="90" height="90"  />
                <p>FID??LIT?? R??COMPENS??E Plus vous achetez, plus vous cumulez des avantages et remises</p>
                </div>

                <div className={styles.product}>
                <Image src="/maison-d'Asa-_payement.svg" width="90" height="90" />
                <p>PAIEMENT SECURIS??</p>
                </div>
         </div>

        

        </div>



        <div className={styles.Carousel_container} style={{position:'relative', top:"-120px"}} >

                 <Carousel ref={ref} controls={false}  className={styles.utilisations_carousel} indicators={false}  style={{width:'100%' , display:'grid' ,   placeItems:'center' }} >


<div className={styles.controls_use} style={{width:"50%", position:"relative" , left:"-10px" , top:"150px"}}>
      <div onClick={onPrevClick}>
         <Image src="/maison-d'Asa-_fleche-gauche.svg" width={30} height={30} />
      </div>

      <div onClick={onNextClick}>
         <Image src="/maison-d'Asa-_fleche-droite.svg" width={30} height={30} />
      </div>
    </div>

<Carousel.Item interval={5000}>

<div className={styles.product}>

<Image src="/_Groupe_1.svg" width="70" height="70"  />
<p style={{"fontSize":"15px"}} >PRODUITS ENGAG??S, NATURELS ET BIOLOGIQUES</p>

</div>




</Carousel.Item>



<Carousel.Item interval={5000}>
<div className={styles.product}>
                <Image src="/maison-d'Asa-_payement.svg" width="120" height="120" />
                <p style={{"fontSize":"15px"}}>PAIEMENT SECURIS??</p>
                </div>





</Carousel.Item>

<Carousel.Item interval={5000}>
<div className={styles.product}>

<Image src="/maison-d'Asa-_livraison.svg" width="120" height="120"  />
<p style={{"fontSize":"15px"}}>LIVRAISON OFFERTE d??s 150 ???</p>
</div>



</Carousel.Item>


<Carousel.Item interval={5000}>
<div className={styles.product}>
                <Image src="/maison-d'Asa-_hand.svg" width="120" height="120"  />
                <p style={{"fontSize":"15px"}}>FID??LIT?? R??COMPENS??E Plus vous achetez, plus vous cumulez des avantages et remises</p>
                </div>




</Carousel.Item>













</Carousel>

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
               
                <video  autoPlay muted width="90%" style={{position:'relative' , top:"120px" , left:"-13px"}} >

                 

                <source src="/ANIMATIION-MAISON-DASA_2.mp4" 
                        type="video/mp4"/>

               

                Sorry, your browser doesn't support embedded videos.
                </video>


               





                
            </div>



            <div className={styles.anim_mobile}>
            <br /><br />
            
               <div className={styles.anim_mobile_title}>
               <img src="ingride.png" alt="" />
               </div>
              <br /><br />
              <video  autoPlay muted width="70%" style={{position:'relative' , top:"120px" }} >

                 

                  <source src="/animation-mobile (1).mov" 
                        type="video/mp4"/>



                  Sorry, your browser doesn't support embedded videos.
                  </video>
                              </div>
  

            <br /><br />
            <br /><br /><br /><br />



            
            

            <button className={styles.ajouter_btn} onClick={()=>{openCheckout("https://boutique.maisondasa.com/fr/anti-age-hydratants/17-creme-visage-bio-delices-marocains-aux-pepites-d-argan.html")}} >ACHETEZ MAINTENANT</button>



          
<div className={styles.Carousel_container}>
            <Carousel ref={ref} controls={false}  className={styles.certif_carousel} indicators={false}  style={{width:'100%' , display:'grid' ,   placeItems:'center' }} >


            <div className={styles.controls_certif}>
                  <div onClick={onPrevClick}>
                     <Image src="/maison-d'Asa-_fleche-gauche.svg" width={30} height={30} />
                  </div>

                  <div onClick={onNextClick}>
                     <Image src="/maison-d'Asa-_fleche-droite.svg" width={30} height={30} />
                  </div>
                </div>
  
<Carousel.Item interval={5000}>

<div className={styles.product}>
               
                
               <Image src="/maison-d'Asa-_certif-locale.svg" width="150" height="150"  />


               </div>



  
</Carousel.Item>



<Carousel.Item interval={5000}>
<div className={styles.product} style={{position:"relative" , left:"5px"}}>

               <Image src="/maison-d'Asa-_certif-france.svg" width="150" height="150"  />

               </div>





</Carousel.Item>

<Carousel.Item interval={5000}>
<div className={styles.product} style={{position:"relative" , left:"5px"}} >

               <Image src="/maison-d'Asa-_certif-bio.svg" width="150" height="150"  />

               </div>





</Carousel.Item>


<Carousel.Item interval={5000}>
<div className={styles.product} style={{position:"relative" , left:"5px"}}>

               <Image src="/maison-d'Asa-_certif-fraiche.svg" width="150" height="150"  />

               </div>





</Carousel.Item>



<Carousel.Item interval={5000} style={{position:"relative" , left:"5px"}}>




<div className={styles.product}>
                    <Image src="/maison-d'Asa-_certif-fraiche.svg" width="150" height="150" />

                    </div>






</Carousel.Item>






<Carousel.Item interval={5000} style={{position:"relative" , left:"5px"}}>

<div className={styles.product}>
                    <Image src="/maison-d'Asa-_certif-bio.svg" width="150" height="150"  />

                    </div>



</Carousel.Item>


</Carousel>

</div>


            
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
                     <img src="/image1 (2).png" width="100%"  />

                        
                     </div>



                     <div  className={styles.image_mobile} >
                     <img src="/image10.png" width="100%"  />

                        
                     </div>



                     <div className={styles.image_web}>
                     <img src="/image2 (3).png" width="100%" />

                     



                        
                     </div>
                     
                    
                   
            </div>


            


            <div className={styles.utilisations}>
                <h1>1 SOIN</h1>
                 <h1>4 USTILISATIONS POSSIBLES </h1>



<div className={styles.Carousel_container} >

                 <Carousel ref={ref} controls={false}  className={styles.utilisations_carousel} indicators={false}  style={{width:'100%' , display:'grid' ,   placeItems:'center' }} >


<div className={styles.controls_use}>
      <div onClick={onPrevClick}>
         <Image src="/maison-d'Asa-_fleche-gauche.svg" width={30} height={30} />
      </div>

      <div onClick={onNextClick}>
         <Image src="/maison-d'Asa-_fleche-droite.svg" width={30} height={30} />
      </div>
    </div>

<Carousel.Item interval={5000}>

<div className={styles.utilisation_field}>

        
<Image src="/maison-d'Asa-_utilisation-2.svg" width={200} height={200} />
<p>SUR LES L??VRES AB??M??ES
pour les r??parer</p>

</div>




</Carousel.Item>



<Carousel.Item interval={5000}>
<div className={styles.utilisation_field}>

<Image src="/maison-d'Asa-_utilisation-1.svg" width={200} height={200} />
<p>LES POMMETTES  pour donner un fini glowy ?? son makeup</p>
</div>





</Carousel.Item>

<Carousel.Item interval={5000}>
<div className={styles.utilisation_field}>

<Image src="/maison-d'Asa-_utilisation-4.svg" width={200} height={200} />
<p>LES POMMETTES  pour donner un fini glowy ?? son makeup</p>
</div>




</Carousel.Item>


<Carousel.Item interval={5000}>
<div className={styles.utilisation_field}>

<Image src="/maison-d'Asa-_utilisation-3.svg" width={200} height={200} />
<p>LES POMMETTES  pour donner un fini glowy ?? son makeup</p>
</div>




</Carousel.Item>



<Carousel.Item interval={5000} style={{position:"relative" , left:"5px"}}>




<div className={styles.utilisation_field}>

<Image src="/maison-d'Asa-_utilisation-2.svg" width={200}  height={200}   />
<p>LES POMMETTES  pour donner un fini glowy ?? son makeup</p>
</div>







</Carousel.Item>






<Carousel.Item interval={5000} style={{position:"relative" , left:"5px"}}>

<div className={styles.utilisation_field}>

        
                    <Image src="/maison-d'Asa-_utilisation-1.svg" width={200} height={200}  />
                    <p>SUR LES L??VRES AB??M??ES
                    pour les r??parer</p>

                    </div>


</Carousel.Item>


</Carousel>

</div>



                 
        <div className={styles.utilisations_list}>
        
            <div className={styles.utilisations_row}>
            <div className={styles.utilisation_field}>

        
                    <Image src="/maison-d'Asa-_utilisation-1.svg" width={80} height={80}  />
                    <p>SUR LES L??VRES AB??M??ES
                    pour les r??parer</p>

                    </div>
                    <div className={styles.utilisation_field}>

                    <Image src="/maison-d'Asa-_utilisation-2.svg" width={80}  height={80}   />
                    <p>LES POMMETTES  pour donner un fini glowy ?? son makeup</p>
                    </div>


            </div>

           
             <div className={styles.utilisations_row}>
             <div className={styles.utilisation_field}>

        
                    <Image src="/maison-d'Asa-_utilisation-3.svg" width={120} height={120} />
                    <p>SUR LES L??VRES AB??M??ES
                    pour les r??parer</p>

                    </div>
                    <div className={styles.utilisation_field}>

                    <Image src="/maison-d'Asa-_utilisation-4.svg" width={100} height={100} />
                    <p>LES POMMETTES  pour donner un fini glowy ?? son makeup</p>
                    </div>
             </div>
            
  

        

        
</div>
               
            </div>



            <div className={styles.texture}>

               <div className={styles.texture_small}>
                  <Image src="/image3.png" width={500} height={300} />
               </div>


               <div className={styles.texture_small2}>
                  <img src="/texture.png" width="85%" />
               </div>


               
            

               <div className={styles.texture_big}>
                  <Image src="/image3.png" width={900} height={500} />
               </div>
             

                <p className={styles.texture_title1} > UNE TEXTURE <br /> GOURMANTE <br /> EXTRA FONDANTE</p>

                <p  className={styles.texture_title2}>AU PARFUM IRR??SISTIBLE DE ROSE</p>

                <p className={styles.texture_text} >Solide, puis cr??meux sous les doigts, le baume fond avec gourmandise sur les l??vres pour les envelopper de confort. Formul?? sans parfum ajout??, il lib??re une odeur toast??e gourmande, totalement r??gressive ! La texture est rapidement absorb??e et laisse un confort souple 
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
              <h1>FAQ</h1>
           
              <h2>VOS QUESTIONS FR??QUENTES SUR LES PRODUITS : </h2>
              <br /><br /><br /> 
              <div className={styles.fq_row}   style={{backgroundColor:`${bg[0]}`}} onClick={ ()=>{seeValue(0)} } >
                 <h3 style={{color:`${color[0]}` , backgroundColor:`${bg[0]}`}}>comment bien l???utiliser pour un r??sultat liftant et imm??diat ?
</h3>
                 
                 <p style={{display:`${visibility[0]}`}} >Appliquez la cr??me le matin et le soir sur une peau parfaitement propre et d??maquill??e. Une fois que l'on a fait peau nette, on commence par d??poser un peu de cr??me dans le creux de sa main que l'on applique par pressions des paumes de main sur le front, le menton et les joues.
La cr??me doit syst??matiquement s'accompagner d'un massage du visage. Cela permet d'augmenter l'efficacit?? de la cr??me en faisant bien p??n??trer tous ses actifs, mais aussi de tonifier les muscles, de booster la circulation sanguine et de stimuler le renouvellement des cellules du visage. La peau se r??g??n??re plus vite avec une meilleure qualit??
</p>
              </div>

              <div className={styles.fq_row}  style={{backgroundColor:`${bg[1]}`}} onClick={()=>{seeValue(1)}}>
                 <h3 style={{color:`${color[1]}` }}>A quel type de peau est-elle adapt??e ?</h3>
                 
                 <p style={{display:`${visibility[1]}`}}>Cette cr??me a ??t?? pens??e comme un soin anti-??ge universel pouvant convenir ?? toutes les peaux. Elle est souple et fondante pour aider la peau ?? retrouver sa jeunesse gr??ce notamment aux ingr??dients purement naturels. </p>
              </div>

              <div className={styles.fq_row} style={{backgroundColor:`${bg[2]}`}} onClick={()=>{seeValue(2)}}>
                 <h3 style={{color:`${color[2]}`  }}>J???ai un peau r??active, est-elle adapt??e ?</h3>
                 
                 <p style={{display:`${visibility[2]}`}}>Cette cr??me est tr??s pris??e de peaux dites "fragiles" car sa composition exemplaire, sans allerg??ne, est tr??s douce avec la peau.</p>
              </div>
              
              <div className={styles.fq_row} style={{backgroundColor:`${bg[3]}`}} onClick={()=>{seeValue(3)}}>
                 <h3 style={{color:`${color[3]}`  }}>Est-ce plut??t une cr??me de jour ou de nuit ?</h3>
                 
                 <p style={{display:`${visibility[3]}`}}>Les deux, mon g??n??ral ! Cette cr??me est parfaite le matin car elle p??n??tre vite et permet de d??marrer sa journ??e ! Le soir, elle apporte un confort hydratant pr??cieux ?? la peau. Nous vous conseillons, pour simplifier votre routine, d'appliquer la cr??me le matin et l'huile le soir.</p>
              </div>
              <div className={styles.fq_row} style={{backgroundColor:`${bg[4]}`}} onClick={()=>{seeValue(4)}}>
                 <h3 style={{color:`${color[4]}`  }}>Peut-on l???utiliser comme base de maquillage ?</h3>
                 
                 <p style={{display:`${visibility[4]}`}}>Oui, il est tout ?? fait possible de l'utiliser comme base de maquillage puisque sa texture fluide p??n??tre vite. Il est n??anmoins important de ne pas en mettre une trop grande quantit??.</p>
              </div>
              <div className={styles.fq_row} style={{backgroundColor:`${bg[5]}`}} onClick={()=>{seeValue(5)}}>
                 <h3 style={{color:`${color[5]}`  }}>Peut-on l???utiliser autour des yeux ?</h3>
                 
                 <p style={{display:`${visibility[5]}`}}>Bien ??videmment ! pour ??radiquer les rides autour des yeux</p>
              </div>
              
              
               <div className={styles.fq_row} style={{backgroundColor:`${bg[6]}`}} onClick={()=>{seeValue(6)}}>
                 <h3 style={{color:`${color[6]}`  }}>Est-elle test??e sous contr??le dermatologique ?
</h3>
                 
                 <p style={{display:`${visibility[6]}`}}>Oui, chacun de nos produits est test?? sous contr??le dermatologique pour s'assurer que celui-ci est tol??r?? et contient des vertus pour la peau.</p>
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





            <div className={styles.related_mobile} >


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
    <Product image="/product1.png" link={p.product10.detail_link} title="PILLOW MIST" price={ parseInt(p.product10.price) } /> 
    
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
  
     <Product image="/product2.png" link={p.product4.detail_link}  title="D??LICES MAROCAINS" price={ parseInt(p.product4.price) } /> 
    
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
    <Product image="/product3.png" link={p.product29.detail_link}  title="PILLOW MIST" price={ parseInt(p.product29.price) }   /> 
   
    
    </>
  

 ))
 
} 
</div>


</Carousel.Item>
</Carousel>




</div>

     <div className={styles.banner}>

        <h1>PEAU SECHE EN MANQUE DE NUTRITION ?</h1>
        <p>Un coffret de 4 soins 100% naturels aux probiotiques, pour une peau durablement nourrie, pleine de confort et lumineuse. Adapt?? aux peaux s??ches, r??actives, sujettes aux rougeurs</p>
        <button className={styles.ajouter_btn_banner} onClick={()=>{openCheckout("https://boutique.maisondasa.com/fr/anti-age-hydratants/17-creme-visage-bio-delices-marocains-aux-pepites-d-argan.html")}}>ACHETEZ MAINTENANT</button>
     
    </div>



          
     <br/><br/><br/>
    



        <div className={styles.Insta} onClick={()=>{openCheckout("https://www.instagram.com/maisondasa/?hl=en")}}>

           <Image src="/instagram.png" height="800" width={1550} />
        
        </div>

        <div className={styles.Insta_mobile}  onClick={()=>{openCheckout("https://www.instagram.com/maisondasa/?hl=en")}}>

           <img src="/insta_mobile.png"  width="90%"    />
        
        </div>


        <div className={styles.prize}>

         <img src="/logo-best spa.png" height={200} width={200} />
         <h1>MAISON D'ASA</h1>
        <p>Une invitation au voyage vers le plaisir absolu pour retrouver votre douceur avec des produits naturels et ?? la marocaine disponible chez le meilleur sap au monde Maison d'Asa</p>

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


<div className={styles.Carousel_container}>

<Carousel ref={ref} controls={false}  className={styles.certif_carousel} indicators={false}  style={{width:'100%' , display:'grid' ,   placeItems:'center' }} >


<div className={styles.controls_certif}>
      <div onClick={onPrevClick}>
         <Image src="/maison-d'Asa-_fleche-gauche.svg" width={30} height={30} />
      </div>

      <div onClick={onNextClick}>
         <Image src="/maison-d'Asa-_fleche-droite.svg" width={30} height={30} />
      </div>
    </div>

<Carousel.Item interval={5000}>

<div className={styles.product}>
   
    
   <Image src="/maison-d'Asa-_certif-locale.svg" width="150" height="150"  />


   </div>




</Carousel.Item>



<Carousel.Item interval={5000}>
<div className={styles.product} style={{position:"relative" , left:"5px"}}>

   <Image src="/maison-d'Asa-_certif-france.svg" width="150" height="150"  />

   </div>





</Carousel.Item>

<Carousel.Item interval={5000}>
<div className={styles.product} style={{position:"relative" , left:"5px"}} >

   <Image src="/maison-d'Asa-_certif-bio.svg" width="150" height="150"  />

   </div>





</Carousel.Item>


<Carousel.Item interval={5000}>
<div className={styles.product} style={{position:"relative" , left:"5px"}}>

   <Image src="/maison-d'Asa-_certif-fraiche.svg" width="150" height="150"  />

   </div>





</Carousel.Item>



<Carousel.Item interval={5000} style={{position:"relative" , left:"5px"}}>




<div className={styles.product}>
        <Image src="/maison-d'Asa-_certif-fraiche.svg" width="150" height="150" />

        </div>






</Carousel.Item>






<Carousel.Item interval={5000} style={{position:"relative" , left:"5px"}}>

<div className={styles.product}>
        <Image src="/maison-d'Asa-_certif-bio.svg" width="150" height="150"  />

        </div>



</Carousel.Item>


</Carousel>

</div>


  <br/> <br/>



            <Footer/>
    </div>

    

         
     
            
      
       
    )
}
