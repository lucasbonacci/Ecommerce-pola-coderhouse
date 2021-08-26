import React from 'react'
import './productocarrito.css'
import { useStateValue } from '../StateProvider'

const ProductosCarrito = ({nombre,img,precio,id}) => {
    
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
                <p className='productoscarrito__nombre'>{nombre}</p>
                <p className='productoscarrito__price'>
                    <small>$</small>
                    <strong>{precio}</strong>
                </p>
                <button onClick={eliminarDelCarrito}>Eliminar del carrito</button>
            </div>
        </div>
    )
}

export default ProductosCarrito
