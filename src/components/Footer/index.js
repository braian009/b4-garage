import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
        <div className="footer-overlay"></div>

      <div className="footer-inner">
        <div>Developed by <b>Braian Yanquín</b></div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  display: grid;
  place-items: center;

  height: 85px;
  width: 100%;
  background: var(--black-primary);

  position: relative;

  .footer-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.85)
  }

  .footer-inner {
    width: 100%;
    padding: 1em;
    max-width: 620px;
    margin: 0 auto;
    position: relative;

    div {
        font-size: 0.85em;
        text-align: center;
        font-style: italic;
        letter-spacing: 0.03em;
        color: var(--dark-white);
    }
  }
`;


export default Footer;