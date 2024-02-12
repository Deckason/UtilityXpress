"use client"
import React, { useState } from 'react'
import styles from "../auth.module.css"
import Image from 'next/image'
import svgIllustrator from "../../../public/assets/svgs/login-illustration.svg"
import Link from 'next/link'
import { BiLock, BiUser } from 'react-icons/bi'
import { BsEye, BsEyeSlash } from 'react-icons/bs'


const page = () => {
  const [passwordVisible, setPasswordVissible] = useState(false)
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
                <h1>Login</h1>
                <div className={styles.formInputs}>
                    <div className={styles.inputContainer}>
                        <span className={styles.inputIcon}><BiUser /></span>
                        <input type="text" placeholder='Enter Username/email'/>
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
                    <div className={styles.buttonContainer}>
                        <button disabled={true}>Login</button>
                    </div>
                    <small>Don't have an Account? <Link href={"/register"}>Register</Link></small>
                </div>
            </form>
        </div>
    </div>
  )
}

export default page
