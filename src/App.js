import classes from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import CallToAction from "./Components/CallToAction/CallToAction";
import Menu from "./Components/Menu/Menu";
import { useContext } from "react";
import BasketContext from "./Context/basket-context";

function App() {
  const ctx = useContext(BasketContext);
  //  fetch the data and then map through it

  const menuItems = ctx.basketItems.map((item) => {
    return (
      <Menu
        basketItems={ctx.basketItems}
        setBasketItems={ctx.setBasketItems}
        item={item}
        key={item.id}
      ></Menu>
    );
  });

  return (
    <div>
      <Navbar />
      <div className={classes.container_centre}>
        <CallToAction />
        <div className={classes.container_menu}>{menuItems}</div>
      </div>
    </div>
  );
}

export default App;
