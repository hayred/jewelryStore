import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a className="navbar-brand" href="/">
        Admin Inventory Control
      </a>
      <a className="navbar-brand" href="/addItem">
        Add New Items
      </a>
    </nav>
  );
}

export default Nav;
