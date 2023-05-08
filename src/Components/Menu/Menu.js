import { useState } from "react";
import classes from "./Menu.module.css";

const Menu = ({ item, basketItems, setBasketItems }) => {
  const [amount, setAmount]= useState(1)
  const { dish, description, cost } = item;

  const handleClick=()=>{
    const itemIndex = basketItems.findIndex((basketItem) => basketItem.id === item.id);
    if (itemIndex === -1) {
      setBasketItems([...basketItems, { ...item, quantity: amount }]);
    } else {
      const newBasketItems = [...basketItems];
      newBasketItems[itemIndex].quantity = Number(newBasketItems[itemIndex].quantity) + Number(amount);
      setBasketItems(newBasketItems);
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.containerLHS}>
        <h3>{dish}</h3>
        <p>{description}</p>
        <p>$ {cost}</p>
      </div>
      <div className={classes.containerRHS}>
        <div className={classes.containerRHS_amount}>
          <p>Amount</p>
          <input type="number" onChange={(e)=>{setAmount(e.target.value)}} value={amount} min={1}/>
        </div>
        <button onClick={handleClick}>+ Add</button>
      </div>
    </div>
  );
};

export default Menu;
