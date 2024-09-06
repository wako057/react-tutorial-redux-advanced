
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';

function App() {
const FIREBASE_BASE_URL = 'https://react-http-80662-default-rtdb.europe-west1.firebasedatabase.app';
const showCart = useSelector(state => state.ui.cartVisible);
const cart = useSelector((state) => state.cart);

useEffect(() => {
  fetch(
    `${FIREBASE_BASE_URL}/cart.json`, 
    { 
      method: 'PUT',
      body: JSON.stringify(cart)
    });
}, [cart]);

  return (
    <Layout>
      { showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
