import classes from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import MENU_ITEMS from "./Data/data";
import CallToAction from "./Components/CallToAction/CallToAction";

function App() {
  return (
    <div>
        <Navbar />
      <div className={classes.container_centre}>
        <CallToAction/>
      </div>
    </div>
  );
}

export default App;
