import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import './css/itemDetailContainer.css'
import { getFirestore } from '../firebase/firebase-data'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(false)
    const {catId} = useParams()

    const {img,precio,stock,nombre,descripcion,id} = producto 

    useEffect(() =>{
        setLoading(true)
        const db = getFirestore()
        const itemColecction = db.collection('productos')
        const currentItem = itemColecction.doc(catId)

        currentItem.get().then(document =>{
            if(!document.exists){
                setProducto('noexiste')
                setLoading(false)
            } else{
                setProducto({
                    id: document.id, ...document.data()
                })
                setLoading(false)
            }
        })
        
    },[catId])

    return (
        <>
        {producto !== 'noexiste'? 
        <div className='producto__existe'>
            {loading? <Loader/> :
            <ItemDetail
                img={img}
                precio={precio}
                stock={stock}
                key={id}
                nombre={nombre}
                descripcion={descripcion}
                id={id}
            />}
        </div>:
        <p className='producto__noexiste'>El producto no existe</p>}
        </>
)
}

export default ItemDetailContainer
