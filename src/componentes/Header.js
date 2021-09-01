import  React  from "react";
import './Header.css'
import logopola from '../assets/pola.jpg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from "react-router-dom";
import {useStateValue} from '../StateProvider'
import {quantityTotal} from '../Reducer' 

function Header (){
    const [{carrito}, dispatch] = useStateValue()

    let history = useHistory()
    const onChange = (e) =>{
        history.push(`/${e.target.value}`)
    }

    let cantidad = quantityTotal(carrito)
    return (
        <div className="header">
            <Link to='/'>
                <img className="header__logo"
                src={logopola}
                alt="pola accesorios" />
            </Link>


            <div className="header__search">
                <select onChange={onChange} className="header__searchInput">
                <option vale="" disabled selected>Buscar productos</option>   
                <option value="">Todos los productos</option>
                <option value="category/cartera">Carteras</option>
                <option value="category/joyas">Pendientes</option>
                <option value="category/collar">Collares</option>
                </select>
            </div>


            <div className="header__nav">
                <div className="header__option">
                    <span className='header__optionOne'>Hola Extraño</span>
                    <span className='header__optionTwo'>Ingresar</span>
                </div>

                
                <div className="header__optionCart">
                    <Link to='/carrito'>
                    <ShoppingCartIcon />
                    </Link>
                    <span className='header__cartCount' >{cantidad ===0? <></>: cantidad }</span>
                </div>
            </div>
        </div>
    )
}

export default Header