import { Link } from "react-router";

import styles from "./Footer.module.css";

export const Footer = ({ navLinks }) => (
  <footer>
    <img src="/assets/Logo.svg" alt="Logo" />
    <div>
      <div className={styles.list}>
        <h4>Doormat Navigation</h4>
        <nav>
          <ul>
            {navLinks.map(link => (
              <li>
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div>
        <h4>Contact Info</h4>
        <nav>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </nav>
      </div>

      <div>
        <h4>Social media links</h4>
        <nav>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Telegram</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
)