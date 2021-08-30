
export const initialState = {
    carrito: []
}

export const carritoTotal = (carrito) => 
    carrito.reduce((monto, item) => item.precio + monto, 0);

export const quantityTotal = (carrito) =>
    carrito.reduce((cantidad, item) => item.quantity + cantidad,0)

    
const reducer = (state, action) => {
    switch(action.type){
        case 'agregarAlCarrito':{
            let itemInCart = state.carrito.some(item => item.id === action.item.id)
            console.log('esto es boolean', itemInCart)
            console.log(state.carrito)
            


            if (itemInCart){
                let index = state.carrito.findIndex(el => el.id === action.item.id)
                console.log(index)
                let newCarrito = state.carrito
                
                newCarrito[index].quantity += action.item.quantity

                newCarrito[index].precio+= action.item.precio
                return{
                    ...state,
                    carrito:[...newCarrito]
                }
            } else{
                return{
                    ...state,
                    carrito: [...state.carrito, action.item]
                }
            }
        }

        
        case 'eliminarDelCarrito':
            const index = state.carrito.findIndex(
                (carritoItem) => carritoItem.id === action.id)
            let nuevoCarrito = [...state.carrito]
            
            if (index >= 0){
                nuevoCarrito.splice(index,1)
            } else{
                console.log(`error ${action.id}`)
                console.log(index)
            }

            return{
                ...state,
                carrito: nuevoCarrito
            }

        case 'vaciarCarrito':
            return{
                ...state,
                carrito: state.carrito = []
            }

        default:
            return state
    }

}

export default reducer