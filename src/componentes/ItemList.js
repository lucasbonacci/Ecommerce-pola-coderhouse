import React from 'react'
import './css/itemList.css'
import { Link } from "react-router-dom";


const ItemList = ({id,name,img}) => {

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{name?.toUpperCase()}</p>
            </div>
            <img  
            src={img}
            alt={name}
            /> 

            <Link to={`/itemDetail/${id}`}>
            <button className='product__button'>VER PRODUCTO</button>
            </Link>
        </div>
    )
}

export default ItemList