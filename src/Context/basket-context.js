import React, {useEffect, useState} from "react";
const BasketContext = React.createContext({
  basketItems: [{}],
  setBasketItems: () => {},
});

export const BasketContextProvider = (props) => {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(()=>{
    const handleFetch = async () => {
      const res =
        await fetch("https://react-app-starwars-udemy-default-rtdb.firebaseio.com/meals.json");
      const data = await res.json();
      setBasketItems(data);
    };
    handleFetch();
  },[])

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