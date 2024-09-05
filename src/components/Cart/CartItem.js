import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { cartSliceActions } from '../../store/cart';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { itemId, title, quantity, total, price } = props.item;
  const items = useSelector(state => state.cart)

  console.log('CARTITEM - items: ', items);
  console.log('CARTITEM - props.item: ', props.item);

  const handleAddItemToCart = (item) => {
    dispatch(cartSliceActions.addToCart(item));
  };

  const handleRemoveItemToCart = (itemId) => {
    dispatch(cartSliceActions.removeItem(itemId));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleRemoveItemToCart(itemId)}>-</button>
          <button onClick={() => handleAddItemToCart({ itemId, title, quantity, total, price })}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
