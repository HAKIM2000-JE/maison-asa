
import styles from '../styles/Avis.module.css'
import Image from 'next/image'
function Avis() {
    return (
        <div  className={styles.avis}>
            <h3 className={styles.title}>SMELLS LIKE MOROCCO ! </h3>
            <div className={styles.header}>

               <h3>Camille      25/34 ans</h3>

                <Image width={130} height={10} src='/_Groupe_ (10).svg' />

            </div>

            <div className={styles.Body}>
                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh   euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim   veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                  <h3 className={styles.date} >02.11.2021</h3>
           
           
                 </div>
            
        </div>
    )
}

export default Avis
