import React from 'react'
import './css/cart.css'
import ProductosCarrito from './ProductosCarrito'
import Total from './Total'
import { useStateValue } from '../context/StateProvider';
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext'

const Cart = () => {
    const [{cart}, dispatch] = useStateValue()
    const authe = useAuth()

    const emptyCart = () =>{
        dispatch({
            type: 'EMPTY_CART',
        })
    }

    let invalidPurchase
    let overboughtProduct

    for(let i=0; i < cart.length;i++){
        if(cart[i].quantity > cart[i].stock){
            invalidPurchase = true
            overboughtProduct = cart[i].name
        } 
    }

    return (
        <div className='cart'>
            {cart.length === 0? 
            <div className='empty__cart'>
                <p>Tu carrito esta vacio </p>
                <Link to='/'><button className="cart__btn"> Ir a comprar </button></Link></div>
            : 
            <>
            <div className='cart__left'>
                <div className='cart__title'>
                    {authe.user? <h2>Las compra de {authe.user.email}</h2>:<h2> Tus compras </h2>}
                    {cart.map(e =>{
                        return <ProductosCarrito
                            key={e.id}
                            name={e.name}
                            img={e.img}
                            price={e.price}
                            id={e.id}
                            quantity={e.quantity}
                        />
                    })}
                <button onClick={emptyCart} className="cart__btn"> vaciar carrito</button>
                </div>
            </div>
            
            <div className='cart__right'>
                <Total/> 
                {!invalidPurchase?<Link to='/checkout'><button disabled={invalidPurchase} className='cart__buy'>COMPRAR</button></Link>:
                <p className='cart__stock'>No puedes pasar al checkout. Estas llevando mas cantidad del stock disponible en el producto <strong>{overboughtProduct?.toUpperCase()}</strong> </p>}
            </div>
            </>}
        </div>
    )
}

export default Cart