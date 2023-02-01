import * as React from "react";
import styled from "styled-components";
import carspoiler from "../../assets/images/carspoiler.jpg";
import carwheel from "../../assets/images/carwheel.jpg";
import caroil from "../../assets/images/caroil.jpg";


const Products = () => {
  return (
    <ProductsContainer>
      <div className="products-inner">
        <div
          className="products-item"
          style={{ backgroundImage: `url(${carspoiler})` }}
        >
          <div className="products-item__overlay"></div>
          <div className="products-item__text">

          <h3>product</h3>
          <div className="cta-button">More</div>
          </div>
        </div>
        <div
          className="products-item"
          style={{ backgroundImage: `url(${carwheel})` }}
        >
          <div className="products-item__overlay"></div>
          <div className="products-item__text">

          <h3>product</h3>
          <div className="cta-button">More</div>
          </div>
        </div>
        <div
          className="products-item"
          style={{ backgroundImage: `url(${caroil})` }}
        >
          <div className="products-item__overlay"></div>
          <div className="products-item__text">
            <h3>product</h3>
            <div className="cta-button">More</div>
          </div>
        </div>
      </div>
    </ProductsContainer>
  );
};

const ProductsContainer = styled.section`
  height: 100vh;
  width: 100%;
  background-color: var(--white-primary);

  .products-inner {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0.5em;
  padding: 0.5em;


    .products-item {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      position: relative;
      display: grid;
      place-items: center;
      box-shadow: 4px 4px 8px var(--black-secondary);
      border-radius: 0.4em;

      /* &:hover .products-item__overlay {
        display: none;
      } */

      .products-item__overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      border-radius: 0.4em;


        background-color: hsla(0, 0%, 0%, 0.4);
      }

      .products-item__text {
        position: relative;
        display: flex;
        flex-direction: column;
        z-index: 10;

        * + * {
            margin-top: 1em;
        }
      }

      .cta-button {
        font-size: 0.9rem;
        width: 5em;
        background-color: var(--black-primary);
        padding: 0.4em 0.7em;
        border-radius: 20px;
        outline: none;

        text-align: center;
      }
    }

    @media (min-width: 45em) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      .products-item:nth-child(3) {
        grid-column: span 2;
      }
    }
  }
`;

export default Products;
