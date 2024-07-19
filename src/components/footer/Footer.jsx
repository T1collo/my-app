import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.copy}>@2024 copyringth. All rights reserved.</div>

        <div className={styles.social}>
          <Image src="/1.png" width={25} height={25} className={styles.icon1} alt=" ResoShare FaceBook"></Image>
          <Image src="/2.png" width={25} height={25} className={styles.icon2} alt=" ResoShare Instagram"></Image>
          <Image src="/3.png" width={25} height={25} className={styles.icon3} alt=" ResoShare Twitter"></Image>
          <Image src="/4.png" width={25} height={25} className={styles.icon4} alt=" ResoShare Youtube"></Image>
        </div>
        
    </div>
 
    

  )
}

export default Footer