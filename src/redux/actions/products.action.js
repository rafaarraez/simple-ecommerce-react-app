import Axios from "axios";

export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL';

export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST';
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS';
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL';

export const fetchProductRequest = () => {
    return {
        type: PRODUCT_LIST_REQUEST
    }
}

export const fetchProductSuccess = (Product) => {
    return {
        type: PRODUCT_LIST_SUCCESS,
        payload: Product
    }
}

export const fetchProductFailure = (error) => {
    return {
        type: PRODUCT_LIST_FAIL,
        payload: error
    }
}

export const fetchProductDetailsRequest = () => {
    return {
        type: PRODUCT_DETAILS_REQUEST
    }
}

export const fetchProductDetailsSuccess = (Product) => {
    return {
        type: PRODUCT_DETAILS_SUCCESS,
        payload: Product
    }
}

export const fetchProductDetailsFailure = (error) => {
    return {
        type: PRODUCT_DETAILS_FAIL,
        payload: error
    }
}

const fetchProduct = () => {
    return (dispatch) => {
        dispatch(fetchProductRequest());
        Axios.get(`https://reqres.in/api/users`)
            .then(res => {
                dispatch(fetchProductSuccess(res.data.data))
            })
            .catch(error => {
                dispatch(fetchProductFailure(error))
            });
    }
};

const fetchProductDetails = (id) => {
    return (dispatch) => {
        dispatch(fetchProductDetailsRequest());
        Axios.get(`https://reqres.in/api/users/${id}`)
            .then(res => {
                dispatch(fetchProductDetailsSuccess(res.data.data))
            })
            .catch(error => {
                dispatch(fetchProductDetailsFailure(error))
            });
    }
};

export { fetchProduct, fetchProductDetails};