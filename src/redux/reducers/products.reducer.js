import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL, 
} from '../actions/products.action';

const initialState = {
    loading: false,
    products: [],
    error: ''
}

const productos = (state = initialState, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST: {
            return{
                ...state,
                loading: true
            }
        }

        case PRODUCT_LIST_SUCCESS: {
            return{
                error: '',
                loading: false,
                products: action.payload
            }
        }

        case PRODUCT_LIST_FAIL: {
            return{
                products: [],
                loading: false,
                error: action.payload
            }
        }
        default: return state;
    }
}

function productDetailsReducer(state = { product: { reviews: [] } }, action) {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
  }

export { productos, productDetailsReducer };