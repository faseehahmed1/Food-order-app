import { useContext } from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";
import BasketContext from "../../Context/basket-context";
import { handlePlus, handleMinus } from "../../Handler/basket-handler";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Overlay = ({ onClick }) => {
  const ctx = useContext(BasketContext);
  const totalCost = ctx.basketItems
    .reduce((total, item) => total + +item.cost * item.quantity, 0)
    .toFixed(2);

  return (
    <div className={classes.modal}>
      {ctx.basketItems.map((item, index) => {
        return (
          <div className={classes.items_cont}>
            <div>
              <h3 className={classes.dish}>{item.dish}</h3>
              <div className={classes.items_amountCost}>
                <p className={classes.cost}>$ {item.cost}</p>
                <p className={classes.amount}>x {item.quantity}</p>
              </div>
            </div>
            <div className={classes.button_cont}>
              <button
                className={classes.button}
                onClick={() =>
                  handlePlus(index, ctx.basketItems, ctx.setBasketItems)
                }
              >
                +
              </button>
              <button
                className={classes.button}
                onClick={() =>
                  handleMinus(index, ctx.basketItems, ctx.setBasketItems)
                }
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      <div className={classes.total}>
        <div>
          <h2>Total Amount</h2>
        </div>
        <div>
          <h2>${totalCost}</h2>
        </div>
      </div>
      <div>
        <footer className={classes.actions}>
          <button className={`${classes.buttonBtm} ${classes.margin}`} onClick={onClick}>
            Cancel
          </button>
          <button className={classes.buttonBtm}>
            Order
          </button>
        </footer>
      </div>
    </div>
  );
};
const Modal = ({ setModal }) => {
  return (
    <div>
      {ReactDom.createPortal(
        <Backdrop
          onClick={() => {
            setModal(false);
          }}
        />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Overlay
          onClick={() => {
            setModal(false);
          }}
        />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default Modal;
