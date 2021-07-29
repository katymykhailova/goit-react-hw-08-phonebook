import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <nav>
    <NavLink
      exact
      to="/register"
      className="nav-link"
      activeClassName="nav-activelink"
    >
      Sign up
    </NavLink>

    <NavLink
      exact
      to="/login"
      className="nav-link"
      activeClassName="nav-activelink"
    >
      Log in
    </NavLink>
  </nav>
);

export default AuthNav;
