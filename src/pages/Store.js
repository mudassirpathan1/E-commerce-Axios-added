import React from 'react'
import Cart from '../components/Cart/Cart'
const Store = (props) => {
  return (
    <div>
       {props.cart && <Cart onClose={props.onClose} />}
        <div className="title">
          <h1>The Generics</h1>
        </div>
        <h1 className="category">Music</h1>
        
       
    </div>
  )
}

export default Store
