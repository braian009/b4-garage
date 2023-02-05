import * as React from "react";
import styled from "styled-components";
import { ReactComponent as B4Logo } from "../../assets/icons/B4_logo.svg";
import MenuIcon from "./menuIcon";

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    const menu = document.querySelector(".menu-list");

    if (isActive) {
      menu.style.setProperty("width", `60vw`);

      document.body.style.overflowY = "hidden";
    } else {
      menu.style.setProperty("width", "0px");
      document.body.style.overflowY = "visible";
    }
  }, [isActive]);

  return (
    <NavbarContainer>
      <div className="nav-inner">
        <div className="nav-logo">
          <B4Logo />
        </div>
        <div className="nav-menu">
          <ul className={`menu-list ${isActive ? "is-active" : ""}`}>
            <li className="menu-list__first-group">
              <div>About</div>
              <div>Services</div>
            </li>
            <li className="menu-list__second">
              <div>Products</div>
              <div>Events</div>
            </li>
          </ul>
          <div
            id="dots-icon"
            className={`menu-icon ${isActive ? "is-active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsActive(!isActive);
            }}
          >
            <MenuIcon isActive={isActive} />
          </div>
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
  background-color: none;
  padding: 0 1.5em;
  z-index: 50;

  @media (min-width: 35em) {
    padding: 0;

  }

  .nav-inner {
    position: relative;
    top: 0;
    width: 100%;
    margin: 0 auto;
    max-width: 1080px;
    height: calc(85px + 1em);
    display: flex;
    justify-content: center;
    align-items: center;

   

    .nav-menu {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 35em) {
    border-bottom: 1px solid var(--orange-primary);

      }


      .menu-list {
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        width: 60vw;
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 0;
        overflow: hidden;

        box-shadow: none;
        background-color: var(--dark-blue);

        transition: width 0.3s ease-out;

        z-index: 50;

        &.is-acitive {
        background-color: var(--dark-blue);
        }

        &.is-active li {
          opacity: 1;
        }

        li {
          display: flex;
          align-items: center;
          flex-direction: column;
          opacity: 0;
          transition: opacity 0.15s ease-out;
          width: 90%;

          div {
            font-size: 1.3rem;
            padding: 0.4em 0.7em;

            @media (min-width: 35em) {
              font-size: 1.1rem;
            }
          }

          div + div {
            margin-top: 1em;
          }
        }

        li + li {
          margin-top: 1em;
        }

        @media (min-width: 35em) {
          position: relative;
          width: 100% !important;
          flex-direction: row;

          background: none;
          box-shadow: none;

          li {
            flex-direction: row;
            width: initial;
            opacity: 1;

            &:nth-child(2) {
              margin-left: calc(85px + 2em);
            }

            div + div {
              margin-top: 0;
            margin-left: 1em;

            }
          }

          li + li {
            margin-top: 0;
          }

        }
      }

      .menu-icon {
        position: absolute;
        top: 50%;
        right: 0;
        width: 30px;
        height: 55px;
        transform: translateY(-30%);
        transition: all 0.3s ease-out;

        border-radius: 20px;
        z-index: 100;

        @media (min-width: 35em) {
          display: none;
        }
      }
    }

    .nav-logo {
      width: 85px;
      height: 85px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -40%);
    


      border-radius: 50%;

      @media (min-width: 35em) {
        background: none;

      }
      svg {
        height: 100%;
        width: 100%;

        g {
          fill: var(--gray-primary);
          stroke: var(--gray-primary);
        }
      }

      @media (min-width: 35em) {
        left: 50%;
      transform: translate(-50%, -50%);
      /* position: relative; */

      }
    }

 
  }
`;

export default Navbar;
