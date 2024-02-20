import React from 'react'
import * as yup from "yup"

const loginSchema = yup.object().shape({
    email: yup.string().required("Email is required!").email("Email format is required!"),
    password: yup.string().required("Password is required!"),
    })

    export default loginSchema