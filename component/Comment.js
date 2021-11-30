import Image from 'next/image'

import styles from '../styles/Comment.module.css'


function Comment({date , title , rating , impression , text , image }) {
    return (
        <div className={styles.comment} >

          <Image src={image} height="300" width="350" />
          <div className={styles.valide}>
            <Image src="/validate.svg" height="25" width="25"  />
             
          </div>

          <h4 className={styles.date} >{date}</h4>

          <h1 className={styles.title} >{title}</h1>
      

          <div className={styles.rating}>
           <Image src={rating} height="50"  width="90" />
              
          </div>

           <h1 className={styles.impression} >{impression}</h1>

           <p className={styles.text} > {text} </p>
            
          
        </div>
    )
}

export default Comment
