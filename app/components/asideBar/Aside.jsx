import React from 'react'
import styles from "./aside.module.css"
import Link from 'next/link'
import { IoHomeOutline, IoLogOutOutline } from 'react-icons/io5';
import { MdMobileFriendly } from 'react-icons/md';
import { IoMdWifi } from 'react-icons/io';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { FaSatelliteDish } from 'react-icons/fa';
import { LiaSchoolSolid } from 'react-icons/lia';
import { BiSolidDonateHeart } from 'react-icons/bi';

const Aside = () => {
  return (
    <div className={styles.aside}>
      <div className={styles.logoContainer}>
        <h1>UtilityXpress</h1>
      </div>
      <div className={styles.navContainer}>
        <Link href={"/"}><IoHomeOutline className={styles.ServicesIcon} /> <span>Home</span></Link>
        <Link href={"/"}><MdMobileFriendly className={styles.ServicesIcon} /> <span>Mobile Top-Up</span></Link>
        <Link href={"/"}><IoMdWifi className={styles.ServicesIcon} /> <span>Internet Data</span></Link>
        <Link href={"/"}><FaMoneyBillTransfer className={styles.ServicesIcon} /> <span>Bill Payments</span></Link>
        <Link href={"/"}><FaSatelliteDish className={styles.ServicesIcon} /> <span>DHT Recharge</span></Link>
        <Link href={"/"}><LiaSchoolSolid className={styles.ServicesIcon} /> <span>Academic Fees</span></Link>
        <Link href={"/"}><BiSolidDonateHeart className={styles.ServicesIcon} /> <span>Donations</span></Link>
      </div>
      <div className={styles.logOutContainer}>
        <Link href={"/"}><IoLogOutOutline className={styles.ServicesIcon} /> <span>Logout</span></Link>
      </div>
    </div>
  )
}

export default Aside
