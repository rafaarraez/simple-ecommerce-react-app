import Axios from "axios";
export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CART_SAVE_SHIPPING = 'CART_SAVE_SHIPPING';
export const CART_SAVE_PAYMENT = 'CART_SAVE_PAYMENT';

const addToCart = (productId, qty) => async (dispatch, getState) => {
	try {
		const { data } = await Axios.get("http://127.0.0.1:3001/products/" + productId);
		dispatch({
		type: CART_ADD_ITEM, payload: {
			product: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			qty
		}
		});
		const { cart: { cartItems } } = getState();
		localStorage.setItem("cartItems", JSON.stringify(cartItems));

	} catch (error) {

  }
}
const removeFromCart = (productId) => (dispatch, getState) => {
	dispatch({ type: CART_REMOVE_ITEM, payload: productId });

	const { cart: { cartItems } } = getState();
	localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
const saveShipping = (data) => (dispatch) => {
  	dispatch({ type: CART_SAVE_SHIPPING, payload: data });
}
const savePayment = (data) => (dispatch) => {
  	dispatch({ type: CART_SAVE_PAYMENT, payload: data });
}
export { addToCart, removeFromCart, saveShipping, savePayment }