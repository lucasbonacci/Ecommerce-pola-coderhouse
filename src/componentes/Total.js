import React from 'react'
import './css/total.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../context/StateProvider';
import { carritoTotal } from '../context/Reducer';
import {quantityTotal} from '../context/Reducer' 

function Total() {
    const [{carrito}] = useStateValue()

    let cantidad = quantityTotal(carrito)
    return (
        <div className='total'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Total ({cantidad} productos): <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={carritoTotal(carrito)} 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button> Comprar </button>
        </div>
    )
}

export default Total