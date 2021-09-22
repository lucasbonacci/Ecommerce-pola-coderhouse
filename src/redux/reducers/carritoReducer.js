const initialState = {
    cart: []
}



export const cartTotal = (cart) => 
    cart.reduce((amount, item) => item.price + amount, 0);

export const quantityTotal = (cart) =>
    cart.reduce((quantity, item) => item.quantity + quantity,0)


const cartReducer = (state = initialState, action) => {

    switch(action.type){
        case 'ADD_TO_CART':{
            let itemInCart = state.cart.some(item => item.id === action.item.id)

            if (itemInCart){
                let index = state.cart.findIndex(el => el.id === action.item.id)
                let newCart = state.cart
                
                newCart[index].quantity += action.item.quantity

                newCart[index].price+= action.item.price
                return{
                    ...state,
                    cart:[...newCart],
                }
            } else{
                let newCart = [...state.cart, action.item]
                return{
                    ...state,
                    cart: [...newCart]
                }
            }
        }
        
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id)
            let newCart = [...state.cart]
            
            if (index >= 0){
                newCart.splice(index,1)
            } 

            return{
                ...state,
                cart: [...newCart]
            }

        case 'EMPTY_CART':
            return{
                ...state,
                cart: []
            }

        default:
            return state
    }

}

export default cartReducer

