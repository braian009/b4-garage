import * as React from "react";
import styled from "styled-components";
import expertise1 from "../../assets/images/expertise1.jpg";
import expertise2 from "../../assets/images/expertise5.jpg";

const Expertise = () => {
  return (
    <ExpertiseContainer>
      <div className="expertise-inner">
        <div className="expertise-item">
          <div className="expertise-item__overlay"></div>
          <div className="expertise-item__text">
            <h3>Racing kits</h3>
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, deleniti!
            </h5>
            <div className="cta-button">More</div>
          </div>
        </div>
        <div className="expertise-item">
          <div className="expertise-item__overlay"></div>

          <div className="expertise-item__text">
            <h3>Every day</h3>
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, deleniti!
            </h5>
            <div className="cta-button">More</div>
          </div>
        </div>
      </div>
    </ExpertiseContainer>
  );
};

const ExpertiseContainer = styled.section`
  height: 100vh;
  width: 100%;
  background-color: var(--black-primary);
  border-bottom: 1px solid white;
  border-top: 1px solid white;

  .expertise-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .expertise-item {
      position: relative;
      height: 50%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      place-items: center;

      .expertise-item__overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: hsla(0, 0%, 0%, 0.5);
      }

      &:nth-child(1) {
        background-image: url(${expertise1});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        /* opacity: 0.6; */
      }

      &:nth-child(2) {
        background-image: url(${expertise2});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        /* opacity: 0.6; */
      }

      .expertise-item__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        position: relative;
        z-index: 10;
        padding: 1em;
        /* border-radius: 0.7em; */
        * + * {
          margin-top: 1em;
        }

        h5 {
          text-align: center;
          line-height: 1.2;
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
    }

    @media (min-width: 40em) {
      flex-direction: row;

      .expertise-item {
        height: 100%;
        width: 50%;
      }
    }
  }
`;

export default Expertise;
