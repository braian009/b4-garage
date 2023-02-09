import * as React from "react";
import heroBg from "../../assets/images/herobg.jpg";

import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/thinarrowright.svg";

import HeroContainer from "./HeroContainer";

const Hero = () => {
  return (
    <HeroContainer id="hero" bgimage={heroBg}>
      <div className="hero-overlay"></div>
      <div className="hero-inner">
        <div className="hero-header">
          <div className="hero-header__brand">
            <h2>B4</h2>
            <h4>customizations and repairs</h4>
          </div>
          <div className="cta-button">Order now</div>
        </div>
        <div className="hero-link">
          <ArrowRight />
          <a
            href="https://www.youtube.com/watch?v=IGjE_zgs2Hw"
            target="_blank"
            rel="noopener noreferrer"
          >
            see our work
          </a>
        </div>
        <div className="hero-socials">
          <div className="hero-socials__item">
            <Instagram />
          </div>
          <div className="hero-socials__item">
            <Twitter />
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};


export default Hero;
