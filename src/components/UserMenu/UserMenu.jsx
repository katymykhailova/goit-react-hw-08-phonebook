import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { FiUser } from 'react-icons/fi';
import { iconSize } from 'constants/index';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <FiUser size={iconSize.small} />
      <span>Signed in as, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign out
      </button>
    </div>
  );
}
