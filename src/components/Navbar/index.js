import * as React from "react";
import styled from "styled-components";
import { ReactComponent as B4Logo } from "../../assets/icons/B4_logo.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="nav-inner">
        <div className="nav-logo">
          <B4Logo />
        </div>
        <div className="nav-menu">
          <ul className="menu-list">
            <div className="menu-list__first-group">
              <li>About</li>
              <li>Products</li>
              <li>Sponsors</li>
            </div>
            <div className="menu-list__first-group">
              <li>Races</li>
              <li>Merch</li>
              <li>Contact</li>
            </div>
          </ul>
        </div>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: hsla(0, 0%, 0%, 0.6);


  .nav-inner {
    position: relative;
    top: 0;
    width: 100%;
    margin: 0 auto;
    max-width: 1080px;
    height: 5em;
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-menu {
      .menu-list {
        padding: 1.5em 2em;
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;

        margin: 0 auto;
        width: 47em;

        div {
          display: flex;
          flex-direction: row;
          align-items: center;
          &:nth-child(2) {
            margin-left: calc(85px + 3em);
          }

          li {
            font-size: 1.2rem;
            padding: 0.5em 0.8em;
          }
        }
      }
    }

    .nav-logo {
      width: 85px;
      height: 85px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      svg {
        height: 100%;
        width: 100%;

        g {
          fill: white;
          stroke: white;
        }
      }
    }
  }
`;

export default Navbar;
