import React from 'react'
import styles from "./Footer.module.css"
import Link from 'next/link';
import { FiPhoneCall } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';


const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.products}>
          <h3>Products</h3>
          <Link href={"/"} >Bill Payments</Link>
          <Link href={"/"} >Mobile Recharge</Link>
          <Link href={"/"} >DTH</Link>
          <Link href={"/"} >Credit Card Payments</Link>
          <Link href={"/"} >Subscription Services</Link>
          <Link href={"/"} >School and College Fees</Link>
        </div>

        <div className={styles.links}>
          <h3>Useful Links</h3>
          <Link href={"/"} >Overview</Link>
          <Link href={"/"} >Home</Link>
          <Link href={"/"} >About</Link>
          <Link href={"/"} >Contact</Link>
        </div>

        <div className={styles.contacts}>
          <h3>Contact</h3>
          <Link href={"/"} >
            <FiPhoneCall /> <p>+2348156604241</p>
          </Link>
          <Link href={"/"} >
          <GoMail /> <p>utilityXpress@gmail.com</p>
          </Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <small>&copy; utilityXpress {currentYear}</small>
      </div>
    </div>
  )
}

export default Footer