import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {taskProductosId} from '../api/Api'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    console.log(typeof id)

    useEffect(() =>{
        setLoading(true)

        taskProductosId(id).then(result => {
            setLoading(false)
            setProducto(result)
            })
    },[id])

    console.log(producto)
    return (
        <div className='loader'>
            {loading && <Loader/>}
            {producto.map(e =>{
                return <ItemDetail producto={e} key={e.id}/>
            })}
        </div>
)
}

export default ItemDetailContainer
