import { Link } from "react-router";

import "./Header.module.css";

export const Header = ({navLinks}) => (
  <header>
    <img src="/assets/Logo.svg" alt="Logo" width="200" height="80" />
    <nav>
      <ul>
        {
          navLinks.map(link => (
            <li>
              <Link to={link.to}>{link.name}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
);