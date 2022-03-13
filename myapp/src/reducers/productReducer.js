const initialState = {
    products: [
      {
        itemname: 'vollyball',
        price: 350,
       id:1
      },
      {
        itemname: 'football',
        price: 700,
        id:2
  
      },
      {
        itemname: 'hockey',
        price: 120,
        id:3
  
      },
    ],
  };
  const productsReducer = (state = initialState, action) => {
    return state;
  };
  export default productsReducer;
  