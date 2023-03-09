import React, { Fragment,useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux';
import '../styles/Products.scss'
import axios from 'axios';
import ProductCart from './Layout/ProductCart';
import {fetchOtherProducts} from '../redux/actions'
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
      {/* <h3>ALL PRODUCTS :</h3>
      <div>
        <button>+</button>
        1
        <button>-</button>
      </div> */}
      </div>
    </Fragment>
  )
}

export default Products