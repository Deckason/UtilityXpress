"use client"
import React, { useState } from 'react'
import styles from "../auth.module.css"
import svgIllustrator from "../../../public/assets/svgs/register-illustration.svg"
import Image from 'next/image'
import Link from 'next/link'
import { BiEnvelope, BiLock, BiPhone, BiUser } from 'react-icons/bi'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const page = () => {
    const [passwordVisible, setPasswordVissible] = useState(false)
    const [conpasswordVisible, setConPasswordVissible] = useState(false)
  return (
    <div className={styles.container}>
        <div className={styles.formContainer}>
            <div className={styles.illustration}>
                <Image
                    src={svgIllustrator}
                    height={700}
                    width={1000}
                    objectFit='cover'
                    alt='register-illustrator'
                />
            </div>
            <form className={styles.form}>
                <h1>Register</h1>
                <div className={styles.formInputs}>
                    <div className={styles.inputContainer}>
                        <span className={styles.inputIcon}><BiUser /></span>
                        <input type="text" placeholder='Enter Username'/>
                    </div>
                    <div className={styles.inputContainer}>
                        <span className={styles.inputIcon}><BiEnvelope /></span>
                        <input type="email" placeholder='Enter Email'/>
                    </div>
                    <div className={styles.inputContainer}>
                        <span className={styles.inputIcon}><BiPhone /></span>
                        <input type="phone" placeholder='Enter Phone'/>
                    </div>
                    <div className={styles.inputContainer}>
                        <span className={styles.inputIcon}><BiLock /></span>
                        <input type={passwordVisible?"text":"password"} placeholder='Enter Password'/>
                        {passwordVisible && 
                            <span className={styles.passwordVisible} onClick={()=>setPasswordVissible(prev=>!prev)}>
                                <BsEyeSlash />
                            </span>}
                        {!passwordVisible && 
                            <span className={styles.passwordVisible} onClick={()=>setPasswordVissible(prev=>!prev)}>
                                <BsEye />
                            </span>}
                    </div>
                    <div className={styles.inputContainer}>
                        <span className={styles.inputIcon}><BiLock /></span>
                        <input type={conpasswordVisible?"text":"password"} placeholder='Confirm password'/>
                        {conpasswordVisible && 
                            <span className={styles.passwordVisible} onClick={()=>setConPasswordVissible(prev=>!prev)}>
                                    <BsEyeSlash />
                            </span>}
                        {!conpasswordVisible && 
                            <span className={styles.passwordVisible} onClick={()=>setConPasswordVissible(prev=>!prev)}>
                                <BsEye />
                            </span>}
                    </div>
                    <div className={styles.buttonContainer}>
                        <button>Register</button>
                    </div>
                    <small>Already have an Account? <Link href={"/login"}>Login</Link></small>
                </div>
            </form>
        </div>
    </div>
  )
}

export default page
