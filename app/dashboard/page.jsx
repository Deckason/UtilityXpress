"use client"
import React from 'react'
import styles from "./dashboard.module.css"
import Aside from '../components/asideBar/Aside'
import DashboardHeader from "./dashboardWelcomeHeader/DashboardHeader"
import { IoMdClose } from 'react-icons/io'
import { userStore } from '../store/userStore'

const page = () => {
  const {updateMenuVisible, menuVisible} = userStore()

  return (
    <div className={styles.container} >
      <div className={`${styles.asideContainer} ${menuVisible && styles.menuVisible}`}>
        <IoMdClose className={styles.closeMenu} onClick={()=>updateMenuVisible(!menuVisible)}/>
        <Aside />
      </div>
      <div className={styles.mainContainer} onClick={()=>menuVisible && updateMenuVisible(false)}>
        <div className={styles.profileDetails}>
          <DashboardHeader setmenuVisible={menuVisible}/>
        </div>
        <div className={styles.content}>
          
        </div>
      </div>
    </div>
  )
}

export default page