import React from 'react'
import './Principal.css'
import polabanner from '../assets/bannermujer.jpg'
import Productos from './Productos'
import listaDeProductos from './ListaDeProductos'

function Principal() {
    return (
        <div className='principal'>
            <div className='principal__container'>
                <img
                className='principal__banner'
                src={polabanner} 
                alt="banner pola"
                />

                <div className='principal__row'> 
                {listaDeProductos.map(e =>{
                    return(
                    <Productos 
                    key={e.id}
                    nombre={e.nombre}
                    precio={e.precio}
                    stock={e.stock}
                    min={e.min} 
                    img={e.img}
                    />
                    )
                })}

                </div>
            </div>
        </div>
    )
}

export default Principal