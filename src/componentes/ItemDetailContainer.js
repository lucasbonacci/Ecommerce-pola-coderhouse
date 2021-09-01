import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import './ItemDetailContainer.css'
import { getFirestore } from '../firebase/firebase-data'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() =>{
        setLoading(true)
        const db = getFirestore()
        const itemColecction = db.collection('productos')
        const currentItem = itemColecction.doc(id)

        currentItem.get().then(document =>{
            if(!document.exists){
                console.log('no hay productos')
            } else{
                setProducto({
                    id: document.id, ...document.data()
                })
                setLoading(false)
            }
        })
        
    },[id])

    console.log(producto)
    
    return (
        <div className='loader'>
            {loading? <Loader/> :<ItemDetail
            img={producto.img}
            precio={producto.precio}
            stock={producto.stock}
            key={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            min={producto.min}
            id={producto.id}
            />}
        </div>
)
}

export default ItemDetailContainer
