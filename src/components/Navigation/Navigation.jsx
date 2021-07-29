import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className="nav-link" activeClassName="nav-activelink">
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      className="nav-link"
      activeClassName="nav-activelink"
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
