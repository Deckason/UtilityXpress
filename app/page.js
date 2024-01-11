import React from 'react'
import styles from "./page.module.css"
import LandingPage from './components/landingPage/LandingPage'

const page = () => {
  return (
    <div className={styles.container}>
      <LandingPage />
    </div>
  )
}

export default page
