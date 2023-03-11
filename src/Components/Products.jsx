import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Products.scss";
import axios from "axios";
import ProductCart from "./Layout/ProductCart";
import { fetchOtherProducts } from "../redux/actions";
import ProductCart2 from "./Layout/ProductCart2";

import { useNavigate } from "react-router-dom";
function Products() {
  const OtherProducts = useSelector((state) => state.OtherProducts);
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState([5, 13]);
  const navigate = useNavigate();
  const navig = (id) => {
    navigate(`/productdetails/${id}`);
    window.scrollTo(0,0)
  };
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch(fetchOtherProducts(res.data.slice(3, res.data.length)));
    });
  }, []);
  return (
    <Fragment>
      <div className="products">
        <h3>BRAND NEW PRODUCT :</h3>
        <div className="brand-new-container">
          {OtherProducts.slice(0, 3).map((product) => {
            return (
              <div onClick={() => navig(product.id)}>
                <ProductCart product={product} />
              </div>
            );
          })}
        </div>
        <h3>EXCLUSIVE OFFER :</h3>
        <div className="exclusive-offer-container">
          {OtherProducts.slice(3, 5).map((product) => {
            return (
              <div onClick={() => navig(product.id)}>
                <ProductCart2 product={product} />
              </div>
            );
          })}
        </div>

        <h3>ALL PRODUCTS :</h3>
        <div className="brand-new-container">
          {OtherProducts.slice(pagination[0], pagination[1]).map((product) => {
            return (
              
               <div onClick={() => navig(product.id)}>
                <ProductCart product={product} />
                </div>
              
            );
          })}
        </div>
        <div className="pages">
          <button
            class="button-1-page"
            onClick={() => setPagination([5, 13])}
            style={{
              background:
                pagination[0] == 5 && pagination[1] == 13 ? "#c60d65" : "white",
            }}
          >
            1
          </button>
          <button
            class="button-2-page"
            onClick={() => setPagination([13, OtherProducts.length])}
            style={{
              background:
                pagination[0] == 13 && pagination[1] == OtherProducts.length
                  ? "#c60d65"
                  : "white",
            }}
          >
            2
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Products;
