import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "./../../App.css";

function Navbar({ link }) {
  const appLink = () => {
    window.open(link, "_blank");
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-white ">
      <NavbarMenu
        appLink={appLink}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      {menuOpen && (
        <MobileMenu>
          {pages.map((page, index) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  borderBottom: isActive
                    ? "2px Solid rgba(0, 107, 255, 1)"
                    : "",
                  paddingBottom: isActive ? "0.2rem" : "",
                };
              }}
              to={page["1"]}
              key={page["0"]}
              className="navbar-button text-lg text-blue-500    hover:text-blue-500 transition ease-linear duration-300   text-center "

              // href={`#${page}`}
            >
              <p>
                <NavLink to={page["1"]} onClick={() => setMenuOpen(!menuOpen)}>
                  {page["0"]}
                </NavLink>
              </p>
            </NavLink>
          ))}

          <NavLink
            onClick={() => setMenuOpen(!menuOpen)}
            to={"/"}
            key={"158"}
            className="navbar-button text-lg text-blue-500    hover:text-blue-500 transition ease-linear duration-300   text-center "
          >
            <p>
              <NavLink to={"/"} onClick={appLink}>
                Contact us
              </NavLink>
            </p>
          </NavLink>
        </MobileMenu>
      )}
    </div>
  );
}
let navbarButton;
const pages = [
  ["Home", "/"],
  ["Customer", "/customer"],
  ["Supplier", "/supplier"],
  ["Delivery Partner", "/delivery-partner"],
];

// changeNavButtonStyle();
const NavbarMenu = ({ appLink, menuOpen, setMenuOpen }) => (
  <div className="navbar-main flex items-center justify-between shadow-sm">
    <div className="flex items-center">
      <Link
        to={"/"}
        className="main-logo text-xl font-bold no-underline text-gray-800 hover:text-gray-600"
      >
        {/* <img src={process.env.PUBLIC_URL + `/Images/Main Logo 2.png`} /> */}
      </Link>
    </div>
    <nav className="hidden md:block  mr-4 ">
      <div className="navbar-buttons space-x-8">
        {pages.map((page, index) => (
          <NavLink
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px Solid rgba(0, 107, 255, 1)" : "",
                paddingBottom: isActive ? "0.2rem" : "",
              };
            }}
            to={page["1"]}
            key={page["0"]}
            className="navbar-button text-lg text-blue-500    hover:text-blue-500 transition ease-linear duration-300   text-center "

            // href={`#${page}`}
          >
            <p>
              <NavLink to={page["1"]}>{page["0"]}</NavLink>
            </p>
          </NavLink>
        ))}
        <NavLink
          to={"/"}
          key={"123"}
          className="navbar-button text-lg text-blue-500    hover:text-blue-500 transition ease-linear duration-300   text-center "
        >
          <p>
            <NavLink onClick={appLink} to={"/"}>
              Contact us
            </NavLink>
          </p>
        </NavLink>
      </div>
    </nav>
    <button
      type="button"
      aria-label="Toggle mobile menu"
      onClick={() => setMenuOpen(!menuOpen)}
      className="humburger-btn rounded md:hidden"
    >
      <MenuAlt4Svg menuOpen={menuOpen} className="mr-2 " />
    </button>
  </div>
);

const MobileMenu = ({ children }) => (
  <nav className="p-4 flex flex-col space-y-2 md:hidden ">{children}</nav>
);

const MenuAlt4Svg = ({ menuOpen }) => (
  <div>
    <i
      className={`open-close-icon p-2 fa-2x ${
        menuOpen
          ? "nav-close-btn fa-solid fa-xmark "
          : "nav-open-btn fa-solid fa-bars"
      }`}
    ></i>
  </div>
);

export default Navbar;
