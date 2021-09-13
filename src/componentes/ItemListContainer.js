import React, {useState, useEffect} from 'react'
import './css/itemListContainer.css'
import polabanner from '../assets/bannermujer.jpg'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { getFirestore } from '../firebase/firebase-data'

const ItemListContainer =() => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()

    useEffect(() =>{
        const db = getFirestore()
        const itemColecction = db.collection('productos')
        setLoading(true)

        if(categoryId){
            itemColecction.where('categoria', "==", categoryId)
            .get()
            .then(querySnapshot =>{
                if (querySnapshot.size === 0){
                    alert('no hay productos')
                } else{
                    setProducts(querySnapshot.docs.map(document =>({
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
                    setProducts(querySnapshot.docs.map(document =>({
                        id: document.id, ...document.data()
                    })))
                    setLoading(false)
                }
            })
        }

    },[categoryId])

    return (
        <div className='home'>
            
            <div className='home__container'>
                <img
                className='home__banner'
                src={polabanner} 
                alt="banner pola"
                />
                <div className='home__row'>
                {loading &&<Loader/>}
                {!loading && products.map(e =>{
                    return(
                    <ItemList 
                    key={e.id}
                    name={e.name}
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