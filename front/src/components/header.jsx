import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" className="header-link">
          TRACK LIST
        </NavLink>

        <div>
          <NavLink to="/">Enregistrement</NavLink>
          <NavLink to="/participants">Consulter la liste</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
