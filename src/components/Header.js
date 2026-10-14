export const Header = (navLinks) => (
  <header>
    <img src="../Logo.svg" alt="Logo" />
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