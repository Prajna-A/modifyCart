import React from 'react';


import {Provider} from 'react-redux';
import store from './reducers/store';
import Products from './products';
import Cart from './cart';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      firstname:"Pragnya-Raghavendra"
    }
  }
  render(){
    return(
      <Provider store={store}>
         <div style={{ backgroundColor:'black'}}>
           <h1 style={{fontFamily:'fantasy',fontSize:'50px',color:'white',textAlign:'center'}}>GAMES STORE</h1>
           <Products/><br/>
           <Cart/>
           
        </div>
      </Provider>
     
    )
  }
}
export default App;