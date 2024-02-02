import React from 'react'
import styles from "./whyUtilityXpress.module.css"
import { BsFillShieldLockFill } from 'react-icons/bs';
import { RiGlobalFill } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdSupportAgent } from 'react-icons/md';
import { PiArrowsClockwiseBold } from 'react-icons/pi';


const whyUtilityXpress = () => {
  return (
    <section className={styles.container}>
        <div className={styles.sectionHeader}>
            <h1><span>W</span>hy <span>U</span>tilityXpress</h1>
        </div>
        <div className={styles.sectionContent}>
            <div className={styles.card}>
                <BsFillShieldLockFill className={styles.icon}/>
                <h2>Security</h2>
                <p>Your card is our priority - trust in a safe online experience with us.</p>
            </div>
            <div className={styles.card}>
                <RiGlobalFill className={styles.icon}/>
                <h2>Global Services</h2>
                <p>Discover global excellence with our world-class services.</p>
            </div>
            <div className={styles.card}>
                <GiReceiveMoney className={styles.icon}/>
                <h2>Good Price</h2>
                <p>Quality meets affordability with our unbeatable prices.</p>
            </div>
            <div className={styles.card}>
                <MdSupportAgent className={styles.icon}/>
                <h2>Customer Support</h2>
                <p>Exceptional customer support, here for you every step of the way.</p>
            </div>
            <div className={styles.card}>
                <PiArrowsClockwiseBold className={styles.icon}/>
                <h2>Refer and Earn</h2>
                <p>Earn rewards by referring friends – sharing benefits, spreading joy.</p>
            </div>
        </div>
    </section>
  )
}

export default whyUtilityXpress