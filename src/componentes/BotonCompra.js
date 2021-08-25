import React from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

const BotonCompra = () => {
    return (
        <div className='botoncompra'>
            <Link to='/carrito'><button>Finalizar Compra</button></Link>
            <Link to='/'><button>Seguir Comprando</button></Link>
        </div>
    )
}

export default BotonCompra
