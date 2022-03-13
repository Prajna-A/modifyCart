import React from 'react';
import {connect} from 'react-redux';
const Cart =(props)=>{
    const reset=(e)=>{
       
            props.dispatch({type:'RESET'})    
    }
    const totalprice=()=>{
        var total=0
        for(var i=0;i<=props.cart.cartproducts.length-1;i++){
            total=total+props.cart.cartproducts[i].price;
        }
        return total
    }
    return(
        <div style={{border:'2px solid blue',margin:'px',padding:'5px'}}>
        
 <button onClick={()=>{reset()}} style={{color:'blue',backgroundColor:'#99FFCC'}}>X</button>
            <h1 style={{color:'blue'}}>Cart Games</h1>
            <h3 style={{color:'blue'}}>selected Games:{props.cart.cartproducts.length}</h3>
            <h3 style={{color:'blue'}}>Amount:{totalprice()}</h3>
            
           <div style={{border:'1px solid blue',margin:'5px',padding:'5px'}}>
            {
                props.cart.cartproducts.map((c,i)=>{
                    return(<li key={i} style={{color:'blue'}}>
                             {c.itemname}-{c.price}&nbsp;&nbsp;&nbsp;
                    </li>)
                })
            }
            </div>
        </div>
    )
}
export default connect(store=>{return store})(Cart)