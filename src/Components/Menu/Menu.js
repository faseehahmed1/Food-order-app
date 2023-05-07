import classes from "./Menu.module.css";

const Menu = ({ item }) => {
  const { dish, description, cost } = item;
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
          <input type="number" value={1}></input>
        </div>
        <button>+ Add</button>
      </div>
    </div>
  );
};

export default Menu;
