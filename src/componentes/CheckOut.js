import React from 'react'
import './CheckOut.css'
import ProductosCarrito from './ProductosCarrito'
import Total from './Total'
import { useStateValue } from '../StateProvider';
import { Link } from "react-router-dom";

function CheckOut() {
    const [{carrito}, dispatch] = useStateValue()

    const vaciarCarrito = () =>{
        dispatch({
            type: 'vaciarCarrito',
        })
    }

    return (
        <div className='checkout'>
            <div className='checkout__izquierda'>
                <div className='checkout__titulo'>
                    <h2>Tus compras</h2>
                    {carrito.length === 0? <p>Tu carrito esta vacio </p>:
                    carrito.map(e =>{
                        return <ProductosCarrito
                            key={e.id}
                            nombre={e.nombre}
                            img={e.img}
                            precio={e.precio}
                            id={e.id}
                            quantity={e.quantity}
                        />
                    })}
                    {carrito.length ===0? <Link to='/'><button> Ir a comprar </button></Link> :<button onClick={vaciarCarrito}> vaciar carrito</button>}
                </div>

            </div>
            <div className='checkout__derecha'>
                <Total/>
            </div>
        </div>
    )
}

export default CheckOut