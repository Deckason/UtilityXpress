"use client"
import React, { useState } from 'react'
import styles from "../auth.module.css"
import Image from 'next/image'
import svgIllustrator from "../../../public/assets/svgs/login-illustration.svg"
import Link from 'next/link'
import { BiLock, BiUser } from 'react-icons/bi'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import Loading from "../../components/loading/Loading"

// Form Validation with Yup
import loginSchema from "../validationSchema/loginSchema"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import useLogin from '@/app/hooks/useLogin'


const page = () => {
  const [passwordVisible, setPasswordVissible] = useState(false)
  
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(loginSchema)
    })

    const {login, isLoading, err} = useLogin()

const loginUser = async(data)=>{
    const {email, password} = data
    await login(email, password)
}


  return (
    <div className={styles.container}>
        <div className={styles.formContainer}>
            <div className={styles.illustration}>
                <Image
                    src={svgIllustrator}
                    height={700}
                    width={1000}
                    alt='register-illustrator'
                />
            </div>
            <form className={styles.form} onSubmit={handleSubmit(loginUser)}>
                <h1>Login</h1>
                <p className={`${styles.err} ${styles.serverErr}`}>{err && err}</p>
                <div className={styles.formInputs}>
                    <div className={styles.inputSection}>
                        <div className={styles.inputContainer}>
                            <span className={styles.inputIcon}><BiUser /></span>
                            <input type="text" placeholder='Enter email' {...register("email")}/>
                        </div>
                        <small className={styles.err}>{errors.email?.message}</small>
                    </div>
                    <div className={styles.inputSection}>
                        <div className={styles.inputContainer}>
                            <span className={styles.inputIcon}><BiLock /></span>
                            <input type={passwordVisible?"text":"password"} placeholder='Enter Password' {...register("password")}/>
                            {passwordVisible && 
                                <span className={styles.passwordVisible} onClick={()=>setPasswordVissible(prev=>!prev)}>
                                    <BsEyeSlash />
                                </span>}
                            {!passwordVisible && 
                                <span className={styles.passwordVisible} onClick={()=>setPasswordVissible(prev=>!prev)}>
                                    <BsEye />
                                </span>}
                        </div>
                        <small className={styles.err}>{errors.password?.message}</small>
                    </div>
                    <div className={styles.buttonContainer}>
                    <button disabled={isLoading}>{isLoading?<Loading />:"Login"}</button>
                    </div>
                    <small>Don't have an Account? <Link href={"/register"}>Register</Link></small>
                </div>
            </form>
        </div>
    </div>
  )
}

export default page
