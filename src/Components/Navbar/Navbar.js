import classes from "./Navbar.module.css";
import shoppingCartImage from "../../Images/shopping-cart.png";
import { useState } from "react";
import Modal from "../Modal/Modal";

const MENU_ITEMS = [
  {
    id: 1,
    dish: 'Spaghetti Carbonara',
    cost: 12.99,
    amount: 2
  },
  {
    id: 2,
    dish: 'Pad Thai',
    cost: 9.99,
    amount: 3
  },
  {
    id: 3,
    dish: 'Chicken Tikka Masala',
    cost: 14.99,
    amount: 1
  },
];

const Navbar = () => {
  const [modal, setModal] = useState(false)

  return (
    <>
    {modal && <Modal items={MENU_ITEMS} setModal={setModal}/>}
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
        <div className={classes.basket_count}>1</div>
      </button>
    </div>
      </>
  );
};

export default Navbar;
