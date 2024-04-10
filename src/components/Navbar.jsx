import { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import { footerLinks } from "../constants/data";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar container">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-hamburger">
        <img
          onClick={() => setMenu(true)}
          className="hamburger"
          src={hamburger}
          alt="hamburger-icon"
        />
        <ul className="navbar-links">
          {footerLinks.map((link) => (
            <li key={link.id}>{link.text}</li>
          ))}
        </ul>
      </div>
      {menu && (
        <div className="drawer">
          <div className="drawer-top">
            <img src={logo} alt="logo" />
            <img
              src={close}
              className="drawer-close"
              onClick={() => setMenu(false)}
            />
          </div>

          <div className="drawer-links">
            {footerLinks.map((link) => (
              <div key={link.id}>
                <a href="/">{link.text}</a>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
