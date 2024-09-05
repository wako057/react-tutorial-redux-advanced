import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";

const Cart = (props) => {
  const cartItems = Object
    .values(useSelector(state => state.cart.items))
    .map(item => ({quantity: item.nb, ...item.item}))
  ;
  console.log('cartItems:', cartItems);


  const printAllItems = (items) => {
    // console.log('bim:', items);
    //
    // Object.values(items).map((item) => console.log('bla', item));

    return items.map((item) => {
    console.log('blu', item);
    // console.log(item.itemId);
        return <CartItem key={item.itemId}
          item={{ ...item }}
        />    }

      );
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {printAllItems(cartItems)}
      </ul>
    </Card>
  );
};

export default Cart;
