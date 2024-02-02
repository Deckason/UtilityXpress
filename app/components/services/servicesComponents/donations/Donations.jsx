import React from 'react'
import styles from"../../Services.module.css"
import { BiSolidDonateHeart } from 'react-icons/bi'

const Donations = () => {
  return (
    <>
        <div className={styles.sectionCard}>
            <div className={styles.cardIcon}>
                <BiSolidDonateHeart
                    className={styles.ServicesIcon}
                />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Donations</h3>
                <p className={styles.cardBody}>
                Make a difference today. Your generosity fuels our mission. 
                Support us with a donation and help create positive change in the community.
                </p>
            </div>
        </div>
    </>
  )
}

export default Donations