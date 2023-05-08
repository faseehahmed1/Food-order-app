import classes from "./Navbar.module.css";
import shoppingCartImage from "../../Images/shopping-cart.png";
import { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import BasketContext from "../../Context/basket-context";

const Navbar = () => {
  const [modal, setModal] = useState(false)
  const ctx = useContext(BasketContext)
  const totalQuantity = ctx.basketItems.reduce((total, item) => total + +item.quantity, 0)

  return (
    <>
    {modal && <Modal setModal={setModal}/>}
    <div className={classes.container}>
      <div>
        <h1>React Meals</h1>
      </div>
      <button onClick={()=>{setModal(!modal)}} className={classes.basket_cont}>
        <div className={classes.cartIcon}>
          <img
            src={shoppingCartImage}
            width={25}
            height={25}
            alt="cart-icon"
          ></img>
        </div>
        Your cart&nbsp;&nbsp;
        <div className={classes.basket_count}>{totalQuantity}</div>
      </button>
    </div>
      </>
  );
};

export default Navbar;
