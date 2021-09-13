import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import './css/itemDetailContainer.css'
import { getFirestore } from '../firebase/firebase-data'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const {catId} = useParams()

    const {img,price,stock,name,description,id} = product 

    useEffect(() =>{
        setLoading(true)
        const db = getFirestore()
        const itemColecction = db.collection('productos')
        const currentItem = itemColecction.doc(catId)

        currentItem.get().then(document =>{
            if(!document.exists){
                setProduct('notexists')
                setLoading(false)
            } else{
                setProduct({
                    id: document.id, ...document.data()
                })
                setLoading(false)
            }
        })
        
    },[catId])

    return (
        <>
        {product !== 'notexists'? 
        <div className='product__exists'>
            {loading? <Loader/> :
            <ItemDetail
                img={img}
                price={price}
                stock={stock}
                key={id}
                name={name}
                description={description}
                id={id}
            />}
        </div>:
        <p className='product__notexists'>El producto no existe</p>}
        </>
)
}

export default ItemDetailContainer
