import React from 'react'
import styles from"../../Services.module.css"
import { FaSatelliteDish } from "react-icons/fa";

const DhtRecharge = () => {
  return (
    <>
        <div className={styles.sectionCard}>
            <div className={styles.cardIcon}>
                <FaSatelliteDish 
                    className={styles.ServicesIcon}
                />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>DHT Recharge</h3>
                <p className={styles.cardBody}>
                    Elevate your entertainment with our DTH services—enjoy diverse channels and premium content 
                    delivered straight to your home.
                </p>
            </div>
        </div>
    </>
  )
}

export default DhtRecharge