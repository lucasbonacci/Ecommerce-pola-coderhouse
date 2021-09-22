import { useState } from "react";
import { getFirestore } from '../firebase/firebase-data'
import { Timestamp } from 'firebase/firestore'
import {quantityTotal, cartTotal} from  "../redux/reducers/carritoReducer"; 
import { useHistory } from "react-router";
import { useAuth } from '../context/AuthContext'
import {useSelector, useDispatch} from 'react-redux'
import { emptyCar } from '../redux/actions/carritoActions';




export const useForm =(initialForm, validationForm) => {

    const cart = useSelector(state => state.carritoReducer)
    const dispatch = useDispatch()
    const [orderId, setOrderId] = useState('')
    const [form,setForm] = useState(initialForm)
    const [error, setError] = useState({error: ''})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(false)
    const history = useHistory()
    const authe = useAuth()

    const handleChange = (e) =>{
        const {name,value} = e.target
        setForm({
            ...form,
            [name]:value
        })
    }
    
    const handleBlur = (e) =>{
        handleChange(e)
        setError(validationForm(form))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        handleChange(e)
        setError(validationForm(form))
        
        
        if(Object.keys(error).length === 0){
            setResponse(true)
            setLoading(true)
            const newOrder = {
                buyer:{
                    ...form,
                    date: Timestamp.fromDate(new Date())
                },
                items: cart.cart.map(({id,price,name, quantity}) =>({
                    id,
                    price,
                    name,
                    quantity,
                })),
                total: cartTotal(cart.cart),
                quantityTotal: quantityTotal(cart.cart)
            }
        
            const db = getFirestore()
            const orders = db.collection('orders')
            const batch = db.batch()
        
            orders.add(newOrder).then((response) =>{
                
                cart.cart.forEach((item) => {
                    const docRef = db.collection('productos').doc(item.id)
                    batch.update(docRef, {stock: item.stock - item.quantity})
                });
                
                batch.commit()
                setOrderId(response.id)
                setLoading(false)
                dispatch(emptyCar())
            })
            .catch((error)=> console.log(error))
        } 
    }

    const handleSubmitAuth = (e) =>{
        e.preventDefault()
        handleChange(e)
        setError(validationForm(form))
        
        
        if(Object.keys(error).length === 0){
            setResponse(true)
            setLoading(true)
            const newOrder = {
                buyer:{
                    ...form,
                    nombre: authe.user.displayName,
                    email: authe.user.email,
                    date: Timestamp.fromDate(new Date())
                },
                items: cart.cart.map(({id,price,name, quantity}) =>({
                    id,
                    price,
                    name,
                    quantity,
                })),
                total: cartTotal(cart.cart),
                quantityTotal: quantityTotal(cart.cart)
            }
        
            const db = getFirestore()
            const orders = db.collection('orders')
            const batch = db.batch()
        
            orders.add(newOrder).then((response) =>{
                
                cart.cart.forEach((item) => {
                    const docRef = db.collection('productos').doc(item.id)
                    batch.update(docRef, {stock: item.stock - item.quantity})
                });
                
                batch.commit()
                setOrderId(response.id)
                setLoading(false)
                dispatch(emptyCar())
            })
            .catch((error)=> console.log(error))
        }
    }

    const handleSubmitLogin = async (e) =>{
        e.preventDefault()
        try{
            await authe.signIn(form.email,form.password)
            history.push('/')
        } catch (e){
            setError(e)
        }
    }

    const handleSubmitRegister = async (e)=>{
        e.preventDefault()
        try{
            await authe.register(form.email, form.password,form.name)
            history.push('/')
            window.location.reload()
        } catch(e){
            setError(e)
        }
        
    }

    return {
        form,
        error,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
        orderId,
        handleSubmitRegister,
        handleSubmitLogin,
        handleSubmitAuth
    }
}


