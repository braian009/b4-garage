import * as React from "react";
import styled from "styled-components";
import { ReactComponent as MenuDots } from "../../assets/icons/menudots.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrowright.svg";

const MenuIcon = ({ isActive }) => {
  return (
    <MenuIconContainer>
      <div className={`menu-icon-inner ${isActive ? 'active' : ''}`}>
        {isActive ? <ArrowRight /> : <MenuDots />}
      </div>
    </MenuIconContainer>
  );
};

const MenuIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  transition: all 0.3s ease-out;


  .menu-icon-inner {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;


    svg {
      stroke: var(--white-primary);
      fill: var(--white-primary);
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-out;

      &:hover {
        stroke: var(--black-primary);
        fill: var(--black-primary);

      }
    }

    &.active {
        svg {
            stroke: var(--white-primary);
        fill: var(--white-primary);
            
        }
    }
  }
`;

export default MenuIcon;
