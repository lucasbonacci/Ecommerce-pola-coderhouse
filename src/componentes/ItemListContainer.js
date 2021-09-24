import React, {useEffect} from 'react'
import './css/itemListContainer.css'
import polabanner from '../assets/bannermujer.jpg'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { useSelector,useDispatch } from 'react-redux'
import { getProducts, getProductsForId} from '../redux/actions/productosAction'

const ItemListContainer =() => {

    const products = useSelector(state => state.productosReducer)
    const dispatch = useDispatch()
    const { categoryId } = useParams()
    const { loading, productos} = products

    useEffect(() =>{
        if(categoryId){
            dispatch(getProductsForId(categoryId))
        } else{
            dispatch(getProducts())
        }

    },[categoryId, dispatch])


    return (
        <main className='home'>
            
            <div className='home__container'>
                <img
                className='home__banner'
                src={polabanner} 
                alt="banner pola"
                />
                <div className='home__row'>
                {loading &&<Loader/>}
                {!loading && productos?.map(e =>{
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
        </main>
    )
}

export default ItemListContainer