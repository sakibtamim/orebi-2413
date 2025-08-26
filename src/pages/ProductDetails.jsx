import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  let productId = useParams();
  let [productData, setProductData] = useState({});
  let getProductDetailsData = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setProductData(response.data);
      });
  };
  useEffect(() => {
    getProductDetailsData();
  }, []);

  return (
    <section>
      <Container>
        <div className="">{productData.id}</div>
        <div className="">
          <img src={productData.thumbnail} alt="" />
        </div>
        <div className="">{productData.title}</div>
        <div className="">{productData.description}</div>
        <div className="">{productData.price} $</div>
        <div className="">{productData.stock} pcs in stock</div>
      </Container>
    </section>
  );
};

export default ProductDetails;
