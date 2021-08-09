import  React  from "react";
import './Header.css'
import logopola from '../assets/pola.jpg'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header (){
    return (
        <div className="header">
                <img className="header__logo"
                src={logopola}
                alt="pola accesorios" />

            <div className="header__search">
                <input className="header__searchInput" placeholder='Buscar producto' type="text"/>
                <SearchIcon className='header__searchIcon'/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className='header__optionOne'>Hola Extraño</span>
                    <span className='header__optionTwo'>Ingresar</span>
                </div>

                <div className="header__optionCart">
                    <ShoppingCartIcon />
                    <span className='header__optionLineTwo header__cartCount' >0</span>
                </div>
            </div>
        </div>
    )
}

export default Header