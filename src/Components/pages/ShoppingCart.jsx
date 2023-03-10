import React from 'react'
import { useSelector , useDispatch } from 'react-redux'

function ShoppingCart() {
  const dispatch = useDispatch()
  const products = useSelector(state.CartItems)
  return (
    <div>
      <div>
        <h2>my Cart</h2>
         
      </div>
      <div>
        <h2>price Details</h2>
      </div>
    </div>
  )
}

export default ShoppingCart