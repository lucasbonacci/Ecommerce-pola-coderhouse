import React from 'react'
import './css/itemList.css'
import { Link } from "react-router-dom";


const ItemList = ({id,nombre,img}) => {

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

export default ItemList