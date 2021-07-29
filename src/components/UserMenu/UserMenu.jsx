// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.png';

export default function UserMenu() {
  // const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  // const avatar = defaultAvatar;

  return (
    <div>
      <span>Добро пожаловать</span>

      {/* <img src={avatar} alt="" width="32"  />
      <span >Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button> */}
    </div>
  );
}
