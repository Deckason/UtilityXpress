"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./transactionStyles.module.css"
import { FaExpand, FaNairaSign } from 'react-icons/fa6'
import { MdCallReceived } from 'react-icons/md'
import { BiExpand, BiExpandAlt, BiExpandVertical } from 'react-icons/bi'

const TransactionHistory = () => {

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
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr>
                    <th className={styles.caption}>Transaction Type</th>
                    <th className={styles.caption}>Amount</th>
                    <th className={styles.caption}>Transaction Date & Time</th>
                    <th className={styles.caption}>Status</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <span className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </span>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    <tr>
                        <td className={`${styles.transactionDetail} ${styles.transactionType}`}><MdCallReceived /> Withdraw</td>
                        <td className={`${styles.transactionDetail} ${styles.amount}`}><FaNairaSign />500</td>
                        <td className={styles.transactionDetail}>9:am 20th may 2023</td>
                        <td className={styles.transactionDetail}>Successful</td>
                        <div className={styles.expandable}>
                            <FaExpand className={styles.expandIcon}/>
                        </div>
                    </tr>
                    
            </tbody>
        </table>
    </div>
  )
}

export default TransactionHistory
