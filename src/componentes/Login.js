import React from 'react'
import './css/login.css'
import { Link } from 'react-router-dom'
import { useForm } from "../hooks/useForm";
import { useAuth } from '../context/AuthContext'
import { useHistory } from "react-router";

const initialForm ={
    email:'',
    password:''
}

const validationForm=(form) =>{
    const error ={}
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/

    if(!form.email?.trim()){
        error.email = "'email' es requerido"
    } else if(!regexEmail.test(form.email.trim())){
        error.email = "Tu email es incorrecto"
    } else if(!form.password?.trim()){
        error.password = "'contraseña' es requerido"
    } 
    return error
}




const Login = () => {
    const {form,error,handleChange,handleBlur,handleSubmitLogin} = useForm(initialForm, validationForm)
    const authe = useAuth()
    const history = useHistory()

    if(authe.user) history.push('/')


    return (
        <main className='login'>
            <div className='login__cont'>
                <h2> Logeate</h2>
                <form onSubmit={handleSubmitLogin}>
                    <label>Email</label>
                    <input 
                        type='text' 
                        value={form.email} 
                        name='email' 
                        onBlur={handleBlur}
                        onChange={handleChange}/>
                    {error.email && <p>{error.email}</p>}
                    <label>Contraseña</label>
                    <input 
                        type='password' 
                        value={form.password} 
                        name='password' 
                        onBlur={handleBlur}
                        onChange={handleChange}/>

                    <button className='login__btn' type='submit' > Iniciar Sesion</button>
                    {error? <p>{error.code}</p>:<></>}
                </form>
                    <Link to='/register'><button className='login__btn' type='submit' > Crear cuenta</button></Link>
            </div>
        </main>
    )
}

export default Login
