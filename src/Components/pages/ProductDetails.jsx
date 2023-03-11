import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/ProductDetails.scss";
import LoadingSpinner from "../Layout/LoadingSpinner";
import { fetchProductDetails } from "../../redux/actions";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { addToCart ,removeFromCart} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
function ProductDetails() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const PDetails = useSelector((state) => state.PDetails);
  const CartItems = useSelector((state) => state.CartItems);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        dispatch(fetchProductDetails(res.data));
      })
      .then((res) => setLoading(false));
  }, []);
  const existOrNot = (e) => {
    return CartItems.find((item) => item.id == e.id) 
  }
  const addToCartFun = (item) => {
    if(!existOrNot(item)){
      dispatch(addToCart(item));
      return;
    }
    dispatch(removeFromCart(item));
  };
  return (
    <Fragment>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {PDetails?.map((e) => {
            return (
              <div className="product-container">
                <div>
                  <img src={e?.image} alt="" />
                </div>
                <div>
                  <h3>{e?.title}</h3>
                  <p className="rating">
                    {e?.rating?.rate} <StarIcon />
                  </p>
                  <p className="price">
                    {" "}
                    {e?.price}$ &nbsp;
                    <span className="old-price">{+e?.price + 500}$</span>
                  </p>
                  <span className="description">{e?.description}</span>
                  <div className="buttons">
                    <Link to="/">
                      <button className="back">Back To Home</button>
                    </Link>

                    <button className="add" style={{
                      background: existOrNot(e)  && '#c60d65'
                    }} onClick={() =>addToCartFun(e) }>
                      {existOrNot(e) ? (
                        <> Remove From Cart</>
                      ) : (
                        <>Add To Cart</>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </Fragment>
  );
}

export default ProductDetails;
