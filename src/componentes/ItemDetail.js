import React, {useState, useEffect} from 'react'
import './css/itemDetail.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { addToCart } from '../redux/actions/carritoActions';

const ItemDetail = ({name, price, img, stock, description, id}) => {
    

    const [count, setCount] = useState(1)
    const [buy, setBuy] = useState(false)
    const [newStock, setNewStock] = useState(stock)

    const dispatch = useDispatch()

    const cart = useSelector(state => state.carritoReducer)

    const summar= () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const subtract = () =>{
        if(count > 1){
        setCount(count - 1)
        }
    }

    useEffect(() =>{
        setNewStock(stock-count)
    },[stock, count])

    const addTocartHandler = () =>{
        dispatch(addToCart(name, price, img, stock,id, count))
        setBuy(true)
    }

    return (
        <div className='detail'>

            <div className='detail__product'>
                <img 
                    src={img}
                    alt={name}
                    />
            </div>

            <div className='detail__info'>
                <h2> {name?.toUpperCase()}</h2>
                <p> {description}</p>
                
                {stock!==0?<>
                <p> Stock disponible: <strong>{newStock}</strong></p>
                <p className='detail__price'> 
                    <small>$</small>
                    <strong>{price * count}</strong>
                </p>

                {!buy? 
                <>
                <div className='detail__buttons'>
                    <button onClick={subtract}> - </button>
                    <span>{count}</span>
                    <button onClick={summar}> +</button>
                </div>
                <button  onClick={addTocartHandler} className='detail__add'> < AddShoppingCartIcon/></button>
                </>
                : <>
                <div className='buybutton'>
                    <Link to='/carrito'><button>Finalizar Compra</button></Link>
                    <Link to='/'><button>Seguir Comprando</button></Link>
                </div>
                <p> Se añadio al carrito {count===1? <>una unidad</>: <> {count} unidades</>} de {name} </p>
                </>}
                </>:<p className='detail__outofstock'>SIN STOCK</p>}

            </div>
        </div>
    )

}



export default ItemDetail
