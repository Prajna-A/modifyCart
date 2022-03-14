import React from 'react';
import { connect } from 'react-redux';
import './App.css';
const Products = (props) => {

  const reset=(i)=>{
         
          props.dispatch({type:'reset'})
  }
  const addCart = (prod) => {
         props.dispatch({ type: 'ADDPRODUCT', payload: prod });
        };
  const lessCart = (index) => {
        props.cart.cartProducts.splice(index, 1);
        props.dispatch({ type: 'LESSPRODUCT', payload: props.cart.cartProducts });
        };
  return (
    <div className='row' content="width=device-width, initial-scale=1">
        
     <div style={{ color:'white' }} className="column">
     <h1 style={{color:'white'}}>Games</h1>
             { 
             props.products.products.map((p, i) => {
             return (
            
     <div style={{margin:'5px',padding:'5px'}}>
            {p.itemname}  &nbsp;&nbsp;&nbsp;
              <button className='button'
                onClick={() => {
                  addCart(p);
               }
             }
              >
                ADD TO CART
              </button>
    </div>
            
          );
        })}
    </div>
    <div className='column'>
    <div>
          <h1 style={{color:'white'}}>Cart Games</h1>
          <button className='button' onClick={()=>{reset()}} style={{float:'right'}}>Reset</button>
          {
            props.cart.cartProducts.map((t, i) => {
            return (
     <div>
              <h3 style={{color:'white'}}>{t.itemname} &nbsp;&nbsp;----{t.price} 
                <button   className="button"onClick={()=>{addCart(t)}} >&#43;</button>
                &nbsp;&nbsp;
                <button  className="button" onClick={()=>{lessCart(i)}}>&minus;</button>
                </h3>   
    </div>
            );
          })}
   </div>
    </div>
    </div>
  );
};
export default connect((store) => store)(Products);
