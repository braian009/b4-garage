import * as React from "react";
import styled from "styled-components";

import ProductsItem from "./ProductsItem";


const productList = [
  { name: "Spoilers", image: require("../../assets/images/carspoiler.jpg") },
  { name: "Wheels", image: require("../../assets/images/carwheel.jpg") },
  { name: "Engine Fluids", image: require("../../assets/images/caroil.jpg") }
];

const Products = () => {
  return (
    <ProductsContainer id="products">
      <div className="products-inner">
        {productList.map((product, i) => {
          return (
            <ProductsItem key={`product-${i}`} bg={product.image} productName={product.name}/>
          )
        })}
      </div>
    </ProductsContainer>
  );
};

const ProductsContainer = styled.section`
  height: 100vh;
  width: 100%;

  border-bottom: 2px solid var(--palid-orange);

  .products-inner {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    @media (min-width: 45em) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`;

export default Products;
