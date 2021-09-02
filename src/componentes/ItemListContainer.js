import React, {useState, useEffect} from 'react'
import './css/itemListContainer.css'
import polabanner from '../assets/bannermujer.jpg'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { getFirestore } from '../firebase/firebase-data'

function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoriaId } = useParams()

    useEffect(() =>{
        const db = getFirestore()
        const itemColecction = db.collection('productos')
        setLoading(true)

        if(categoriaId){
            itemColecction.where('categoria', "==", categoriaId)
            .get()
            .then(querySnapshot =>{
                if (querySnapshot.size === 0){
                    alert('no hay productos')
                } else{
                    setProductos(querySnapshot.docs.map(document =>({
                        id: document.id, ...document.data()
                    })))
                    setLoading(false)
                }
            })
        } else{
            itemColecction.get().then(querySnapshot =>{
                if(querySnapshot.size === 0){
                    alert('no hay productos')
                } else{
                    setProductos(querySnapshot.docs.map(document =>({
                        id: document.id, ...document.data()
                    })))
                    setLoading(false)
                }
            })
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
                    <ItemList 
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

export default ItemListContainer