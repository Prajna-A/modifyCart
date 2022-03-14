const initialState = {
    cartProducts: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    if (action.type === 'ADDPRODUCT') {
      return { ...state, cartProducts: [...state.cartProducts, action.payload] };
    }
    if (action.type === 'LESSPRODUCT') {
      return { ...state, cartProducts: [...action.payload] };
    }
    if (action.type === 'reset') {
      return { ...initialState };
    }
    return state;
  };
  
  export default cartReducer;
  