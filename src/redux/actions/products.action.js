import Axios from "axios";

export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL';

export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST';
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS';
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL';

export const PRODUCT_SAVE_REQUEST = 'PRODUCT_SAVE_REQUEST';
export const PRODUCT_SAVE_SUCCESS = 'PRODUCT_SAVE_SUCCESS';
export const PRODUCT_SAVE_FAIL = 'PRODUCT_SAVE_FAIL';


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
        Axios.get(`http://127.0.0.1:3001/products`)
            .then(res => {
                dispatch(fetchProductSuccess(res.data))
            })
            .catch(error => {
                dispatch(fetchProductFailure(error))
            });
    }
};

const fetchProductDetails = (id) => {
    return (dispatch) => {
        dispatch(fetchProductDetailsRequest());
        Axios.get(`http://127.0.0.1:3001/products/${id}`)
            .then(res => {
                dispatch(fetchProductDetailsSuccess(res.data))
            })
            .catch(error => {
                dispatch(fetchProductDetailsFailure(error))
            });
    }
};

const saveProduct = (product) => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCT_SAVE_REQUEST,
			payload: product
		});
		const {
			userSignin: {
				userInfo
			},
		} = getState();
		if (!product._id) {
			const {
				data
			} = await Axios.post('/api/products', product, {
				headers: {
					Authorization: 'Bearer ' + userInfo.token,
				},
			});
			dispatch({
				type: PRODUCT_SAVE_SUCCESS,
				payload: data
			});
		} else {
			const {
				data
			} = await Axios.put(
				'/api/products/' + product._id,
				product, {
					headers: {
						Authorization: 'Bearer ' + userInfo.token,
					},
				}
			);
			dispatch({
				type: PRODUCT_SAVE_SUCCESS,
				payload: data
			});
		}
	} catch (error) {
		dispatch({
			type: PRODUCT_SAVE_FAIL,
			payload: error.message
		});
	}
};

export { fetchProduct, fetchProductDetails, saveProduct};