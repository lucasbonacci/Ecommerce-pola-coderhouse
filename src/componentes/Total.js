import React from 'react'
import './Total.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider';
import { carritoTotal } from '../Reducer';
import {quantityTotal} from '../Reducer' 

function Total() {
    const [{carrito}, enviar] = useStateValue()

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