

let localItem = []

const storageItem = () => {
    if(localStorage.getItem('carrito')){
        return localItem = JSON.parse(localStorage.getItem('carrito'))
    }
}
storageItem()

export const initialState =  {
    carrito: [...localItem],
}



export const carritoTotal = (carrito) => 
    carrito.reduce((monto, item) => item.precio + monto, 0);

export const quantityTotal = (carrito) =>
    carrito.reduce((cantidad, item) => item.quantity + cantidad,0)

    
const reducer = (state, action) => {

    switch(action.type){
        case 'agregarAlCarrito':{
            let itemInCart = state.carrito.some(item => item.id === action.item.id)

            if (itemInCart){
                let index = state.carrito.findIndex(el => el.id === action.item.id)
                let newCarrito = state.carrito
                
                newCarrito[index].quantity += action.item.quantity

                newCarrito[index].precio+= action.item.precio
                localStorage.setItem('carrito', JSON.stringify(newCarrito))
                return{
                    ...state,
                    carrito:[...newCarrito],
                }
            } else{
                let newCarrito = [...state.carrito, action.item]
                localStorage.setItem('carrito', JSON.stringify(newCarrito))
                return{
                    ...state,
                    carrito: [...newCarrito]
                }
            }
        }
        
        case 'eliminarDelCarrito':
            const index = state.carrito.findIndex(
                (carritoItem) => carritoItem.id === action.id)
            let newCarrito = [...state.carrito]
            
            if (index >= 0){
                newCarrito.splice(index,1)
                localStorage.setItem('carrito', JSON.stringify(newCarrito))
            } 

            return{
                ...state,
                carrito: [...newCarrito]
            }

        case 'vaciarCarrito':
            localStorage.clear()
            return{
                ...state,
                carrito: []
            }
        default:
            return state
    }

}



export default reducer