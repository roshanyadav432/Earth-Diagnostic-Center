import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="head ">
      <nav className="navbar navbar-expand-lg header ">
        <div className="container-fluid header ">
          <img src={`${logo}`} id="logo" alt="Logo.png" />
          <span style={{ backgroundColor: "rgb(244, 246, 248)" }}>
            <Link to={"/"} id="myName">
              Earth Diagnostic Center
            </Link>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon header"></span>
          </button>
          <div
            className="collapse navbar-collapse header"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link header" to={"/"}>
                  {"  Home"}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header" to={"/our-team"}>
                  {" Our Team"}
                </Link>
              </li>
              {/* about us */}
              <li className="nav-item">
                <Link className="nav-link header" to={"/about-us"}>
                  {"  About Us"}
                </Link>
              </li>
              {/* contact us */}
              <li className="nav-item ">
                <Link className="nav-link header " to={"/contact-us"}>
                  {"  Contact Us"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
