import React from 'react'
import { useAuth } from '../context/AuthContext'
import FormCheckOut from './FormCheckOut'
import FormCheckOutAuth from './FormCheckOutAuth'

const CheckOut = () => {
    const authe = useAuth()
    return (
        <>
            {authe.user? <FormCheckOutAuth/>: <FormCheckOut/> }
        </>
    )
}

export default CheckOut
