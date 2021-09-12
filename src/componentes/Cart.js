import React from 'react'
import './css/carrito.css'
import ProductosCarrito from './ProductosCarrito'
import Total from './Total'
import { useStateValue } from '../context/StateProvider';
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext'

const Cart = () => {
    const [{carrito}, enviar] = useStateValue()
    const authe = useAuth()

    const vaciarCarrito = () =>{
        enviar({
            type: 'vaciarCarrito',
        })
    }

    let compraInvalida
    let productoPasado

    for(let i=0; i < carrito.length;i++){
        if(carrito[i].quantity > carrito[i].stock){
            compraInvalida = true
            productoPasado = carrito[i].nombre
        } 
    }

    return (
        <div className='carrito'>
            {carrito.length === 0? 
            <div className='carrito__vacio'>
                <p>Tu carrito esta vacio </p>
                <Link to='/'><button className="carrito__btn"> Ir a comprar </button></Link></div>
            : 
            <>
            <div className='carrito__izquierda'>
                <div className='carrito__titulo'>
                    {authe.user? <h2>Las compra de {authe.user.email}  </h2> :<h2> Tus compras </h2>}
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
            </div>
            
            <div className='carrito__derecha'>
                <Total/> 
                {!compraInvalida?<Link to='/checkout'><button disabled={compraInvalida} className='carrito__comprar'>COMPRAR</button></Link>:
                <p className='carrito__stock'>No puedes pasar al checkout. Estas llevando mas cantidad del stock disponible en el producto <strong>{productoPasado.toUpperCase()}</strong> </p>}
            </div>
            </>}
        </div>
    )
}

export default Cart