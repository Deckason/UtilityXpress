import React from 'react'
import styles from "./BillServices.module.css"
import InternetService from "./services/InternetService"
import TopUpServices from "./services/TopUpServices"
import BillPaymentService from "./services/BillPaymentService"
import DhtService from "./services/DhtService"
import AcademicService from "./services/AcademicService"
import DonationService from "./services/DonationService"

const BillServices = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.servicesHeader}>Bill Services</h3>
      <div className={styles.servicesContainer}>
        <TopUpServices />
        <InternetService />
        <BillPaymentService />
        <DhtService />
        <AcademicService />
        <DonationService />
      </div>
    </div>
  )
}

export default BillServices
