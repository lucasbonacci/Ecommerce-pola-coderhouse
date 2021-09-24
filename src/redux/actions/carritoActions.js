import actionTypes from "../../constants"

export const addToCart = (name, price, img, stock,id, count) => (dispatch) =>{
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: id,
            name: name,
            price: price * count,
            quantity: count,
            stock: stock,
            img: img
        }
    })
}


export const emptyCar = () => (dispatch) =>{
    dispatch({
        type: actionTypes.EMPTY_CART
    })
}


export const removeFromCart = (id)  => (dispatch) =>{
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        id
    })
}