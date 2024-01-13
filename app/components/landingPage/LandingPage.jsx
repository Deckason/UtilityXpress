import React from 'react'
import styles from "./LandingPage.module.css"
import BackgroundImages from './../backgroundImgFades/BackgroundImages';
import Services from '../services/Services';




const LandingPage = () => {
  return (
    <div className={styles.container}>
        <BackgroundImages />
        <Services />
    </div>
  )
}

export default LandingPage
