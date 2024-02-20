"use client"
import React, { useState } from 'react'
// import { New_Tegomin, Ubuntu, } from 'next/font/google'
import styles from "./Nav.module.css"
import Link from 'next/link';
import { SlSocialFacebook } from 'react-icons/sl';
import { FaWhatsapp } from 'react-icons/fa6';
import { GoMail } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { MdMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import Profile from '../profile/Profile';


// const ubuntu = Ubuntu({ weight: ["300"], subsets: ['latin'], })

// const new_Tegomin = New_Tegomin({ weight: ["400"], style: ["normal"], subsets: ['latin'], })

const Nav = () => {
    const [menuVisible, setmenuVisible] = useState(false)
  return (
    <nav className={styles.nav}>
      <div className={styles.topNav}>
        <div className={styles.topSocialsContainer}>
            <Link href={"/"}><SlSocialFacebook size={20} color={"#fff"}/></Link>
            <Link href={"/"}><FaWhatsapp size={20} color={"#fff"}/></Link>
            <Link href={"/"}><GoMail size={20} color={"#fff"}/></Link>
            <Link href={"/"}><FiPhoneCall size={20} color={"#fff"}/></Link>
        </div>
        <div className={styles.topLoginRegisterContainer}>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
            {/* <Link href={"/"} style={{color: "orange"}}>Logout</Link> */}
        </div>
      </div>
      <div className={styles.lowerNav}>
        <div className={styles.logoContainer}>
            <Link href={"/"}>UtilityXpress</Link>
        </div>

        {/* ----------------------- SMALL SCREEN BURGER MENU TOGGLE ------------------ */}
        {!menuVisible && <MdMenu onClick={()=>setmenuVisible(prev=>!prev)} className={styles.openMenu}/>}

        <div className={`${styles.linksContainer} ${menuVisible && styles.menuVisible}`}>
            {menuVisible && <IoMdClose
                className={styles.closeMenu}
                onClick={()=>setmenuVisible(prev=>!prev)}
            />}
            <div className={styles.links}>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
                <Link href={"/dashboard"}>Dashboard</Link>
            </div>
            <Profile />
        </div>
      </div>
    </nav>
  )
}

export default Nav
