import React from 'react'
import './css/productocarrito.css'
import { useStateValue } from '../context/StateProvider'

const ProductosCarrito = ({name,img,price,id, quantity}) => {
    
    const [,dispatch] = useStateValue()

    const removeFromCart=()=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            id:id,
            
        })
    }

    return (
        <div className='productoscarrito'>
            <img className='productoscarrito__img' src={img} alt={name}/>
            <div className='productoscarrito__info'>
                <p className='productoscarrito__nombre'>{name?.toUpperCase()}</p>
                <p className='productoscarrito__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                    {quantity ===1? <p>haz comprado una unidad de este producto </p>: <p>haz comprado <strong>{quantity}</strong> unidades de este producto</p>}
                </p>
                <button onClick={removeFromCart}>Eliminar del carrito</button>
            </div>
        </div>
    )
} 

export default ProductosCarrito
