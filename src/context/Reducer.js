

let localItem = []

const storageItem = () => {
    if(localStorage.getItem('cart')){
        return localItem = JSON.parse(localStorage.getItem('cart'))
    }
}
storageItem()



export const initialState =  {
    cart: [...localItem],
}



export const cartTotal = (cart) => 
    cart.reduce((amount, item) => item.price + amount, 0);

export const quantityTotal = (cart) =>
    cart.reduce((quantity, item) => item.quantity + quantity,0)

    
const reducer = (state, action) => {

    switch(action.type){
        case 'ADD_TO_CART':{
            let itemInCart = state.cart.some(item => item.id === action.item.id)

            if (itemInCart){
                let index = state.cart.findIndex(el => el.id === action.item.id)
                let newCart = state.cart
                
                newCart[index].quantity += action.item.quantity

                newCart[index].precio+= action.item.precio
                localStorage.setItem('cart', JSON.stringify(newCart))
                return{
                    ...state,
                    cart:[...newCart],
                }
            } else{
                let newCart = [...state.cart, action.item]
                localStorage.setItem('cart', JSON.stringify(newCart))
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
                localStorage.setItem('cart', JSON.stringify(newCart))
            } 

            return{
                ...state,
                cart: [...newCart]
            }

        case 'EMPTY_CART':
            localStorage.clear()
            return{
                ...state,
                cart: []
            }
        default:
            return state
    }

}



export default reducer