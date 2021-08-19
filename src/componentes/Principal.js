import React, {useState, useEffect} from 'react'
import './Principal.css'
import polabanner from '../assets/bannermujer.jpg'
import Productos from './Productos'
import {taskProductos, taskProductosCategoria}  from './Api'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

function Principal() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoriaId } = useParams()

    useEffect(() =>{
        setLoading(true)
        if (categoriaId){
            
            taskProductosCategoria(categoriaId).then(result =>{
                setLoading(false)
                setProductos(result)
                
            })
        } else{
            taskProductos.then(result => {
                setLoading(false)
                setProductos(result)})
            
        }
        
    },[categoriaId])


    return (
        <div className='principal'>
            
            <div className='principal__container'>
                <img
                className='principal__banner'
                src={polabanner} 
                alt="banner pola"
                />
                <div className='principal__row'>
                {loading &&<Loader/>}
                {!loading && productos.map(e =>{
                    return(
                    <Productos 
                    key={e.id}
                    nombre={e.nombre}
                    img={e.img}
                    id={e.id}
                    />
                    )
                })}

                </div>
            </div>
        </div>
    )
}

export default Principal