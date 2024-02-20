import React from 'react'
import * as yup from "yup"

// Validation schema
const signUpSchema = yup.object().shape({
    username: yup.string().required("Username is required!"),
    email: yup.string().required("Email is required!").email("Email format is required!"),
    phone: yup.number().required("Mobile number is required!").positive().min(11,"Expected 11 digits for mobile number!").integer().typeError('Number is required!'),
    password: yup.string().required("Password is required!").min(8, "Min of 8 characters required!")
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
    confirmPassword: yup.string().required("Confirm password is required!").oneOf([yup.ref("password")], "Password do not match!"),
})

export default signUpSchema