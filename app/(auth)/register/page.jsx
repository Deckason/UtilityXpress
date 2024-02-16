"use client"
import React, { useState } from 'react'
import styles from "../auth.module.css"
import svgIllustrator from "../../../public/assets/svgs/register-illustration.svg"
import Image from 'next/image'
import Link from 'next/link'
import { BiEnvelope, BiLock, BiPhone, BiUser } from 'react-icons/bi'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

// Form Validation with Yup
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';



const page = () => {
    const [passwordVisible, setPasswordVissible] = useState(false)
    const [conpasswordVisible, setConPasswordVissible] = useState(false)

    // Validation schema
    const validatioSchema = yup.object().shape({
        username: yup.string().required("Username is required!"),
        email: yup.string().required("Email is required!").email("Email format is required!"),
        phone: yup.number().required("Mobile number is required!").positive().min(11,"Expected 11 digits for mobile number!").integer().typeError('Number is required!'),
        password: yup.string().required("Password is required!").min(8, "Min of 8 characters required!"),
        confirmPassword: yup.string().required("Confirm password is required!").oneOf([yup.ref("password")], "Password do not match!"),
    })

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(validatioSchema)
    })

    const registerUser = (data)=>{
        console.log(data)
    }
    console.log("err", errors)
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
