import Card from '../UI/Card';
import classes from './ProductItem.module.css';
// import { cartSliceActions } from '../../store/cart';

const ProductItem = (props) => {
  const { title, price, description } = props;

  // const handleAddItemToCart = (item) => {
    // dispatch(cartSliceActions.addToCart(item));
  // };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          {/*<button onClick={() => handleAddItemToCart}>Add to Cart</button>*/}
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
