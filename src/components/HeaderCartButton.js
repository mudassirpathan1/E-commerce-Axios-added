import React, { Fragment, useContext } from 'react'
import CartContext from '../store/cart-context'
import './HeaderCartButton.css'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  let quantity=0
  cartCtx.items.forEach(item=>{
    quantity+=Number(item.quantity)
  })

  return (
    <Fragment>
      <button onClick={props.onShow}>Cart</button>
      <span>{quantity}</span>
    </Fragment>
  )
}

export default HeaderCartButton;
