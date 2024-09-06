
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Notification from './components/UI/Notification';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { uiAction } from './store/ui-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const FIREBASE_BASE_URL = 'https://react-http-80662-default-rtdb.europe-west1.firebasedatabase.app';
  const showCart = useSelector(state => state.ui.cartVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const sendCardData = async () => {

      dispatch(uiAction.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending Cart Data!',
      }));

      const response = await fetch(
        `${FIREBASE_BASE_URL}/cart.json`,
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        });

      if (!response.ok) {
        throw new Error('Sending cart data failed')
      }

      dispatch(uiAction.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sending Cart successfully!',
      }));

      const responseData = response.json();
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    
    sendCardData().catch((error) => {
      dispatch(uiAction.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending Cart data failed!',
      }));
    });

  }, [cart, dispatch]);

  return (
    <>
    {notification && (
      <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />
    )}
    
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
