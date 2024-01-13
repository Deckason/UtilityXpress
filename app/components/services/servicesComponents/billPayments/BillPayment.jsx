import React from 'react'
import styles from"../../Services.module.css"
import { FaMoneyBillTransfer } from "react-icons/fa6";


const BillPayment = () => {
  return (<>
    
            <div className={styles.sectionCard}>
                <div className={styles.cardIcon}>
                    <FaMoneyBillTransfer 
                        className={styles.ServicesIcon}
                    />
                </div>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>Bill Payments</h3>
                    <p className={styles.cardBody}>
                        Simplify your finances with seamless online bill payments on our website.
                    </p>
                </div>
            </div>
  </>)
}

export default BillPayment