import { useState } from "react";
import {useStateValue} from '../context/StateProvider'
import { getFirestore } from '../firebase/firebase-data'
import { Timestamp } from 'firebase/firestore'
import {quantityTotal,carritoTotal} from '../context/Reducer' 



export const useForm =(initialForm, validacionForm) => {

    const [{carrito}, enviar] = useStateValue()
    const [orderId, setOrderId] = useState('')
    const [form,setForm] = useState(initialForm)
    const [error, setError] = useState({error: ''})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(false)

    const handleChange = (e) =>{
        const {name,value} = e.target
        setForm({
            ...form,
            [name]:value
        })
    }
    
    const handleBlur = (e) =>{
        handleChange(e)
        setError(validacionForm(form))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        handleChange(e)
        setError(validacionForm(form))
        
        
        if(Object.keys(error).length === 0){
            setResponse(true)
            setLoading(true)
            const newOrder = {
                buyer:{
                    ...form,
                    date: Timestamp.fromDate(new Date())
                },
                items: carrito.map(({id,precio,nombre, quantity}) =>({
                    id,
                    precio,
                    nombre,
                    quantity,
                })),
                total: carritoTotal(carrito),
                quantityTotal: quantityTotal(carrito)
            }
        
            const db = getFirestore()
            const orders = db.collection('orders')
            const batch = db.batch()
        
            orders.add(newOrder).then((response) =>{
                console.log(response)
                
                carrito.forEach((item) => {
                    const docRef = db.collection('productos').doc(item.id)
                    batch.update(docRef, {stock: item.stock - item.quantity})
                    console.log(item)
                });
                
                batch.commit()
                setOrderId(response.id)
                setLoading(false)
                enviar({
                    type: 'vaciarCarrito',
                })
            })
            .catch((error)=> console.log(error))
        } else{
            alert('Completa el formulario')
            return
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
    }

}


