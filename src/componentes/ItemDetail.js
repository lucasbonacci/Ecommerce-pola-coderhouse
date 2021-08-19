import React, {useState} from 'react'
import './Producto.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ItemDetail = ({producto}) => {
    
    const {nombre, precio, img, stock, min} = producto

    const [count, setCount] = useState(min)

    const sumar= () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = () =>{
        if(count > min){
        setCount(count - 1)
        }
    }


    return (
        <div>
            <div className='producto'>
            <div className='producto__info'>
                <p> {nombre}</p>
                <p className='producto__precio'> 
                    <small>$</small>
                    <strong>{precio}</strong>
                </p>
            </div>
            <img 
            src={img}
            alt='Cartera de cuero negra'/>
            <div className='producto__botones'>
                <button onClick={restar}> - </button>
                <span>{count}</span>
            <button onClick={sumar}> +</button>
            </div>
            <button> < AddShoppingCartIcon/></button>
        </div>
        </div>
    )
}

export default ItemDetail
