import React, {useState} from 'react'
import './ItemDetail.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BotonCompra from './BotonCompra';
import { useStateValue } from '../StateProvider';

const ItemDetail = ({producto}) => {
    
    const {nombre, precio, img, stock, min, descripcion, id} = producto

    const [count, setCount] = useState(min)
    const [compra, setCompra] = useState(false)
    const [{carrito}, enviar] = useStateValue()
    const [nuevoStock, setNuevoStock] = useState(stock)


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

    function actualizarStock(stock,count){
        setNuevoStock(stock - count)
        setCount(stock - count)
    }

    const addToCart=()=>{
            enviar({
                type: 'agregarAlCarrito',
                item:{
                    id: id,
                    nombre: nombre,
                    img: img,
                    precio: precio * count,
                    quantity: count
                }
            
            })
        setCompra(true)
        actualizarStock(stock,count)
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
                <p> Stock disponible: <strong>{nuevoStock}</strong></p>
                
                <p className='detail__precio'> 
                    <small>$</small>
                    <strong>{precio}</strong>
                </p>

                <div className='detail__botones'>
                    {!compra? <button onClick={restar}> - </button>: null}
                    {!compra? <span>{count}</span> : null}
                    {!compra? <button onClick={sumar}> +</button>: null}
                    
                </div>
                {!compra? <button onClick={addToCart} className='detail__add'> < AddShoppingCartIcon/></button>: <BotonCompra/> }
                {compra && <p> Se añadio al carrito {count} unidades de {nombre} </p>}
            </div>
        </div>
    )
}

export default ItemDetail
