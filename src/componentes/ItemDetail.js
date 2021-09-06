import React, {useState} from 'react'
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
            setNuevoStock(stock - count)
        }
    }

    const restar = () =>{
        if(count > 1){
        setCount(count - 1)
        setNuevoStock(stock - count)
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
                    stock: stock
                }
            
            })
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
                <h2> {nombre?.toUpperCase()}</h2>
                <p> {descripcion}</p>
                
                {stock!==0?<>
                <p> Stock disponible: <strong>{nuevoStock}</strong></p>
                <p className='detail__precio'> 
                    <small>$</small>
                    <strong>{precio * count}</strong>
                </p>

                {!compra? 
                <>
                <div className='detail__botones'>
                    <button onClick={restar}> - </button>
                    <span>{count}</span>
                    <button onClick={sumar}> +</button>
                </div>
                <button onClick={addToCart} className='detail__add'> < AddShoppingCartIcon/></button>
                </>
                : <>
                <div className='botoncompra'>
                    <Link to='/carrito'><button>Finalizar Compra</button></Link>
                    <Link to='/'><button>Seguir Comprando</button></Link>
                </div>
                <p> Se añadio al carrito {count===1? <>una unidad</>: <> {count} unidades</>} de {nombre} </p>
                </>}
                </>:<p className='detail__sinstock'>SIN STOCK</p>}

            </div>
        </div>
    )

}

export default ItemDetail
