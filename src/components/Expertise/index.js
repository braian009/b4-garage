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
            <h3>Speed Essentials</h3>
            <h5>
            Unlock our vehicle's full racing potential with our special components and services.
            </h5>
          </div>
        </div>
        <div className="expertise-item">
          <div className="expertise-item__overlay"></div>

          <div className="expertise-item__text">
            <h3>Daily Driver Solutions</h3>
            <h5>
            Elevate your daily drive with essential services and enhancements.
            </h5>
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
  position: relative;



  .expertise-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    }



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

        background-color: var(--blackk);
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
          background-color: var(--orange-primary);

          padding: 0.4em 0.7em;
          border-radius: 20px;
          outline: none;
          transition: all 0.3s ease-out;

          text-align: center;
          cursor: pointer;

          &:hover {
            background-color: var(--orange-secondary);
          
          }
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
