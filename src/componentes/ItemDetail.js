import React, {useState} from 'react'
import './ItemDetail.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ItemDetail = ({producto}) => {
    
    const {nombre, precio, img, stock, min, descripcion} = producto

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
        <div className='detail'>

            <div className='detail__producto'>
                <img 
                    src={img}
                    alt='Cartera de cuero negra'
                    />
            </div>

            <div className='detail__info'>
                <h2> {nombre}</h2>
                <p> {descripcion}</p>
                
                <p className='detail__precio'> 
                    <small>$</small>
                    <strong>{precio}</strong>
                </p>

                <div className='detail__botones'>
                    <button onClick={restar}> - </button>
                    <span>{count}</span>
                    <button onClick={sumar}> +</button>
                    
                </div>
                <button className='detail__add'> < AddShoppingCartIcon/></button>
            </div>
        </div>
    )
}

export default ItemDetail
