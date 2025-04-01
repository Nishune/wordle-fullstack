import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  NavBar,
  NavToolbar,
  NavLinksContainer,
  NavButton,
} from "../../styles/NavbarStyles";

function Navigation() {
  const location = useLocation();

  return (
    <NavBar position="static">
      <NavToolbar>
        <NavLinksContainer>
          <NavButton
            component={RouterLink}
            to="/"
            isActive={location.pathname === "/"}
          >
            Home
          </NavButton>
          <NavButton
            component={RouterLink}
            to="/about"
            isActive={location.pathname === "/about"}
          >
            About
          </NavButton>
        </NavLinksContainer>
      </NavToolbar>
    </NavBar>
  );
}

export default Navigation;
