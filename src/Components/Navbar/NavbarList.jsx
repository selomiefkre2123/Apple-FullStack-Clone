import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarList({ LinkUrl, LinkName }) {
  return (
    <li className="nav-item">
      <Link className="nav-link js-scroll-trigger" to={LinkUrl}>
        {LinkName}
      </Link>
    </li>
  );
}

export default NavbarList;
