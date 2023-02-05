import * as React from "react";
import styled from "styled-components";
import expertise1 from "../../assets/images/expertise1.jpg";
import expertise2 from "../../assets/images/expertise5.jpg";

const expertiseList = [
  {
    title: "Speed Essentials",
    description:
      "Unlock our vehicle's full racing potential with our special components and services.",
    services: [
      "Exhaust Systems",
      "High-Performance Brake Kits",
      "Air Intake Systems",
      "Chassis Reinforcement",
      "Aerodynamic Upgrades",
    ],
  },
  {
    title: "Daily Driver Solutions",
    description:
      "Elevate your daily drive with essential services and enhancements.",
    services: [
      "Tire Services",
      "Engine Tune-Ups",
      "Electrical Repairs",
      "Brake Maintenance",
      "Steering & Alignment Services",

    ],
  },
];

const Expertise = () => {
  return (
    <ExpertiseContainer>
      <div className="expertise-inner">
        {expertiseList.map((expertise, i) => {
          return (
            <div className="expertise-item" key={`expertise-${i}`}>
              <div className="expertise-item__overlay"></div>
              <div className="expertise-item__text">
                <h3>{expertise.title}</h3>
              </div>
              <div className="expertise-item__list">
                <ul>
                  {expertise.services.map((service, i) => {
                    return <li key={`service-${i}`}>{service}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </ExpertiseContainer>
  );
};

const ExpertiseContainer = styled.section`
  height: 100vh;
  width: 100%;
  background-color: var(--black-primary);
  position: relative;

  border-bottom: 1px solid var(--orange-primary);


  .expertise-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

   

    .expertise-item {
      position: relative;
      height: 50%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 35% 65%;
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
        align-self: end;
        
        h3 {
          font-style: italic;
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

      .expertise-item__list {
        position: relative;
        z-index: 10;
        align-self: start;
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;

          li {
            text-align: left;
            font-size: 0.9rem;
            color: var(--white-secondary);
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
