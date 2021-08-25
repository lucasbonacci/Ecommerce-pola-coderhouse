import React from 'react'
import './productocarrito.css'


const ProductosCarrito = ({nombre,img,precio}) => {
    
    return (
        <div className='productoscarrito'>
            <p>{nombre}</p>
            <img src={img}/>
            <p>{precio}</p>
        </div>
    )
}

export default ProductosCarrito
