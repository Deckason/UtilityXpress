"use client"
import React, { useState } from 'react'
import styles from "./transactionStyles.module.css"
import { FaExpand, FaNairaSign } from 'react-icons/fa6'
import { MdCallReceived } from 'react-icons/md'

const TransactionHistory = () => {

    const [expand, setExpand] = useState(false)

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h3>Transaction History</h3>
            <div className={styles.filters}>
                <select className={styles.selectDropDown}>
                    <option value="" hidden>Filter By</option>
                    <option value="">date</option>
                    <option value="">type</option>
                </select>
            </div>
        </div>
        <div className={styles.table}>
            <div className={styles.tableHead}>
                <div className={styles.row}>
                    <p className={styles.caption}>Transaction Type</p>
                    <p className={styles.caption}>Amount</p>
                    <p className={styles.caption}>Transaction Date & Time</p>
                    <p className={styles.caption}>Status</p>
                </div>
            </div>
            <div className={styles.tableBody}>
                <div className={`${styles.row} ${styles.bodyRow}`}>
                    <div className={`${expand ? styles.dataColum : styles.dataRow}`}>
                        <p className={styles.transactionDetail}>{expand && <b className={`${styles.caption}`}>Withdraw: </b>}<MdCallReceived /> Withdraw</p>
                        <p className={styles.transactionDetail}>{expand && <b className={`${styles.caption}`}>Amount: </b>}<FaNairaSign />500</p>
                        <p className={styles.transactionDetail}>{expand && <b className={`${styles.caption}`}>Transaction Date & Time: </b>}9:am 20th may 2023</p>
                        <p className={styles.transactionDetail}>{expand && <b className={`${styles.caption}`}>Status: </b>}Successful</p>
                    </div>
                    <span className={styles.expandable} onClick={()=>setExpand(prev=>!prev)}>
                        <FaExpand className={styles.expandIcon}/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TransactionHistory