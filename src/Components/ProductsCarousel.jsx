import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProductCarousel.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFirstThreeProductsData } from "../redux/actions";
import axios from "axios";
import LoadingSpinner from "./Layout/LoadingSpinner";
function ProductsCarousel() {
  const firstTreeProducts = useSelector((state) => state.firstTreeProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch(fetchFirstThreeProductsData(res.data.slice(0, 3)));
    });
  }, []);
  return (
   firstTreeProducts.length == 0 ? <LoadingSpinner/> 
   :

    (<div className="carousel-container">
      <div className="carousel">
        <Carousel variant="dark">
          {firstTreeProducts.map((product) => {
            return (
              <Carousel.Item>
                <div className="carousel-insight">
                  <div className="description">
                    <h2>{product.title}</h2>
                    <span>{product.description.substring(0, 200)}</span>
                    <br />
                    <h5>{product.price} $ Only</h5>
                    <Link  to={`/productdetails/${product.id}`}><button>Buy Now</button></Link>
                  </div>
                  <img
                    className="img"
                    src={product.image}
                    alt="First slide"
                    width="100px"
                  />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>)
  );
}

export default ProductsCarousel;
