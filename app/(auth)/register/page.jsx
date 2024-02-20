"use client"
import React, { useState } from 'react'
import styles from "../auth.module.css"
import svgIllustrator from "../../../public/assets/svgs/register-illustration.svg"
import Image from 'next/image'
import Link from 'next/link'
import { BiEnvelope, BiLock, BiPhone, BiUser } from 'react-icons/bi'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import Loading from "../../components/loading/Loading"

// Form Validation with Yup
import signUpSchema from "../validationSchema/signUpSchema"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import useSignUp from '@/app/hooks/useSignUp'



const page = () => {
    const [passwordVisible, setPasswordVissible] = useState(false)
    const [conpasswordVisible, setConPasswordVissible] = useState(false)

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(signUpSchema)
    })

    const {isLoading, err, signup} = useSignUp()

    const registerUser = async(data)=>{
        const {username, email, phone, password, confirmPassword} = data
        await signup(username, email, phone, password, confirmPassword)
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
            <form className={styles.form} onSubmit={handleSubmit(registerUser)}>
                <h1>Register</h1>
                <p className={`${styles.err} ${styles.serverErr}`}>{err && err}</p>
                <div className={styles.formInputs}>
                    <div className={styles.inputSection}>
                        <div className={styles.inputContainer}>
                            <span className={styles.inputIcon}><BiUser /></span>
                            <input type="text" placeholder='Enter Username' {...register("username")}/>
                        </div>
                        <small className={styles.err}>{errors.username?.message}</small>
                    </div>
                    <div className={styles.inputSection}>
                        <div className={styles.inputContainer}>
                            <span className={styles.inputIcon}><BiEnvelope /></span>
                            <input type="email" placeholder='Enter Email' {...register("email")}/>
                        </div>
                        <small className={styles.err}>{errors.email?.message}</small>
                    </div>
                    <div className={styles.inputSection}>
                        <div className={styles.inputContainer}>
                            <span className={styles.inputIcon}><BiPhone /></span>
                            <input type={'number'} placeholder='Enter Phone' {...register("phone")}/>
                        </div>
                        <small className={styles.err}>{errors.phone?.message}</small>
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
                    <div className={styles.inputSection}>
                        <div className={styles.inputContainer}>
                            <span className={styles.inputIcon}><BiLock /></span>
                            <input type={conpasswordVisible?"text":"password"} placeholder='Confirm password' {...register("confirmPassword")}/>
                            {conpasswordVisible && 
                                <span className={styles.passwordVisible} onClick={()=>setConPasswordVissible(prev=>!prev)}>
                                        <BsEyeSlash />
                                </span>}
                            {!conpasswordVisible && 
                                <span className={styles.passwordVisible} onClick={()=>setConPasswordVissible(prev=>!prev)}>
                                    <BsEye />
                                </span>}
                        </div>
                        <small className={styles.err}>{errors.confirmPassword?.message}</small>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button>{isLoading?<Loading />:"Register"}</button>
                    </div>
                    <small>Already have an Account? <Link href={"/login"}>Login</Link></small>
                </div>
            </form>
        </div>
    </div>
  )
}

export default page
