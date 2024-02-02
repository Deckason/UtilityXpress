import React from 'react'
import styles from"../../Services.module.css"
import { LiaSchoolSolid } from 'react-icons/lia'

const AcademicBills = () => {
  return (
    <>
        <div className={styles.sectionCard}>
            <div className={styles.cardIcon}>
                <LiaSchoolSolid 
                    className={styles.ServicesIcon}
                />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>School and College Fees</h3>
                <p className={styles.cardBody}>
                Simplify school payments online. Easily manage and pay for tuition, fees, 
                and related expenses through our secure platform.
                </p>
            </div>
        </div>
    </>
  )
}

export default AcademicBills