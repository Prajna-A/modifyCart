import React from 'react';
import { connect } from 'react-redux';
const Cart = (props) => {
  console.log(props);
  const TotalPrice = () => {
    var total = 0;
    for (var i = 0; i <= props.cart.cartProducts.length - 1; i++) {
      total = total + props.cart.cartProducts[i].price;
    }
    return total;
  };
  return (
    <div>
        <div style={{color:'white'}} className="row" content="width=device-width, initial-scale=1">
         <h2 className='column'>cartItems:<hr/><hr/>{props.cart.cartProducts.length}</h2> 
          <h2  className='column'> TotalPrice:<hr/><hr/>{TotalPrice()}</h2>
        </div>
       
    </div>
  );
};
export default connect((store) => store)(Cart);
