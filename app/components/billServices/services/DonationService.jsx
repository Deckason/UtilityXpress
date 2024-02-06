import React from 'react'
import styles from "./services.module.css"
import { BiSolidDonateHeart } from 'react-icons/bi'

const InternetData = () => {
  return (
    <div className={styles.serviceContainer}>
      <BiSolidDonateHeart className={styles.ServiceIcon}/>
      <p>Donation Services</p>
    </div>
  )
}

export default InternetData
