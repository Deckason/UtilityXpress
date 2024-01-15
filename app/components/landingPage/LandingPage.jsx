import React from 'react'
import styles from "./LandingPage.module.css"
import BackgroundImages from './../backgroundImgFades/BackgroundImages';
import Services from '../services/Services';
import WhyUtilityXpress from './../whyUtilityXpress/WhyUtilityXpress';
import Nav from '../navBar/Nav';
import Footer from '../footer/Footer';




const LandingPage = () => {
  return (
    <div className={styles.container}>
        <BackgroundImages />
        <Services />
        <WhyUtilityXpress />
    </div>
    )
}

export default LandingPage
