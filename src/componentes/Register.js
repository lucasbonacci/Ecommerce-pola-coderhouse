import React from 'react'
import { useForm } from "../hooks/useForm";
import { useAuth } from '../context/AuthContext'
import { useHistory } from "react-router";

const initialForm ={
    name:'',
    email:'',
    password:'',
    confirmpassword:''
}


const validacionForm=(form) =>{
    const error ={}
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    if(!form.name?.trim()){
        error.name = "'nombre' es requerido"
    } else if(!regexName.test(form.name.trim())){
        error.name = "Solo se aceptan letras y espacios"
    } else if(!form.email?.trim()){
        error.email = "'email' es requerido"
    } else if(!regexEmail.test(form.email.trim())){
        error.email = "Tu email es incorrecto"
    } else if(!form.password?.trim()){
        error.password = "'contraseña' es requerido"
    } else if(!regexPassword.test(form.password.trim())){
        error.password = "Debe contener entre 8 y 15 caracteres, al menos una letra mayuscula, al menos una letra miniscula, al menos un digito, no contener espacios en blanco y al menos un caracter especial como *$!@"
    }else if(!form.confirmpassword?.trim()){
        error.confirmpassword = "'confirmar contraseña' es requerido"
    } else if (form.confirmpassword !== form.password){
        error.confirmpassword = 'tus contraseñas no coinciden'
    }
    return error
}


const Register = () => {
    const {form,error,handleChange,handleBlur,handleSubmitRegister} = useForm(initialForm, validacionForm)
    const disabledBoton = Object.keys(error).length ===0
    const authe = useAuth()
    const history = useHistory()

    if(authe.user) history.push('/')

    return (
        <div className='login'>
            <div className='login__cont'>
                <h2>Registrate</h2>
                <form onSubmit={handleSubmitRegister}>
                    <label htmlFor='name'>Nombre y apellido</label>
                    <input 
                        id='name'
                        type='text' 
                        name='name'
                        onBlur={handleBlur}
                        onChange={handleChange} 
                        value={form.name}
                        />
                    {error.name && <p>{error.name}</p>}
                    <label>Email</label>
                    <input
                        id='email'
                        type='text'  
                        name='email' 
                        onBlur={handleBlur}
                        onChange={handleChange} 
                        vale={form.email}
                        />
                    {error.email && <p>{error.email}</p>}
                    <label>Contraseña</label>
                    <input
                        id='password'
                        type='password'  
                        name='password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        vale={form.password} 
                        />
                    {error.password && <p>{error.password}</p>}
                    <label>Confirmar contraseña</label>
                    <input 
                        id='confirmpassword'
                        type='password' 
                        name='confirmpassword'
                        onBlur={handleBlur}
                        onChange={handleChange} 
                        value={form.confirmpassword}
                        />
                    {error.confirmpassword && <p>{error.confirmpassword}</p>}
                    <button className='login__btn' type='submit' disabled={!disabledBoton}>Crear</button>
                    {error?<p>{error.code}</p>: <></>}
                </form>
            </div>
        </div>
    )
}

export default Register
