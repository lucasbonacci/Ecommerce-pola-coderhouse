import React from 'react'
import './productocarrito.css'
import { useStateValue } from '../StateProvider'

const ProductosCarrito = ({nombre,img,precio,id, quantity}) => {
    
    const [{carrito}, dispatch] = useStateValue()

    const eliminarDelCarrito=()=>{
        dispatch({
            type:'eliminarDelCarrito',
            id:id,
            
        },console.log(id))
    }

    return (
        <div className='productoscarrito'>
            <img className='productoscarrito__img' src={img}/>
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
