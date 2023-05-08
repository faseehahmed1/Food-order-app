import React, {useState} from "react";
const BasketContext = React.createContext({
  basketItems: [{}],
  setBasketItems: () => {},
});

export const BasketContextProvider = (props) => {
  const [basketItems, setBasketItems] = useState([]);

  return (
    <BasketContext.Provider
      value={{
        basketItems: basketItems,
        setBasketItems: setBasketItems,
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContext;