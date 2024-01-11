"use client"
import React, { useState } from 'react'
import { New_Tegomin, Ubuntu, } from 'next/font/google'
import styles from "./Nav.module.css"
import { FaWhatsapp, } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { SlSocialFacebook } from "react-icons/sl";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import profile_pic from "../../../public/assets/images/profile_pic.jpg"
import Link from 'next/link';
import Image from 'next/image';

const ubuntu = Ubuntu({ weight: ["300"], subsets: ['latin'], })

const new_Tegomin = New_Tegomin({ weight: ["400"], style: ["normal"], subsets: ['latin'], })

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
        <div className={`${styles.topLoginRegisterContainer} ${new_Tegomin.className}`}>
            <Link href={"/"}>Login</Link>
            <Link href={"/"}>Register</Link>
            {/* <Link href={"/"} style={{color: "orange"}}>Logout</Link> */}
        </div>
      </div>
      <div className={`${styles.lowerNav} ${ubuntu.className}`}>
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
            </div>
            <div className={styles.profile}>
                <Link href={"/profile"} className={styles.imgContainer}>
                    <Image
                        src={profile_pic}
                        width={100}
                        height={100}
                        alt='profile-pic'
                    />
                </Link>
                <small>Username</small>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
