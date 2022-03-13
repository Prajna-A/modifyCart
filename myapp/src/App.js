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
         <div style={{border:'3px solid blue', margin:'5px', padding:'5px', backgroundColor:'lavender'}}>
           <h1>GAMES STORE</h1>
           <Products/><br/>
           <Cart/>
           
        </div>
      </Provider>
     
    )
  }
}
export default App;