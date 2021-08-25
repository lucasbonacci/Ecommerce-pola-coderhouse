import React from 'react'
import './CheckOut.css'
import ProductosCarrito from './ProductosCarrito'
import Total from './Total'
import { useStateValue } from '../StateProvider';

function CheckOut() {
    const [{carrito}, enviar] = useStateValue()

    return (
        <div className='checkout'>
            <div className='checkout__izquierda'>
                <div className='checkout__titulo'>
                    <h2>Tus compras</h2>
                    {carrito.map(e =>{
                        return <ProductosCarrito
                            key={e.id}
                            nombre={e.nombre}
                            img={e.img}
                            precio={e.precio}
                        />
                    })}
                    <button> vaciar carrito</button>
                </div>

            </div>
            <div className='checkout__derecha'>
                <Total/>
            </div>
        </div>
    )
}

export default CheckOut