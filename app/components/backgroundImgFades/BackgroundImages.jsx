import React from 'react'
import styles from "./BackgroundImage.module.css"
import bg from "../../../public/assets/images/bg.jpg"
import Image from 'next/image'


const backgroundImages = () => {

  return (
    <div className={styles.container}>
      <div className={styles.page_bg_Container}>
            <Image
                src={bg}
                width={1500}
                height={1000}
                alt='Background-Img'
            />
            <div className={styles.quote}>
                <h3>Streamlining essentials, one click at a time <h1>UtilityXpress,</h1> your shortcut to seamless living.</h3>
            </div>
        </div>
    </div>
  )
}

export default backgroundImages
