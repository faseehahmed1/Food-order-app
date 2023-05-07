import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Overlay = ({ items, onClick }) => {
  return (
    <div className={classes.modal}>
      {items.map((item) => {
        return (
          <div className={classes.items_cont}>
            <div>
              <h3 className={classes.dish}>{item.dish}</h3>
              <div className={classes.items_amountCost}>
                <p className={classes.cost}>$ {item.cost}</p>
                <p className={classes.amount}>x {item.amount}</p>
              </div>
            </div>
            <div className={classes.button_cont}>
              <button className={classes.button}>+</button>
              <button className={classes.button}>-</button>
            </div>
          </div>
        );
      })}
      <div className={classes.total}>
        <div>
            <h2>Total Amount</h2>
        </div>
        <div>
            <h2>$123</h2>
        </div>
      </div>
      <div>
        <footer className={classes.actions}>
          <button className={classes.buttonBtm} onClick={onClick}>Cancel</button>
          <button className={classes.buttonBtm} onClick={onClick}>Order</button>
        </footer>
      </div>
    </div>
  );
};
const Modal = ({ items, setModal }) => {
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
          items={items}
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
