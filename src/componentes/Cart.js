import React from 'react'
import './css/carrito.css'
import ProductosCarrito from './ProductosCarrito'
import Total from './Total'
import { useStateValue } from '../context/StateProvider';
import { Link } from "react-router-dom";

function Cart() {
    const [{carrito}, dispatch] = useStateValue()

    const vaciarCarrito = () =>{
        dispatch({
            type: 'vaciarCarrito',
        })
    }

    return (
        <div className='carrito'>
            {carrito.length === 0? <div className='carrito__vacio'><p>Tu carrito esta vacio </p> <Link to='/'><button className="carrito__btn"> Ir a comprar </button></Link></div> : <></>}
            {carrito.length ===0? <></>:
            <div className='carrito__izquierda'>
                <div className='carrito__titulo'>
                    <h2> tus compras </h2>
                    {carrito.map(e =>{
                        return <ProductosCarrito
                            key={e.id}
                            nombre={e.nombre}
                            img={e.img}
                            precio={e.precio}
                            id={e.id}
                            quantity={e.quantity}
                        />
                    })}
                <button onClick={vaciarCarrito} className="carrito__btn"> vaciar carrito</button>
                </div>
            </div>}
            
            {carrito.length ===0? <></>: <div className='carrito__derecha'>
                <Total/> 
                </div>}
        </div>
    )
}

export default Cart