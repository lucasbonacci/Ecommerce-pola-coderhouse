export const addToCart = (name, price, img, stock,id, count) => async(dispatch) =>{
    dispatch({
        type: 'ADD_TO_CART',
        item: {
            id: id,
            name: name,
            price: price * count,
            quantity: count,
            stock: stock,
            img: img
        }
    })
}


export const emptyCar = () => async (dispatch) =>{
    dispatch({
        type: 'EMPTY_CART'
    })
}


export const removeFromCart = (id)  => async(dispatch) =>{
    dispatch({
        type: 'REMOVE_FROM_CART',
        id: id
    })
}