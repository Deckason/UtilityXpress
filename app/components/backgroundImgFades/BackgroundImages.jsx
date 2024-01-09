"use client"
import React, { useEffect, useState } from 'react'
import styles from "./BackgroundImage.module.css"
// import Bg_1 from "../../../public/assets/images/bg_1.jpeg"
import Bg_2 from "../../../public/assets/images/bg_2.jpg"
import Bg_3 from "../../../public/assets/images/bg_3.jpg"
import Bg_5 from "../../../public/assets/images/bg_5.jpg"
import Bg_7 from "../../../public/assets/images/bg_7.jpg"
import Image from 'next/image'


const backgroundImages = () => {
    const [imgIndex, setImgIndex] = useState(0)

    const images = [Bg_2, Bg_3, Bg_5, Bg_7]

    const imgLength = images.length-1

    useEffect(() => {
        const imgInterval = setInterval(() => {
          setImgIndex((prevIndex) => {
            if (prevIndex < imgLength) {
              return prevIndex + 1;
            } else {
              return 0;
            }
          });
        }, 5000);
    
        return () => clearInterval(imgInterval); 
      }, [imgLength]);
    
    console.log(imgLength);

  return (
    <div className={styles.container}>
      <div className={styles.page_bg_Container}>
            <Image
                src={images[imgIndex]}
                width={700}
                height={500}
                alt='Background-Img'
            />
            <div className={styles.quote}>
                <h3>"Streamlining essentials, one click at a time –<h1> UtilityXpress,</h1> your shortcut to seamless living."</h3>
            </div>
        </div>
    </div>
  )
}

export default backgroundImages
