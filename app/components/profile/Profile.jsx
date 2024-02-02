import React from 'react'
import styles from "./Profile.module.css"
import Image from 'next/image'
import defaultProfile from "../../../public/assets/images/defaultProfile.jpg"
import Link from 'next/link'

const Profile = () => {
  return (
    <div className={styles.profile}>
        <Link href={"/profile"} className={styles.imgContainer}>
            <Image
                src={defaultProfile}
                width={100}
                height={100}
                alt='profile-pic'
            />
        </Link>
        <small>Username</small>
    </div>
  )
}

export default Profile
