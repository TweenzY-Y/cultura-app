import { RiCloseLine } from "react-icons/ri";

export default function MobileMenu({ isOpen, toggleMenu, navElements, openModal }) {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      <div className="mobile-menu-header">
        <div className="menu-toggle" onClick={toggleMenu}>
          <RiCloseLine size={32} />
        </div>
      </div>
      <div className="mobile-nav-links">
        {navElements.map((el, i) => (
          <a href={el.href} key={i} onClick={toggleMenu}>
            {el.name}
          </a>
        ))}
      </div>
      <div className="mobile-auth-buttons">
        <button className="btn btn-login" onClick={() => openModal("login")}>
          Log In
        </button>
        <button className="btn btn-signup" onClick={() => openModal("register")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
