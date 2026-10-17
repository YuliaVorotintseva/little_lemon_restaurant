import { Link } from "react-router";
import { v4 as uuidv4 } from "uuid";

import "./Header.module.css";

export const Header = ({ navLinks }) => (
  <header>
    <img src="/assets/Logo.svg" alt="Logo" width="200" height="80" />
    <nav>
      <ul>
        {
          navLinks.map(link => (
            <li key={uuidv4()}>
              <Link to={link.to} >
                {link.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
);