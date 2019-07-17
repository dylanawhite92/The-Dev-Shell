import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="dashboard.html">
          <i className="fas fa-code" /> The Dev Shell
        </a>
      </h1>

      <ul>
        <li>
          <a href="profiles.html">Developers</a>
        </li>
        <li>
          <a href="register.html">Register</a>
        </li>
        <li>
          <a href="login.html">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;