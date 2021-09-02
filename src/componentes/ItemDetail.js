import React, {useState, useEffect} from 'react'
import './css/itemDetail.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from '../context/StateProvider';
import { Link } from 'react-router-dom'

const ItemDetail = ({nombre, precio, img, stock, descripcion, id}) => {
    

    const [count, setCount] = useState(1)
    const [compra, setCompra] = useState(false)
    const [,enviar] = useStateValue()
    const [nuevoStock, setNuevoStock] = useState(stock)


    const sumar= () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = () =>{
        if(count > 1){
        setCount(count - 1)
        }
    }

    const addToCart=()=>{
            enviar({
                type: 'agregarAlCarrito',
                item:{
                    id: id,
                    nombre: nombre,
                    img: img,
                    precio: precio * count,
                    quantity: count,
                }
            
            })
        setCompra(true)
}

    useEffect(() => {
        setNuevoStock(stock - count)
        
    },)


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
                    <strong>{precio * count}</strong>
                </p>

                <div className='detail__botones'>
                    {!compra? <button onClick={restar}> - </button>: null}
                    {!compra? <span>{count}</span> : null}
                    {!compra? <button onClick={sumar}> +</button>: null}
                    
                </div>
                {!compra? <button onClick={addToCart} className='detail__add'> < AddShoppingCartIcon/></button>: 
                <div className='botoncompra'>
                    <Link to='/carrito'><button>Finalizar Compra</button></Link>
                    <Link to='/'><button>Seguir Comprando</button></Link>
                </div> }
                {compra && <p> Se añadio al carrito {count===1? <>una unidad</>: <> {count} unidades</>} de {nombre} </p>}
            </div>
        </div>
    )
}

export default ItemDetail
