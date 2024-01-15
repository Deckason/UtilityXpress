import React from 'react'
import styles from "./dashboard.module.css"
import Image from 'next/image'
import Link from 'next/link'
import profile_pic from '../../public/assets/images/profile_pic.jpg'
import { MdSupportAgent } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

const page = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.sectionHeader}>
        <div className={styles.profile}>
            <Link href={"/profile"} className={styles.imgContainer}>
                <Image
                    src={profile_pic}
                    width={100}
                    height={100}
                    alt='profile-pic'
                />
            </Link>
            <h3>Hi, Username</h3>
        </div>
        <div className={styles.notification}>
          <MdSupportAgent className={styles.icon}/>
          <FaRegBell className={styles.icon}/>

        </div>
      </div> */}
      <div className={styles.accountStatus}>

      </div>
      <div className={styles.products}>

      </div>
      <div className={styles.transactionHistory}>

      </div>
    </div>
  )
}

export default page