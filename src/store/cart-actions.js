import { cartActions } from "./cart-slice";
import { uiAction } from "./ui-slice";

const FIREBASE_BASE_URL = 'https://react-http-80662-default-rtdb.europe-west1.firebasedatabase.app';

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                `${FIREBASE_BASE_URL}/cart.json`
            );

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));

        } catch (error) {
            dispatch(uiAction.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending Cart data failed!',
              }));
        }
    }
};


export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiAction.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending Cart Data!',
        }));

        const sendRequest = async () => {
            const response = await fetch(
                `${FIREBASE_BASE_URL}/cart.json`,
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                });
    
            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }
        }

        try {
            await sendRequest();

            dispatch(uiAction.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sending Cart successfully!',
            }));
        } catch (error) {
            dispatch(uiAction.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending Cart data failed!',
              }));
        }
    };
}