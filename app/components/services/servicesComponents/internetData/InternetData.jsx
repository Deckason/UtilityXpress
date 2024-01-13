import React from 'react'
import styles from"../../Services.module.css"
import { IoMdWifi } from "react-icons/io";

const InternetData = () => {
  return (
    <>
        <div className={styles.sectionCard}>
            <div className={styles.cardIcon}>
                <IoMdWifi 
                    className={styles.ServicesIcon}
                />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Internet Data</h3>
                <p className={styles.cardBody}>
                Subscribe seamlessly to our cheap, high-speed internet plans. 
                Fast, reliable connectivity is just a click away.
                </p>
            </div>
        </div>
    </>
  )
}

export default InternetData