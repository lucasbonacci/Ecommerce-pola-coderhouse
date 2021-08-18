import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {taskProductos} from './Api'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])

    useEffect(() =>{
        taskProductos.then(result => {setProducto(result)})
    },[producto])

    return (
        <div>
            {producto.map((e, itemId) =>{
                itemId=1;
                if (e.id === itemId){
                    return <ItemDetail key={e.id} nombre={e.nombre} precio={e.precio} img={e.img} descripcion={e.descripcion} min={e.min} stock={e.stock} />
                }
            })}
        </div>
)
}

export default ItemDetailContainer
