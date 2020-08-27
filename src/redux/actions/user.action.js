import Axios from "axios";

export const USER_SIGNIN_REQUEST = 'USER_SIGNIN_REQUEST';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
export const USER_SIGNIN_FAIL = 'USER_SIGNIN_FAIL';

export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';


export const fetchSigninRequets = (email, password) => {
    return {
		type: USER_SIGNIN_REQUEST,
		payload: {
			email,
			password
		}
    }
}

export const fetchSigninSuccess = (data) => {
    return {
        type: USER_SIGNIN_SUCCESS,
        payload: data
    }
}

export const fetchSigninFailure = (error) => {
    return {
        type: USER_SIGNIN_FAIL,
        payload: error.message
    }
}

const signin = (email, password) => async (dispatch) => {
	dispatch(fetchSigninRequets(email, password));
	try {
		const { data } = await Axios.post("http://127.0.0.1:3001/auth/login", {
			email,
			password
		});
		dispatch(fetchSigninSuccess(data));
		localStorage.setItem('user', JSON.stringify(data));
	} catch (error) {
		dispatch(fetchSigninFailure(error));		
	}
}

const register = (email, password) => async (dispatch) => {
	dispatch({
		type: USER_REGISTER_REQUEST,
		payload: {
			email,
			password
		}
	});
	try {
		const {
			data
		} = await Axios.post("http://127.0.0.1:3001/auth/register", {
			email,
			password
		});
		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data
		});
		localStorage.setItem('user', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: error.message
		});
		console.log(error);
		
	}
}

const logout = () => (dispatch) => {
	localStorage.removeItem('user');
	dispatch({
		type: USER_LOGOUT
	})
}

export {
    signin,
	register,
	logout
};
