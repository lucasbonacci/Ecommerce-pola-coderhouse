import { getFirestore } from '../../firebase/firebase-data'
import actionTypes from "../../constants"




export const getProducts = () => (dispatch) =>{
    try{
        dispatch({
            type:  actionTypes.PRODUCTOS_REQUEST
        })
        const db = getFirestore()
        const itemColecction = db.collection('productos')
        itemColecction.get().then(querySnapshot =>{
            dispatch({
                type: actionTypes.PRODUCTOS,
                payload: querySnapshot.docs.map(document =>({
                    id: document.id, ...document.data()
                }))
            })
        })
    } catch(err){
        console.log(err)
    }
}


export const getProductsForId = (id) => (dispatch) =>{
    try{
        dispatch({
            type: actionTypes.PRODUCTOS_ID_REQUEST
        })
        const db = getFirestore()
        const itemColecction = db.collection('productos')
        itemColecction.where('categoria', "==", id).get().then(querySnapshot =>{
            dispatch({
                type: actionTypes.PRODUCTOS_ID,
                payload: querySnapshot.docs.map(document =>({
                    id: document.id, ...document.data()
                }))
            })
        })
    } catch(err){
        console.log(err)
    }
}

export const getUniqueProduct = (id) => (dispatch) =>{
    try{
        dispatch({
            type: actionTypes.PRODUCTOS_UNICO_REQUEST
        })
        const db = getFirestore()
        const itemColecction = db.collection('productos')
        const currentItem = itemColecction.doc(id)
        currentItem.get().then(document =>{
            if(!document.exists){
                dispatch({
                    type: actionTypes.PRODUCTOS_UNICO,
                    payload: 'notexists'
                })
            } else{
                dispatch({
                    type: actionTypes.PRODUCTOS_UNICO,
                    payload: {
                        id:document.id, ...document.data()}
                })
            }
        })
    } catch(err){
        console.log(err)
    }
}


