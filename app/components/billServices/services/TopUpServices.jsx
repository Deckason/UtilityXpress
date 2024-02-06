import React from 'react'
import styles from "./services.module.css"
import { MdMobileFriendly } from 'react-icons/md'

const InternetData = () => {
  return (
    <div className={styles.serviceContainer}>
      <MdMobileFriendly className={styles.ServiceIcon}/>
      <p>Mobile TopUp</p>
    </div>
  )
}

export default InternetData
