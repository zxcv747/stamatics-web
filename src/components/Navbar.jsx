// src/components/Navbar.jsx
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinkClass = ({ isActive }) =>
  "nav-link " + (isActive ? "nav-link-active" : "");

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* LEFT LOGO */}
        <Link to="/" className="logo">
          <img src={logo} alt="Stamatics Logo" className="logo-image" />
          <div className="logo-text">
            <span className="logo-title">Stamatics</span>
            <span className="logo-subtitle">IIT Kanpur</span>
          </div>
        </Link>

        {/* RIGHT NAVIGATION LINKS + HOVER DROPDOWN */}
        <nav className="nav-links top-right-nav">
          {/* For now, About Us scrolls within Home using anchor */}
          <a href="#about" className="nav-link">
            About Us
          </a>

          {/* COMPETITIONS DROPDOWN */}
          <div className="dropdown">
            <span className="dropdown-label">Competitions ▾</span>

            <div className="dropdown-menu">
              <a href="#integration" className="dropdown-item">
                Integration Bee
              </a>
              <a href="#mathematica" className="dropdown-item">
                Mathematica
              </a>
              <a href="#mathemania" className="dropdown-item">
                Mathemania
              </a>
              <a href="#participants" className="dropdown-item">
                Participants
              </a>
            </div>
          </div>

          {/* These routes can be real pages later */}
          <NavLink to="/" className={navLinkClass}>
            Blogs
          </NavLink>
          <NavLink to="/" className={navLinkClass}>
            Our Team
          </NavLink>
          <NavLink to="/" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
