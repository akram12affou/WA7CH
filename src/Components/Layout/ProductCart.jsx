import React from 'react'
import  '../../styles/ProductCart.scss'
import StarIcon from '@mui/icons-material/Star';
function ProductCart({product}) {
    console.log(product)
     const {id,title,price,image,rating} = product
  return (
    <div key={id} className='product-cart-container'>
    <div className='img-container'>
        <img src={image} alt="" />
    </div>
    <div className='mini-description'>
        <p>{title.substring(0,10)}...</p>
        <p className='rate'>{rating.rate} <StarIcon/></p>
        <div className="price-info"><p className='price' >{price}$</p>&nbsp; <span class='old-price'>{+price + 500}$</span></div>
    </div>
    </div>
  )
}

export default ProductCart