import React, {useState, useEffect} from 'react'
import './Principal.css'
import polabanner from '../assets/bannermujer.jpg'
import Productos from './Productos'
import taskProductos  from './ListaDeProductos'

function Principal() {

    const [productos, setProductos] = useState([])

    useEffect(() =>{
        taskProductos.then(result => {setProductos(result)})
    },[])


    return (
        <div className='principal'>
            <div className='principal__container'>
                <img
                className='principal__banner'
                src={polabanner} 
                alt="banner pola"
                />

                <div className='principal__row'>
                {productos.length === 0? <h2>Cargando...</h2>:
                productos.map(e =>{
                    return(
                    <Productos 
                    key={e.id}
                    nombre={e.nombre}
                    img={e.img}
                    />
                    )
                })}

                </div>
            </div>
        </div>
    )
}

export default Principal