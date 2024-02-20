"use client"
import React, { useState } from 'react'
import { userStore } from '../store/userStore'

const useSignUp = () => {
    const [err, setErr] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const {updateUser} = userStore()

    const signup = async(username, email, phone, password, confirmPassword)=>{
        setIsLoading(true)
        setErr(null)
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({username, email, phone, password, confirmPassword}),
            headers: {
                "Content-type": "application/json",
            }
        }

            try {
                const response = await fetch("http://localhost:4000/auth/register", requestOptions)
                const json = await response.json()
                if(!response.ok){
                    setErr(json.error.includes('ENOTFOUND') ?
                        "Please check your internet connection or try again later.":json.error
                    )
                    setIsLoading(false)
                    console.log(json.error)
                }
                if (response.ok) {
                    setErr(null)
                    console.log(json)
                    localStorage.setItem("user", JSON.stringify(json))
                    updateUser(json)
                    setIsLoading(false)
                    // push("/dashboard")
                }
            } catch (error) {
                setErr(error instanceof TypeError && error.message === 'Failed to fetch'?
                    "Network error occurred. Please check your internet connection."
                    :error.message
                )
                setIsLoading(false)
            }
    }

  return {isLoading, err, signup}
}

export default useSignUp