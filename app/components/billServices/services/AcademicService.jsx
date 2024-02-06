import React from 'react'
import styles from "./services.module.css"
import { LiaSchoolSolid } from 'react-icons/lia'

const InternetData = () => {
  return (
    <div className={styles.serviceContainer}>
      <LiaSchoolSolid className={styles.ServiceIcon}/>
      <p>Academic Bils</p>
    </div>
  )
}

export default InternetData
