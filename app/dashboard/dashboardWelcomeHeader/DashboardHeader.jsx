"use client"
import React from 'react'
import styles from "./DashboardHeader.module.css"
import { MdMenu } from 'react-icons/md'
import { FaSmile } from 'react-icons/fa'
import Profile from '@/app/components/profile/Profile'
import { IoNotificationsOutline } from 'react-icons/io5'
import { userStore } from './../../store/userStore';

const Header = () => {
  const {updateMenuVisible, menuVisible} = userStore()

  return (
    <>
      <div className={styles.openMenu}>
        <MdMenu onClick={()=>updateMenuVisible(!menuVisible)}/>
        </div>
        <div className={styles.welcomeText}>
        <h1>Hello Michael <FaSmile className={styles.smileIcon}/></h1>
        <p>What transaction are you doing today?</p>
        </div>
        <div className={styles.userProfile}>
        <Profile />
        <div className={styles.notificationIconContainer}>
            <span className={styles.notificationIconIndicator}></span>
            <IoNotificationsOutline className={styles.notificationIcon}/>
        </div>
        </div>
    </>
  )
}

export default Header
