import React from 'react'
import styles from"../../Services.module.css"
import { MdMobileFriendly } from "react-icons/md";

const MobileTopUp = () => {
  return (<>
            <div className={styles.sectionCard}>
                <div className={styles.cardIcon}>
                    <MdMobileFriendly 
                        className={styles.ServicesIcon}
                    />
                </div>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>Mobile Top-Up</h3>
                    <p className={styles.cardBody}>
                    Effortlessly recharge your mobile credit with a quick and secure top-up feature on our platform.
                    </p>
                </div>
            </div>
  </>)
}

export default MobileTopUp