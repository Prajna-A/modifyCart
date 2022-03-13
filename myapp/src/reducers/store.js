import { createStore, combineReducers } from 'redux';
import cartReducer from './carReducer';
import productsReducer from './productReducer';

const store = new createStore(
  combineReducers({
    cart: cartReducer,
    products: productsReducer,
  })
);

export default store;
