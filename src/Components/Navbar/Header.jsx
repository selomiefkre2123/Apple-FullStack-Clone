import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarList from "./NavbarList";

import logo from "../../assets/images/icons/logo-sm.png";
import search from "../../assets/images/icons/search-icon-sm.png";
import cart from "../../assets/images/icons/cart-sm.png";

function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <Container>
        <Navbar expand="lg" variant="dark" collapseOnSelect>
          {/* Toggle Button */}
          <Navbar.Toggle aria-controls="main-navbar" />

          {/* Apple Logo */}
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} alt="apple" width="20" />
          </Link>

          <Navbar.Collapse id="main-navbar">
            <Nav className="navbar-nav mx-auto w-100 nav-fill">
              {/* Main Menu */}
              <NavbarList LinkUrl="/mac" LinkName="Mac" />
              <NavbarList LinkUrl="/iphone" LinkName="iphone" />
              <NavbarList LinkUrl="/ipad" LinkName="iPad" />
              <NavbarList LinkUrl="/watch" LinkName="Watch" />
              <NavbarList LinkUrl="/tv" LinkName="TV" />
              <NavbarList LinkUrl="/music" LinkName="Music" />
              <NavbarList LinkUrl="/support" LinkName="Support" />

              {/* Search Icon */}
              <Link className="nav-link" to="/search">
                <img src={search} width="18" alt="search" />
              </Link>

              {/* Cart Icon */}
              <Link className="nav-link" to="/cart">
                <img src={cart} width="18" alt="cart" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
