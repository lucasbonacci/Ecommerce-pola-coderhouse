import React from 'react'
import './css/total.css'
import CurrencyFormat from 'react-currency-format'
import {useSelector} from 'react-redux'
import {quantityTotal, cartTotal} from  "../redux/reducers/carritoReducer";

const Total = () => {
    const cart = useSelector(state => state.carritoReducer)

    let quantity = quantityTotal(cart.cart)
    return (
        <div className='total'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Total ({quantity} productos): <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={cartTotal(cart.cart)} 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Total