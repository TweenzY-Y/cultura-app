import { RiBookOpenLine, RiMenuLine } from "react-icons/ri";

export default function Header({ toggleMenu, navElements }) {
  return (
    <header>
      <nav className="navbar">
        <a href="/" className="logo">
          <RiBookOpenLine className="logo-icon" />
          <span>Cultura.app</span>
        </a>
        <ul className="nav-links">
          {navElements.map((el) => (
            <li>
              <a href={el.href} onClick={toggleMenu}>
                {el.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="auth-buttons">
          <button className="btn btn-login">Log In</button>
          <button className="btn btn-signup">Sign Up</button>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <RiMenuLine />
        </div>
      </nav>
    </header>
  );
}
