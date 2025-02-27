import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_BY_ADMIN_REQUEST, USER_REGISTER_BY_ADMIN_SUCCESS, USER_REGISTER_BY_ADMIN_FAIL } from "../actions/user.action";

function userSigninReducer(state = {}, action) {
    switch (action.type) {
		case USER_SIGNIN_REQUEST:
				return { loading: true };
		case USER_SIGNIN_SUCCESS:
				return { loading: false, userInfo: action.payload };
		case USER_SIGNIN_FAIL:
				return { loading: false, error: action.payload };
		case USER_LOGOUT:
				return {};
		default: return state;
    }
  }

function userRegisterReducer(state = {}, action) {
    switch (action.type) {
		case USER_REGISTER_REQUEST:
				return { loading: true };
		case USER_REGISTER_SUCCESS:
				return { loading: false, userInfo: action.payload };
		case USER_REGISTER_FAIL:
				return { loading: false, error: action.payload };
		default: return state;
    }
}

function userRegisterByAdminReducer(state = {}, action) {
    switch (action.type) {
		case USER_REGISTER_BY_ADMIN_REQUEST:
				return { loading: true };
		case USER_REGISTER_BY_ADMIN_SUCCESS:
				return { loading: false, userInfo: action.payload, success: true };
		case USER_REGISTER_BY_ADMIN_FAIL:
				return { loading: false, error: action.payload };
		default: return state;
    }
}
export {
    userSigninReducer,
	userRegisterReducer,
	userRegisterByAdminReducer
}