const handlePlus = (index, basketItems, setBasketItems) => {
  setBasketItems((prevBasket) => {
    const newBasket = [...prevBasket];
    const updatedItem = {
      ...newBasket[index],
      quantity: Number(newBasket[index].quantity) + 1,
    };
    newBasket[index] = updatedItem;
    return newBasket;
  });
};

const handleMinus = (index, basketItems, setBasketItems) => {
  setBasketItems((prevBasket) => {
    const newBasket = [...prevBasket];
    if (newBasket[index].quantity > 1) {
      const updatedItem = {
        ...newBasket[index],
        quantity: newBasket[index].quantity - 1,
      };
      newBasket[index] = updatedItem;
    } else {
      const newBasketItems = [
        ...basketItems.slice(0, index),
        ...basketItems.slice(index + 1),
      ];
      return newBasketItems;
    }
    return newBasket;
  });
};

export { handlePlus, handleMinus };
