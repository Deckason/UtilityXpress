import React from 'react'
import styles from "./services.module.css"
import { IoMdWifi } from 'react-icons/io'

const InternetData = () => {
  return (
    <div className={styles.serviceContainer}>
      <IoMdWifi className={styles.ServiceIcon}/>
      <p>Data & Internet</p>
    </div>
  )
}

export default InternetData
