import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5'>Filter It</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
