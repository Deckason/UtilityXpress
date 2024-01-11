import React from 'react'
import styles from "./LandingPage.module.css"
import BackgroundImages from './../backgroundImgFades/BackgroundImages';




const LandingPage = () => {
  return (
    <div className={styles.container}>
        <BackgroundImages />
    </div>
  )
}

export default LandingPage
