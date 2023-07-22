import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/selectors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from 'redux/AuthR/AuthOperation';

export default function UserMenu() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: 'flex',
        alignSelf: 'center',
        gap: '16px',
      }}
    >
      <Typography
        variant="h8"
        sx={{
          color: '#ffffff',
          display: 'flex',
          alignItem: 'center',
          gap: '5px',
          ml: '500px',
        }}
      >
        <AccountCircleIcon />
        {userName}
      </Typography>
      <button type="button" onClick={() => dispatch(logout())}>
        <LogoutIcon sx={{ fontSize: 'medium' }} />
      </button>
    </Box>
  );
}
