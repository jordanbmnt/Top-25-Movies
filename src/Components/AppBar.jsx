import '../Style/style.css'
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { List, User } from "phosphor-react";

export default function AppNav() {
  return (
    <AppBar sx={{ backgroundColor: "#1a242d" }} position='static'>
      <Toolbar>
        <Button>
          <List  size={24} weight='bold' color='#aa591f' />
        </Button>
        <Typography className="nav-heading" variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Box Office Hits
        </Typography>
        <Button sx={{ borderRadius: "26px" }} color='inherit'>
          <User size={24} weight='bold' color='#aa591f' />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
