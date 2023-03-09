import React from 'react'
import  '../../styles/ProductCart2.scss'

function ProductCart2({product}) {
     const {id,title,price,image,description} = product
  return (
    <div key={id} className='product-cart-container-2'>
    <div className='mini-description-2'>
        <p>{title.substring(0,30)}...</p>
        <div className="price-info"><p className='price' >{price}$</p>&nbsp; <span class='old-price'>{+price + 500}$</span></div>
        <span className="descrition">{description.substring(0,150)}...</span>
        <br />
        <button>Buy now</button>
    </div>
    <div className='img-container-2'>
        <img src={image} alt="" />
    </div>
    
    </div>
  )
}

export default ProductCart2