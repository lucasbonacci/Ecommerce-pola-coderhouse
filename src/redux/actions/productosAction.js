import { getFirestore } from '../../firebase/firebase-data'



export const getProducts = () => async (dispatch) =>{
    try{
        dispatch({
            type: 'PRODUCTOS_REQUEST'
        })
        const db = getFirestore()
        const itemColecction = db.collection('productos')
        await itemColecction.get().then(querySnapshot =>{
            dispatch({
                type: 'PRODUCTOS',
                payload: querySnapshot.docs.map(document =>({
                    id: document.id, ...document.data()
                }))
            })
        })
    } catch(err){
        console.log(err)
    }
}


export const getProductsForId = (id) => async(dispatch) =>{
    try{
        dispatch({
            type: 'PRODUCTOS_ID_REQUEST'
        })
        const db = getFirestore()
        const itemColecction = db.collection('productos')
        await itemColecction.where('categoria', "==", id).get().then(querySnapshot =>{
            dispatch({
                type: 'PRODUCTOS_ID',
                payload: querySnapshot.docs.map(document =>({
                    id: document.id, ...document.data()
                }))
            })
        })
    } catch(err){
        console.log(err)
    }
}

export const getUniqueProduct = (id) => async(dispatch) =>{
    try{
        dispatch({
            type: 'PRODUCTOS_UNICO_REQUEST'
        })
        const db = getFirestore()
        const itemColecction = db.collection('productos')
        const currentItem = itemColecction.doc(id)
        await currentItem.get().then(document =>{
            if(!document.exists){
                dispatch({
                    type: 'PRODUCTOS_UNICO',
                    payload: 'notexists'
                })
            } else{
                dispatch({
                    type: 'PRODUCTOS_UNICO',
                    payload: {
                        id:document.id, ...document.data()}
                })
            }
        })
    } catch(err){
        console.log(err)
    }
}


