"use client"
import React, { useState } from 'react'
import { userStore } from '../store/userStore'

const useLogin = () => {
    const [err, setErr] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const {updateUser} = userStore()

    const login = async(email, password)=>{
        setErr(null)
        setIsLoading(true)
        const requestOptions = {
                method: "POST",
                body: JSON.stringify({email, password}),
                headers: {
                    "Content-type": "application/json",
                }
            }
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, requestOptions)
                const json = await response.json()
                if (!response.ok) {
                    setErr(json.error.includes('ENOTFOUND') ?
                    "Please check your internet connection or try again later.":json.error
                    )
                    setIsLoading(false)
                }
                if (response.ok) {
                    setErr(null)
                    localStorage.setItem("user", JSON.stringify(json))
                    updateUser(json)
                    setIsLoading(false)
                    //   push("/")
                }
            } catch (error) {
                setErr(error instanceof TypeError && error.message === 'Failed to fetch'?
                    "Network error occurred. Please check your internet connection."
                    :error.message
                )
                setIsLoading(false)
            }
}

return {login, isLoading, err}

}

export default useLogin
