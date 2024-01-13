import React from 'react'
import styles from "./Services.module.css"
import BillPayment from './servicesComponents/billPayments/BillPayment'
import MobileTopUp from './servicesComponents/mobileTopUp/MobileTopUp'
import DhtRecharge from './servicesComponents/dhtRecharge/DhtRecharge'
import InternetData from './servicesComponents/internetData/InternetData'
import AcademicBills from './servicesComponents/academicBills/AcademicBills'
import Donations from './servicesComponents/donations/Donations'


const Services = () => {
  return (
    <div className={styles.container}>
        <div className={styles.sectionHeader}>
            <h1><span>O</span>ur <span>S</span>ervices</h1>
        </div>
        <div className={styles.sectionContent}>
          <MobileTopUp />
          <InternetData />
          <BillPayment />
          <DhtRecharge />
        <AcademicBills />
        <Donations />
        </div>
    </div>
  )
}

export default Services