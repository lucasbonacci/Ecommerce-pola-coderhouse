import React, {useState} from 'react'
import './ItemDetail.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BotonCompra from './BotonCompra';

const ItemDetail = ({producto}) => {
    
    const {nombre, precio, img, stock, min, descripcion} = producto

    const [count, setCount] = useState(min)
    const [compra, setCompra] = useState(false)
    const [unidades, setUnidades] = useState(0)

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

    const addToCart=()=>{
        setUnidades(count)
        setCompra(true)
        
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
                <button onClick={addToCart} className='detail__add'> < AddShoppingCartIcon/></button>
                {compra && <p> Se añadio al carrito {unidades} unidades de {nombre} </p>}
                {compra && <BotonCompra/>}
            </div>
        </div>
    )
}

export default ItemDetail
