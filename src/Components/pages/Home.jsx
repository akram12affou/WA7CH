import React, { Fragment } from 'react'
import Products from '../Products'
import ProductsCarousel from '../ProductsCarousel'
function Home() {
  return (
    <Fragment>
     <ProductsCarousel/>
     <Products/>

    </Fragment>
  )
}

export default Home