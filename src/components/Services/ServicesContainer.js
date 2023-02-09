import styled from "styled-components";

const ServicesContainer = styled.section`
  height: 100vh;
  width: 100%;
  background-color: var(--black-primary);
  position: relative;

  border-bottom: 2px solid var(--palid-orange);

  .services-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (min-width: 40em) {
      flex-direction: row;
    }
  }
`;

export default ServicesContainer;