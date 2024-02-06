import React from 'react'
import styles from "./services.module.css"
import { FaSatelliteDish } from 'react-icons/fa6'

const InternetData = () => {
  return (
    <div className={styles.serviceContainer}>
      <FaSatelliteDish className={styles.ServiceIcon}/>
      <p>DHT Recharge</p>
    </div>
  )
}

export default InternetData
