import * as React from "react";

import { HashLink as Link } from "react-router-hash-link";
import NavbarContainer from "./NavbarContainer";
import MenuIcon from "./menuIcon";

import { ReactComponent as B4Logo } from "../../assets/icons/B4_logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);
  const menuRef = React.useRef();

  React.useEffect(() => {
    const menu = document.querySelector(".menu-list");

    if (isActive) {
      menu.style.setProperty("width", `60vw`);
      document.body.style.overflowY = "hidden";

      const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          setIsActive(false);
        } 
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
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
          <ul
            ref={menuRef}
            className={`menu-list ${isActive ? "is-active" : ""}`}
          >
            <li className="menu-list__first-group">
              <div>
                <Link to="#about" smooth onClick={() => setIsActive(false)}>
                  About
                </Link>
              </div>
              <div>
                <Link to="#services" smooth onClick={() => setIsActive(false)}>
                  Services
                </Link>
              </div>
            </li>
            <li className="menu-list__second">
              <div>
                <Link to="#products" smooth onClick={() => setIsActive(false)}>
                  Products
                </Link>
              </div>
              <div>
                <Link to="#events" smooth onClick={() => setIsActive(false)}>
                  Events
                </Link>
              </div>
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

export default Navbar;
