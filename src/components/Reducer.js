

const Reducer = (cart = [], action) => {
  if (action.type === "ADD") {
    const tempcart = cart.filter((data) => data.id === action.payload.id);
    if (tempcart < 1) {
      return [...cart, action.payload];
    } else {
      return cart;
    }
  }
  if (action.type === "REMOVE") {
    return cart.filter((data) => data.id !== action.payload.id);
  }
  if (action.type === "INCREASE") {
    const tempcart = cart.map((data) => {
      if (data.id === action.payload.id) {
        return { ...data, quantity: data.quantity + 1 };
      }
      return data;
    });
    return tempcart;
  }
  if (action.type === "DECREASE") {
    const tempcart = cart.map((data) => {
      if (data.id === action.payload.id) {
        return { ...data, quantity: data.quantity - 1 };
      }
      return data;
    });
    return tempcart;
  }
  return cart;
};
export default Reducer;