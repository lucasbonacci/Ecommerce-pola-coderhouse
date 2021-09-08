import React,{useState} from 'react'
import './css/login.css'
import { getFireauth } from '../firebase/firebase-data'
import { useHistory } from 'react-router'

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    const auth = getFireauth ()

    const singIn = e =>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error => console.log(error))
    }

    const register = e  =>{
        e.preventDefault()
        
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth =>{
            console.log(auth)
            if (auth){ 
                history.push('/') 
            }
        })
        .catch(error => alert(error))
    }
    return (
        <div className='login'>
            <div className='login__cont'>
                <h2> Logeate</h2>
                <form>
                    <label>Email</label>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <label>Contraseña</label>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button className='login__btn' type='submit' onClick={singIn}> Iniciar Sesion</button>
                </form>
                    <button className='login__btn' type='submit' onClick={register}> Crear cuenta</button>
            </div>
        </div>
    )
}

export default Login
