import styled from "styled-components";

const ServicesItem = ({ serviceTitle, bg, serviceList }) => {
  return (
    <ServicesItemContainer bgimage={bg}>
      <div className="services-item__overlay"></div>
      <div className="services-item__title">
        <h3>{serviceTitle}</h3>
      </div>
      <div className="services-item__list">
        <ul>
          {serviceList.map((service, i) => {
            return <li key={`service-${i}`}>{service}</li>;
          })}
        </ul>
      </div>
    </ServicesItemContainer>
  );
};

const ServicesItemContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
  gap: 0.5em;

  background-image: url(${(props) => props.bgimage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .services-item__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;

    background-color: rgba(19, 19, 27, 0.8);
  }

  .services-item__title {
    position: relative;
    z-index: 10;
    
    align-self: end;
    padding: 0.5em 0;

    border-radius: 50%;
    border: 2px solid var(--palid-orange);

    overflow: visible;

    transform: skew(-77deg);

    h3 {
      transform: skew(77deg);
      font-style: italic;
      font-weight: normal;
    }
  }

  .services-item__list {
    align-self: start;
    position: relative;
    z-index: 10;

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        font-size: 0.9rem;
        text-align: left;
        color: var(--white-secondary);
      }
    }
  }
`;

export default ServicesItem;
