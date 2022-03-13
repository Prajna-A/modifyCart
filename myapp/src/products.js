import React from 'react';
import {connect} from 'react-redux';
const Products=(props)=>{
    const addclick=(e)=>{
        props.dispatch({type:'ADDPRODUCT',payload:e})
    }
    const lessclick=(i)=>{

        if(props.cart.cartproducts.length>0){
        
            props.cart.cartproducts.splice(i,1)
            
        props.dispatch({type:'LESSPRODUCT',payload:props.cart.cartproducts})
        }else{
            alert("your box empty")
        }
    
    }
    return(
        <div style={{border:'3px solid blue',margin:'5px',padding:'5px'}}>
            <h1 style={{color:'blue'}}>Games</h1>
            <ul>
                {
                    props.products.products.map((p,i)=>{
                        return(<div style={{border:'3px solid #0066FF',margin:'1px',padding:'1px',backgroundColor:'paleblue'}} >
                                    <b>
                                         <li key={p.id} style={{color:'blue'}}>{p.itemname}---{p.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button onClick={()=>{addclick(p)}} style={{backgroundColor:'lightblue'}}>+</button>&nbsp;&nbsp;&nbsp;
                                            <button onClick={()=>{lessclick()}}style={{backgroundColor:'lightblue'}}>-</button>
                                         </li>
                                    </b>
                                </div>)
                    })
                }
            </ul>
        </div>
    )
}
export default connect(store=>{return store})(Products);