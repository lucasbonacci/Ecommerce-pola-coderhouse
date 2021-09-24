import actionTypes from "../../constants"


const initialState = {
    productos: [],
    loading: false
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

        case actionTypes.PRODUCTOS_ID_REQUEST:
            return{
                loading: true
            }

        case actionTypes.PRODUCTOS_ID:
            return{
                productos: action.payload,
                loading:false
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

        default: 
            return state
    }
}



export default getProductsReducer