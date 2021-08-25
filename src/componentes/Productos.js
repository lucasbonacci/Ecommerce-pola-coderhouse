import React from 'react'
import './Producto.css'
import { Link } from "react-router-dom";


function Productos({id,nombre, precio, img,stock,min}) {

    return (
        <div className='producto'>
            <div className='producto__info'>
                <p> {nombre.toUpperCase()}</p>
            </div>
            <img 
            src={img}
            alt='Cartera de cuero negra'/> 

            <Link to={`/itemDetail/${id}`}>
            <button className='producto__buttom'>VER PRODUCTO</button>
            </Link>
        </div>
    )
}

export default Productos
