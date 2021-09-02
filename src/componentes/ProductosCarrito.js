import React from 'react'
import './css/productocarrito.css'
import { useStateValue } from '../context/StateProvider'

const ProductosCarrito = ({nombre,img,precio,id, quantity}) => {
    
    const [,dispatch] = useStateValue()

    const eliminarDelCarrito=()=>{
        dispatch({
            type:'eliminarDelCarrito',
            id:id,
            
        })
    }

    return (
        <div className='productoscarrito'>
            <img className='productoscarrito__img' src={img} alt={nombre}/>
            <div className='productoscarrito__info'>
                <p className='productoscarrito__nombre'>{nombre.toUpperCase()}</p>
                <p className='productoscarrito__price'>
                    <small>$</small>
                    <strong>{precio}</strong>
                    {quantity ===1? <p>haz comprado una unidad de este producto </p>: <p>haz comprado <strong>{quantity}</strong> unidades de este producto</p>}
                </p>
                <button onClick={eliminarDelCarrito}>Eliminar del carrito</button>
            </div>
        </div>
    )
} 

export default ProductosCarrito
