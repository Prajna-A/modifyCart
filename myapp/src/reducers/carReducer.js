const initialState = {
    cartproducts: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    if (action.type === 'ADDPRODUCT') {
      return { ...state, cartproducts: [...state.cartproducts, action.payload] };
    }
    if (action.type === 'LESSPRODUCT') {
      return { ...state, cartproducts: [...action.lessload] };
    }
    if (action.type === 'reset') {
      return { ...initialState };
    }
    return state;
  };
  
  export default cartReducer;
  