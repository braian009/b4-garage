import styled from "styled-components";

const ContactContainer = styled.section`

display: grid;
place-items: center;

position: relative;

height: 70vh;
width: 100%;

background-color: var(--dark-blue);
background-image: url(${(props) => props.bg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;


.contact-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 5;

  width: 100%;

  background-color: rgba(0, 0, 0, 0.85);
}

.contact-inner {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  place-items: center;
  gap: 1.5em;

  position: relative;
  z-index: 10;

  height: 60%;
  width: 100%;
  max-width: 620px;

  padding: 1em;
  margin: 0 auto;

  .contact-socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;

    align-self: start;

    svg {
      width: 30px;
      height: 30px;

      fill: var(--white-secondary);
      transition: all 0.2s ease-out;

      cursor: pointer;
      &:hover {
        fill: var(--palid-orange);

        transform: scale(1.1);
      }
    }
  }

  .contact-newsletter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    align-self: end;

    width: 100%;

    h3 {
      font-weight: normal;
      color: var(--white-primary);
    }

    div {
      display: flex;
      justify-content: center;
      gap: 0.5em;

      width: 100%;

      margin-top: 1em;

      input {
        font-size: 1rem;

        width: 100%;
        padding: 0 0.5em;
        background: none;
        color: var(--white-secondary);

        outline: none;
        border: none;
        border-bottom-left-radius: 20px;
        border-top-left-radius: 20px;
        border-bottom: 1px solid var(--white-secondary);
        border-left: 1px solid var(--white-secondary);
        
        transition: all 0.2s ease-out;
        

        &:focus {
          border-bottom: 1px solid var(--orange-primary);
          border-left: 1px solid var(--orange-primary);
        }
      }

      .contact-newsletter__button {
        font-size: 0.9rem;
        width: 6em;
        padding: 0.5em 0.8em;

        align-self: flex-end;

        border-radius: 20px;          
        background-color: var(--orange-primary);
        box-shadow: 4px 4px 0px var(--gray-primary);

        outline: none;
        border: none;

        color: var(--white-secondary);
        transition: all 0.2s ease-out;
        cursor: pointer;

        &:hover {
          background-color: var(--orange-secondary);
        }

        &:active {
          box-shadow: none;
          transform: translate(4px, 4px);
        }
      }
    }
  }
}
`;

export default ContactContainer;