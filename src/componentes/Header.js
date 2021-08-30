import  React  from "react";
import './Header.css'
import logopola from '../assets/pola.jpg'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import {useStateValue} from '../StateProvider'
import {quantityTotal} from '../Reducer' 

function Header (){
    const [{carrito}, dispatch] = useStateValue()

    let cantidad = quantityTotal(carrito)
    return (
        <div className="header">
            <Link to='/'>
                <img className="header__logo"
                src={logopola}
                alt="pola accesorios" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" placeholder='Buscar producto' type="text"/>
                <SearchIcon className='header__searchIcon'/>
            </div>

            <div className='header__categorias'>
                <Link to='/'><span>Categorias</span></Link>
                <ul>
                    <Link to='/category/joyas'><li>Joyas</li></Link>
                    <Link to='/category/cartera'><li>Carteras</li></Link>
                    <Link to='/category/collar'><li>Collares</li></Link>
                </ul>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className='header__optionOne'>Hola Extraño</span>
                    <span className='header__optionTwo'>Ingresar</span>
                </div>

                <Link to='/carrito'>
                <div className="header__optionCart">
                    <ShoppingCartIcon />
                    <span className='header__optionLineTwo header__cartCount' >{cantidad}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header