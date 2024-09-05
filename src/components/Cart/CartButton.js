import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiSliceActions} from "../../store/ui";

const CartButton = (props) => {
  const counterCart = useSelector(state => Object
    .values(state.cart.items)
    .reduce((total, itemData) => total + itemData.nb, 0));

  const blu = useSelector(state => state.cart);
  console.log('Store cart:', blu);
  const dispatch = useDispatch();

  const handleToggleShowCart = () => {
    dispatch(uiSliceActions.toggleShowCart());
  }

  return (
    <button className={classes.button} onClick={handleToggleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{counterCart}</span>
    </button>
  );
};

export default CartButton;
