const Reducer = (cart = [], action) => {
  if (action.type === 'ADD') {
    const newItem = action.payload
    const tempcraft = cart.filter((product) => product.id === newItem.id)
    if (tempcraft < 1) {
      return [...cart, newItem]
    } else {
      return cart;
    }
  }
  return cart;
}

export default Reducer;