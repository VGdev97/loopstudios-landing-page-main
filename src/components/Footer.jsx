import logo from "../assets/logo.svg";
import { footerLinks } from "../constants/data";
import { socialIcons } from "../constants/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      {/* Mobile Footer */}
      <div className="mobile-footer">
        <div className="footer-image">
          <img src={logo} alt="footer-logo" />
        </div>

        <ul>
          {footerLinks.map((link) => (
            <li key={link.id} className="footer-link">
              {link.text}
            </li>
          ))}
        </ul>

        <div className="social-icons">
          {socialIcons.map((icon) => (
            <img key={icon.id} src={icon.image} alt="icon"></img>
          ))}
        </div>
        <div className="copyright">
          <p>©{currentYear} Loopstudios. All rights reserved.</p>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="desktop-footer container">
        <div className="desktop-footer-top">
          <div className="footer-image">
            <img src={logo} alt="footer-logo" />
          </div>
          <div className="social-icons">
            {socialIcons.map((icon) => (
              <img key={icon.id} src={icon.image} alt="icon"></img>
            ))}
          </div>
        </div>

        <div className="desktop-footer-bottom">
          <ul>
            {footerLinks.map((link) => (
              <li key={link.id} className="footer-link">
                {link.text}
              </li>
            ))}
          </ul>
          <div className="copyright">
            <p>©{currentYear} Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
