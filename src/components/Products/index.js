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
  background-color: #13131a;

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
      transition: all 0.4s ease-out;

      &:hover {
        border: 1px solid var(--orange-secondary);
      }

      


      

      /* &:hover .products-item__overlay {
        display: none;
      } */

      .products-item__overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;


        background-color: hsla(0, 0%, 0%, 0.4);
      }

      .products-item__text {
        position: relative;
        display: flex;
        flex-direction: column;
        z-index: 10;

        h3 {
          font-size: 1.4rem;
        }

        * + * {
            margin-top: 1em;
        }
      }

      .cta-button {
        font-size: 0.9rem;
        width: 5em;
        background-color: var(--orange-primary);
        padding: 0.4em 0.7em;
        border-radius: 20px;
        outline: none;
        cursor: pointer;
        text-align: center;

        &:hover {
          background-color: var(--orange-secondary);
        }
      }
    }

    @media (min-width: 45em) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;


      .products-item {

        .products-item__text {
          /* position: relative; */

          h3 {
            position: absolute;
            top: 50%;
            /* transform: translateY(); */
            transition: all 0.3s ease-out;
          }

          .cta-button {
            opacity: 0;
            visibility: hidden;
            transition: transform 0.3s ease-out;
            transition: visibility 1s linear 3s;
            transition: opacity .3s ease-out 0s;
          }
        }

        &:hover .products-item__text {
          h3 {
            top: 0;
          }

          .cta-button {
            visibility: visible;
            opacity: 1;
            transform: translateY(1em);
            
            transition-delay: 0s;

          }
        }



        &:nth-child(3) {
        grid-column: span 2;
      }




      }

      


    }
  }
`;

export default Products;
