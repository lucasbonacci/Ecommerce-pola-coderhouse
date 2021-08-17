import React from 'react'
import './CheckOut.css'


function CheckOut() {
    return (
        <div className='checkout'>
            <div className='checkout__izquierda'>
                <div className='checkout__titulo'>
                    <h2>Tus Compras</h2>
                </div>

            </div>
            <div className='checkout__derecha'>
                <p>total gastado</p>
            </div>
        </div>
    )
}

export default CheckOut