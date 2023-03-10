import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ProductCart3 from '../Layout/ProductCart3'
import '../../styles/ShoppingCart.scss'
import {removeAll} from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
function ShoppingCart({user}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector(state => state.CartItems)
  const totalPrice = () => {
    let total = 0;
    for(let i=0; products.length > i ; i++){
      total = (products[i].q * products[i].price) + total
    } 
    return total.toFixed(2)
   }
   const toThForm = () => {
    navigate("/authForm");
  };
  const placeorder= () => {
    dispatch(removeAll())
  }
  useEffect(() => {
    totalPrice()
  },[products])
  return (
    <>
    <center>{products.length == 0 && <>you cart is empty</>}</center>
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
      <div className='price-details'>
        <h2 className='price-Details-title'>price Details</h2>
      {  products.length !== 0 && 
      <div>
           
          <div className='details-info-price'>
          <div>
          <span>Price ({products.length})</span>
          <span>Discounts</span>
          <span>Delivery charges</span>
          </div>
          <div>
          <span>{totalPrice()}</span>
          <span style={{color :'green'}}>10</span>
          <span style={{color :'green'}}>Free</span>
          </div>
          </div>
          <br />
          <div className='hr'/>
          <br />
          <div className='total-amount-container'>
          <span>Total amount</span>
          <span>{(totalPrice()-10).toFixed(2)} $</span> 
          </div>
          <span class='save-quote' style={{color :'green'}}>you will save 10$ on this order</span>
          <br />
          {!user?.displayName ?  <>
          <button class='place-order-button' disabled={true}>Place order</button>
          <br />
          <span onClick={toThForm} className='info'>Login to place order</span>
          </>    
          : <>
          <button class='place-order-button-con' onClick={placeorder}>Place order</button>
          </>
          }
 
          
        </div>}
        
      </div>
      
    </div>
    </>
  )
}

export default ShoppingCart