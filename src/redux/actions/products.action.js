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

export const PRODUCT_DELETE_REQUEST = 'PRODUCT_DELETE_REQUEST';
export const PRODUCT_DELETE_SUCCESS = 'PRODUCT_DELETE_SUCCESS';
export const PRODUCT_DELETE_FAIL = 'PRODUCT_DELETE_FAIL';

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

const deleteProdcut = (productId) => async (dispatch, getState) => {
	try {
		const {
			userSignin: {
				userInfo
			},
		} = getState();
		dispatch({
			type: PRODUCT_DELETE_REQUEST,
			payload: productId
		});
		const {
			data
		} = await Axios.delete('http://127.0.0.1:3001/products/' + productId, {
			headers: {
				Authorization: 'Bearer ' + userInfo.token,
			},
		});
		dispatch({
			type: PRODUCT_DELETE_SUCCESS,
			payload: data,
			success: true
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_DELETE_FAIL,
			payload: error.message
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

const saveProduct = (name, image) => async (dispatch, getState) => {
	
	dispatch({
		type: PRODUCT_SAVE_REQUEST,
		payload: {name, image}
	});
	
	const {	userSignin: { userInfo } } = getState();
		
	Axios.post("http://127.0.0.1:3001/products", {
			name, image
		},{
			headers: {
				Authorization: 'Bearer ' + userInfo.token,
				'Content-Type': 'application/json'
			},
		}).then(res => {
			dispatch({
				type: PRODUCT_SAVE_SUCCESS,
				payload: res.data,
				success: true
			})
		}).catch(err => {
			dispatch({
				type: PRODUCT_SAVE_FAIL,
				payload: err.message
			});
		});
}

export { fetchProduct, fetchProductDetails, saveProduct, deleteProdcut};