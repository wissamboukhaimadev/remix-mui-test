import { AppBar, Toolbar, Typography, Button, Divider } from '@mui/material';
import { Link } from '@remix-run/react';
import { listsUrls } from '../utils/listUrls';
const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar className="flex justify-around">
        <Typography>App Name</Typography>
        <Button variant="contained">IPTV test</Button>
      </Toolbar>
      <Divider />
      <Toolbar className="flex justify-between">
        <Typography>..</Typography>
        <NavigationLinks />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;



const NavigationLinks = () => {
  return (
    <ul className="list-none flex ">
      {listsUrls.map((item,index) => {
        return (
          <Link to={item.link} key={index} className="pr-10 cursor-pointer">
            {' '}
            {item.name}{' '}
          </Link>
        );
      })}
    </ul>
  );
};
