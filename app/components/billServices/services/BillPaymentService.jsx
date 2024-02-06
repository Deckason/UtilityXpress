import React from 'react'
import styles from "./services.module.css"
import { FaMoneyBillTransfer } from 'react-icons/fa6'

const InternetData = () => {
  return (
    <div className={styles.serviceContainer}>
      <FaMoneyBillTransfer className={styles.ServiceIcon}/>
      <p>Bill Payments</p>
    </div>
  )
}

export default InternetData
