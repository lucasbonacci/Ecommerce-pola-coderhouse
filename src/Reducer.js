export const initialState = {
    carrito: []
}

export const carritoTotal = (carrito) => 
    carrito.reduce((monto, item) => item.precio + monto, 0);


const reducer = (state, action) => {
    switch(action.type){
        case 'agregarAlCarrito':
            return {
                ...state,
                carrito: [...state.carrito, action.item]

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