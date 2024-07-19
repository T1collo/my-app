import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem, ipsum dolor sit amet consectetur.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Velit alias temporibus, magni numquam, 
            voluptates illum recusandae maxime eaque
             soluta odio vel ipsam eligendi veritatis 
             tenetur non obcaecati sequi, enim porro!
          </p>
          <div className={styles.author}>
          <Image
              src="/Logo.png"
              alt=""
              width={50}
              height={50}
              className={styles.logoImage}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
        <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
         Vitae molestias aperiam quibusdam molestiae ad ex, unde delectus 
         fugit eaque doloremque? 
         Sint aliquam doloremque ullam eius ipsam odit culpa cumque atque.
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
         Animi est temporibus labore blanditiis optio itaque obcaecati, accusantium,
        pariatur aperiam tempore commodi autem quaerat ratione ipsum fuga iusto reprehenderit 
        ab aliquid!
          </p>
        <p className={styles.text}>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
         Vitae molestias aperiam quibusdam molestiae ad ex, unde delectus 
         fugit eaque doloremque? 
         Sint aliquam doloremque ullam eius ipsam odit culpa cumque atque.
         
        </p>
        <p className={styles.text}>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
         Vitae molestias aperiam quibusdam molestiae ad ex, unde delectus 
         fugit eaque doloremque? 
         Sint aliquam doloremque ullam eius ipsam odit culpa cumque atque.
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
         Vitae molestias aperiam quibusdam molestiae ad ex, unde delectus 
         fugit eaque doloremque? 
         Sint aliquam doloremque ullam eius ipsam odit culpa cumque atque.
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
         Animi est temporibus labore blanditiis optio itaque obcaecati, accusantium,
        pariatur aperiam tempore commodi autem quaerat ratione ipsum fuga iusto reprehenderit 
        ab aliquid!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
         Vitae molestias aperiam quibusdam molestiae ad ex, unde delectus 
         fugit eaque doloremque? 
         Sint aliquam doloremque ullam eius ipsam odit culpa cumque atque.
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
         Animi est temporibus labore blanditiis optio itaque obcaecati, accusantium,
        pariatur aperiam tempore commodi autem quaerat ratione ipsum fuga iusto reprehenderit 
        ab aliquid!
        </p>
      </div>
    </div>
  );
};


export default BlogPost