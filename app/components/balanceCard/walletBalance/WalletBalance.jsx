import React, { useState } from 'react'
import styles from "../balanceCard.module.css"
import walletStyles from "./WalletBalance.module.css"
import { FaNairaSign } from 'react-icons/fa6'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { IoAdd } from 'react-icons/io5'

const BalanceCard = () => {
  const [balanceVisible, setBalanceVisible] = useState(true)
  return (
    <div className={`${styles.container} ${walletStyles.container}`}>
      <div className={styles.balance}>
        <h2>Wallet Balance</h2>
        <div className={styles.amount}>
          {balanceVisible ? <h3 onClick={()=>setBalanceVisible(prev=>!prev)}><FaNairaSign />5000</h3> :
           <h3 onClick={()=>setBalanceVisible(prev=>!prev)}>****</h3>}
          {!balanceVisible ? 
            <BsEyeSlash onClick={()=>setBalanceVisible(prev=>!prev)}/> : 
            <BsEye onClick={()=>setBalanceVisible(prev=>!prev)}/>
          }
        </div>
      </div>
      <div className={walletStyles.add_withdraw_btns}>
          <p className={walletStyles.addMoney}> <IoAdd /> Add money</p>
      </div>
    </div>
  )
}

export default BalanceCard
