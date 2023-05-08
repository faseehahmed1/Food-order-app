import classes from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import MENU_ITEMS from "./Data/data";
import CallToAction from "./Components/CallToAction/CallToAction";
import Menu from "./Components/Menu/Menu";
import { useContext } from "react";
import BasketContext from "./Context/basket-context";

function App() {
  const ctx = useContext(BasketContext);
  const menuItems = (MENU_ITEMS.map((item) => {
    return <Menu basketItems={ctx.basketItems} setBasketItems={ctx.setBasketItems} item={item} key={item.id}></Menu>;
  }))

  return (
    <div>
      <Navbar/>
      <div className={classes.container_centre}>
        <CallToAction />
        <div className={classes.container_menu}>
          {menuItems}
        </div>
      </div>
    </div>
  );
}

export default App;
