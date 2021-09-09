import React,{useState} from 'react'
import './css/login.css'
import { useHistory } from 'react-router'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'


const Login = () => {
    const history = useHistory()
    const [creeds, setCreeds] = useState({
        email: '',
        password: ''
    }) 

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const authe = useAuth()

    const onChange = (e) =>{
        const {name,value} = e.target
        setCreeds({
            ...creeds,
            [name]: value
        })
    }

    const handleSubmit = async (e) =>{
        console.log(authe)
        e.preventDefault()
        setLoading(true)
        try{
            await authe.signIn(creeds.email,creeds.password)
            history.push('/')
        } catch (e){
            console.log(e)
            setError(e)
            setLoading(false)
            console.log(error)
        }
    }

    
    return (
        <div className='login'>
            <div className='login__cont'>
                <h2> Logeate</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type='text' value={creeds.email} name='email' onChange={onChange}/>
                    <label>Contraseña</label>
                    <input type='password' value={creeds.password} name='password' onChange={onChange}/>

                    <button className='login__btn' type='submit'> Iniciar Sesion</button>
                </form>
                    <Link to='/register'><button className='login__btn' type='submit' > Crear cuenta</button></Link>
            </div>
        </div>
    )
}

export default Login
