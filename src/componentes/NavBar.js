import  React  from "react";
import './css/navbar.css'
import logopola from '../assets/pola.jpg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from "react-router-dom";
import {useStateValue} from '../context/StateProvider'
import {quantityTotal} from '../context/Reducer' 
import { useAuth } from '../context/AuthContext'

const NavBar = () =>{

    const [{carrito}] = useStateValue()
    const authe = useAuth()
    console.log(authe.user)

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
                    <span className='header__optionOne'>Hola {authe.user? `${authe.user.email}`: 'invitado'}</span>
                    {authe.user?<button className='header__button' onClick={async () => await authe.signOut()}>Desconectar</button> :<Link to='/login'><span className='header__optionTwo'>ingresar</span></Link>}
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

export default NavBar