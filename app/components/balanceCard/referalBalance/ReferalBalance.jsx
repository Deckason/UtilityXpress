import React, { useState } from 'react'
import styles from "../balanceCard.module.css"
import referalStyles from "./ReferalBalance.module.css"
import { FaNairaSign } from 'react-icons/fa6'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { MdCallReceived } from 'react-icons/md'

const BalanceCard = () => {
  const [balanceVisible, setBalanceVisible] = useState(true)
  return (
    <div className={`${styles.container} ${referalStyles.container}`}>
      <div className={styles.balance}>
        <h2>Referal Balance</h2>
        <div className={styles.amount}>
          {balanceVisible ? <h3 onClick={()=>setBalanceVisible(prev=>!prev)}><FaNairaSign />5000</h3> :
           <h3 onClick={()=>setBalanceVisible(prev=>!prev)}>****</h3>}
          {!balanceVisible ? 
            <BsEyeSlash onClick={()=>setBalanceVisible(prev=>!prev)}/> : 
            <BsEye onClick={()=>setBalanceVisible(prev=>!prev)}/>
          }
        </div>
      </div>
      <div className={referalStyles.refer_withdraw_btns}>
          <p className={referalStyles.withdrawMoney}> <MdCallReceived /> Withdraw</p>
      </div>
    </div>
  )
}

export default BalanceCard
