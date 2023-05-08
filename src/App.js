import classes from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import MENU_ITEMS from "./Data/data";
import CallToAction from "./Components/CallToAction/CallToAction";
import Menu from "./Components/Menu/Menu";
import { useState } from "react";

function App() {
  const [basketItems, setBasketItems] = useState([])
  return (
    <div>
      <Navbar basketItems={basketItems} setBasketItems={setBasketItems}/>
      <div className={classes.container_centre}>
        <CallToAction />
        <div className={classes.container_menu}>
          {MENU_ITEMS.map((item) => {
            return <Menu basketItems={basketItems} setBasketItems={setBasketItems} item={item} key={item.id}></Menu>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
