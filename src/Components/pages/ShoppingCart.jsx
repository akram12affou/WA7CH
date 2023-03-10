import React from 'react'
import { useSelector } from 'react-redux'
import ProductCart3 from '../Layout/ProductCart3'
import '../../styles/ShoppingCart.scss'
function ShoppingCart() {
  const products = useSelector(state => state.CartItems)
  console.log(products)
  return (
    <div className='shoppingCart-container'>
      <div></div>
      <div className='cart'>
        <h2 className='my-cart-title'>my Cart</h2>
       {products.map((item) => {
        return(
           <ProductCart3 item={item}/>
        )
       })}
      </div>
      <div></div>
      <div className='price-details'>
        <h2 className='price-Details-title'>price Details</h2>
        <div>

        </div>
      </div>
    </div>
  )
}

export default ShoppingCart