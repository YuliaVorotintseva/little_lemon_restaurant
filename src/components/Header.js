import "./Header.module.css";

export const Header = ({navLinks}) => (
  <header>
    <img src="/assets/Logo.svg" alt="Logo" width="200" height="80" />
    <nav>
      <ul>
        {
          navLinks.map(link => (
            <li>
              <a href={link.href}>{link.name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
);