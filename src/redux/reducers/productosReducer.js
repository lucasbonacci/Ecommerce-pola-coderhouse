
const initialState = {
    productos: [],
    loading: false
}



export const getProductsReducer = (state= initialState, action) =>{
    switch(action.type){
        case 'PRODUCTOS_REQUEST':
            return{
                loading: true
            }

        case 'PRODUCTOS':
            return {
                productos: action.payload,
                loading: false
            }

        case 'PRODUCTOS_ID_REQUEST':
            return{
                loading: true
            }

        case 'PRODUCTOS_ID':
            return{
                productos: action.payload,
                loading:false
            }

        case 'PRODUCTOS_UNICO_REQUEST':
            return {
                loading: true
            }

        case 'PRODUCTOS_UNICO':
            return {
                productos: action.payload,
                loading:false
            }

        default: 
            return state
    }
}



export default getProductsReducer