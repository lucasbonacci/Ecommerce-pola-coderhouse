import React, {useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import './css/itemDetailContainer.css'
import { useSelector,useDispatch } from 'react-redux'
import {getUniqueProduct} from '../redux/actions/productosAction'

const ItemDetailContainer = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productosReducer)
    const {catId} = useParams()

    const { loading, productos} = products


    useEffect(() =>{
        dispatch(getUniqueProduct(catId))
    },[catId])

    return (
        <main>
        {productos !== 'notexists'? 
        <div className='product__exists'>
            {loading? <Loader/> :
            <ItemDetail
                img={productos.img}
                price={productos.price}
                stock={productos.stock}
                key={productos.id}
                name={productos.name}
                description={productos.description}
                id={productos.id}
            />}
        </div>:
        <p className='product__notexists'>El producto no existe</p>}
        </main>
)
}

export default ItemDetailContainer
