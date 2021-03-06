
import styles from '../styles/Header.module.css'
import Image from 'next/image'
import React, { useState, useEffect } from "react";



export default function Header() {

    const [main, setmain] = useState("main_list")
    const [media, setmedia] = useState("main_media_button")
    const [isopen, setisopen] = useState(false)
    const [show, setShow] = useState('block')



    const channge = ()=>{
         if(isopen){
            setmain("main_list ")
            setmedia("main_media_button ")

         }else{

            setmain("main_list show_list")
            setmedia("main_media_button ")
         }
         setisopen(!isopen)
    }


    const setPageOffset = (x)=>{
        x=window.pageXOffset

    }

var prevScrollpos =0
const showHeader = ()=>{

    setPageOffset(prevScrollpos)
    

    if (window.scrollY > 200) {

        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            // document.getElementById("navbar").style.top = "0";
            // alert('we go up')
            
                setShow('0px')

          
            
        } else {
            // alert('we go down')
            
            setShow('-150px')
            
        }
        prevScrollpos = currentScrollPos;



    }
    
   
        
      
            
           
}

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", showHeader);
          }
          watchScroll();
          return () => {
            window.removeEventListener("scroll", showHeader);
          };
    },[])
    return (
        <div className="header" style={{top:`${show}`}}  >

        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <Image src="/logo.svg" width="74" height="72" />
                </div>
                <div className={main} id="mainListDiv">
                    <ul>
                        <li ><a href="https://boutique.maisondasa.com/fr/37-corps">Fragrances</a></li>
                        <li ><a href="https://boutique.maisondasa.com/fr/36-visage">Skincare</a></li>
                        <li ><a href="https://boutique.maisondasa.com/fr/30-interieurs">About</a></li>
                        <li ><a href="https://boutique.maisondasa.com/fr/35-cheveux">Search</a></li>

                        <li style={{  display :"flex" , justifyContent :"space-around" }} className="shop" >
                        <Image src="/recherche.svg" width="20" height="20" />
                        <Image src="/panier.svg" width="20" height="20" /> </li>
                       
                        
                    </ul>
                </div>
                <div className="media_button"  onClick={channge}>
                    <button className={media}  id="mediaButton" >
                        <span></span>
                        <span></span>
                       
                    </button>
                </div>
            </div>

            <div className="shop_mobile">
            <Image src="/recherche.svg" width="30" height="30" />
                        <Image src="/panier.svg" width="30" height="30" /> 
            </div>
        </nav>
            
        </div>
    )
}
