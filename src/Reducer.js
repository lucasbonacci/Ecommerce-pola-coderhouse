export const initialState = {
    carrito: []
}

export const carritoTotal = (carrito) => 
    carrito.reduce((monto, item) => item.precio + monto, 0);


const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'Agregar_al_Carrito':
            return {
                ...state,
                carrito: [...state.carrito, action.item]
            }
    }

}

export default reducer