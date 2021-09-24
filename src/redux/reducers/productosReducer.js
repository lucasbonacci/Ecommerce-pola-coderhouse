import actionTypes from "../../constants"


const initialState = {
    productos: [],
    loading: false,
    error: ''
}



export const getProductsReducer = (state= initialState, action) =>{
    switch(action.type){
        case actionTypes.PRODUCTOS_REQUEST:
            return{
                loading: true
            }

        case actionTypes.PRODUCTOS:
            return {
                productos: action.payload,
                loading: false
            }

        case actionTypes.PRODUCTOS_ERROR:
            return{
                error: action.payload
            }

        case actionTypes.PRODUCTOS_ID_REQUEST:
            return{
                loading: true
            }

        case actionTypes.PRODUCTOS_ID:
            return{
                productos: action.payload,
                loading:false
            }

        case actionTypes.PRODUCTOS_ID_ERROR:
            return{
                error: action.payload
            }

        case actionTypes.PRODUCTOS_UNICO_REQUEST:
            return {
                loading: true
            }

        case actionTypes.PRODUCTOS_UNICO:
            return {
                productos: action.payload,
                loading:false
            }

        case actionTypes.PRODUCTOS_UNICO_ERROR:
            return {
                erorr: action.payload
            }
        default: 
            return state
    }
}



export default getProductsReducer