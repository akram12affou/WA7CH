import React, { Fragment,useEffect ,useState} from 'react'
import { useDispatch , useSelector} from 'react-redux';
import '../styles/Products.scss'
import axios from 'axios';
import ProductCart from './Layout/ProductCart';
import {fetchOtherProducts} from '../redux/actions'
import ProductCart2 from './Layout/ProductCart2';
function Products() {
  const OtherProducts = useSelector((state) => state.OtherProducts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch(fetchOtherProducts(res.data.slice(3, res.data.length)));
    });
  }, []);
  return (
    <Fragment>
      <div className='products'>
      <h3>BRAND NEW PRODUCT :</h3>
      <div className='brand-new-container'>
      {OtherProducts.slice(0,3).map((product) => {
        return(
          <>
          <ProductCart product={product}/>
          </>
        )
      })}
      </div>
      <h3>EXCLUSIVE OFFER :</h3>
      <div className='exclusive-offer-container'>
      {OtherProducts.slice(3,5).map((product) => {
        return(
          <>
          <ProductCart2 product={product}/>
          </>
        )
      })}
      </div>
     
      <h3>ALL PRODUCTS :</h3>
      <div className='brand-new-container'>
      {OtherProducts.slice(5,13).map((product) => {
        return(
          <>
          <ProductCart product={product}/>
          </>
        )
      })}
      </div>
      <div>
        <button>+</button>
        1
        <button>-</button>
      </div>
      </div>
    </Fragment>
  )
}

export default Products