import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;

  background-color: none;
  padding: 0 1.5em;

  @media (min-width: 35em) {
    padding: 0;
  }

  .nav-inner {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    top: 0;

    height: calc(85px + 1em);
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;

    .nav-menu {
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      width: 100%;
      height: 100%;

      @media (min-width: 35em) {
        border-bottom: 2px solid var(--palid-orange);
      }

      .menu-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5em;

        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 50;

        width: 0;
        margin: 0;
        padding: 0;

        list-style-type: none;
        overflow: hidden;

        background-color: var(--dark-blue);

        transition: width 0.3s ease-out;

        &.is-active li {
          opacity: 1;
        }

        li {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 1.5em;

          width: 90%;

          opacity: 0;
          transition: opacity 0.15s ease-out;

          div {
            width: 100%;
            a {
              display: block;
              width: 100%;
              font-size: 1.3rem;
              text-align: center;

              padding: 0.4em 0.7em;
              cursor: pointer;
              color: var(--white-secondary);
              transition: all 0.2s ease-out;



              @media (min-width: 35em) {
                font-size: 1.1rem;

                &:hover {
                  color: var(--palid-orange);
                }
              }
            }
          }
        }

        @media (min-width: 35em) {
          position: relative;

          flex-direction: row;
          gap: calc(85px + 2em);

          width: 100% !important;

          background: none;

          li {
            flex-direction: row;
            gap: 1em;

            width: initial;
            opacity: 1;
          }
        }
      }

      .menu-icon {
        position: absolute;
        top: 50%;
        right: 0;

        height: 55px;
        width: 30px;

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
      position: absolute;
      top: 50%;
      left: 50%;

      width: 85px;
      height: 85px;

      transform: translate(-50%, -40%);

      border-radius: 50%;

      @media (min-width: 35em) {
        background: none;
      }

      svg {
        height: 100%;
        width: 100%;

        g {
          fill: var(--white-secondary);
          stroke: var(--white-secondary);
        }
      }

      @media (min-width: 35em) {
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export default NavbarContainer;
