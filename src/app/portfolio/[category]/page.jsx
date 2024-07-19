import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'


const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Impedit dolorem culpa nesciunt molestias!
                Facilis, doloremque! Ipsa, ducimus tempora impedit 
                doloremque explicabo porro amet quasi nostrum architecto 
                quisquam sequi dolore totam?</p>
            <Button 
            text="See more"
            url="#"
            />
          </div>
          <div className={styles.imgContainer}>
            <Image
             className={styles.img}
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}/>
          </div>
        </div>
        
      
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Impedit dolorem culpa nesciunt molestias!
                Facilis, doloremque! Ipsa, ducimus tempora impedit 
                doloremque explicabo porro amet quasi nostrum architecto 
                quisquam sequi dolore totam?</p>
            <Button 
            text="See more"
            url="#"
            />
          </div>
          <div className={styles.imgContainer}>
            <Image
             className={styles.img}
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}/>
          </div>
        </div>
      
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Impedit dolorem culpa nesciunt molestias!
                Facilis, doloremque! Ipsa, ducimus tempora impedit 
                doloremque explicabo porro amet quasi nostrum architecto 
                quisquam sequi dolore totam?</p>
            <Button 
            text="See more"
            url="#"
            />
          </div>
          <div className={styles.imgContainer}>
            <Image
             className={styles.img}
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}/>
          </div>
        </div>

    </div>
  )
}

export default Category