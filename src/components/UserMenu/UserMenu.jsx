import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { UserSvg, UserName, UserEmail, UserInfo } from './UserMenu.styled';

import { authSelectors, authOperations } from '../../redux/auth';
import { iconSize } from 'constants/index';

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getUserEmail);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogOut = () => {
    dispatch(authOperations.logOut());
    setAnchorEl(null);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <UserSvg size={iconSize.small} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <UserInfo>
            <UserName>{name}</UserName>
            <UserEmail>{email}</UserEmail>
          </UserInfo>
        </MenuItem>
        <MenuItem onClick={handlelogOut}>Sign out</MenuItem>
      </Menu>
    </>
  );
}
