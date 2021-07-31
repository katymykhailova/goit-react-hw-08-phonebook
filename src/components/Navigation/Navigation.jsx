import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className="nav-link"
        activeClassName="nav-activelink"
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className="nav-link"
          activeClassName="nav-activelink"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
