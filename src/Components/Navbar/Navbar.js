import classes from "./Navbar.module.css";
import shoppingCartImage from "../../Images/shopping-cart.png";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1>React Meals</h1>
      </div>
      <button className={classes.basket_cont}>
        <div className={classes.cartIcon}>
          <img
            src={shoppingCartImage}
            width={25}
            height={25}
            alt="cart-icon"
          ></img>
        </div>
        Your cart&nbsp;&nbsp;
        <div className={classes.basket_count}>1</div>
      </button>
    </div>
  );
};

export default Navbar;
