import styled from "styled-components";

const ProductsItem = ({ bg, productName,  }) => {
  return (
    <ProductsItemContainer productbg={bg}>
      <div className="products-item__overlay"></div>
      <div className="products-item__text">
        <h3>{productName}</h3>
        <div className="cta-button">More</div>
      </div>
    </ProductsItemContainer>
  );
};

const ProductsItemContainer = styled.div`
  display: grid;
  place-items: center;
  gap: 0.25em;

  height: 100%;
  width: 100%;

  background-image: url(${(props) => props.productbg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;

  transition: all 1.6s linear;


  .products-item__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.6);
  }

  .products-item__text {
    display: flex;
    flex-direction: column;
    gap: 0.25em;

    position: relative;
    z-index: 10;

    h3 {
      font-size: 1.5rem;
      text-align: center;
      text-shadow: 2px 2px 0px var(--gray-primary);
      color: var(--white-secondary);
    }
  }

  .cta-button {
    font-size: 0.9rem;
    text-align: center;
    margin: 0 auto;
    width: 5em;
    align-self: center;

    padding: 0.4em 0.9em;
    margin: 0;

    color: var(--white-primary);
    background-color: var(--orange-primary);


    border-radius: 20px;
    outline: none;
    cursor: pointer;

    transition: all 0.2s ease-out;

    &:hover {
      background-color: var(--orange-secondary);
    }
    &:active {
      background-color: var(--dark-blue);
    }
  }

  
  @media (min-width: 45em) {

    background-size: 140%;

    &:hover {
    background-size: 145%;

    }

    .products-item__text {
    h3 {
      transform: translateY(0.75em);
      transition: all 0.3s ease-out;
    }

    .cta-button {
      visibility: hidden;
      opacity: 0;

      transform: translateY(-0.75em);
    }
  }


    &:hover .products-item__text {
      h3 {
        transform: translateY(0);
      }

      .cta-button {
        transition-delay: 0s;
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
      }
    }

    &:nth-child(3) {
      grid-column: span 2;
    }
  }

  @media (min-width: 55em) {
    background-size: 115%;

    &:hover {
    background-size: 120%;

    }
  }
`;

export default ProductsItem;
