import React from 'react'
import './css/total.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../context/StateProvider';
import {quantityTotal, cartTotal} from '../context/Reducer' 

const Total = () => {
    const [{cart}] = useStateValue()

    let quantity = quantityTotal(cart)
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
                value={cartTotal(cart)} 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Total