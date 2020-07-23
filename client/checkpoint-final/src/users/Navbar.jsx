import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './Navbar.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <div className="navBar">
      <div className={classes.root}>
        <AppBar position="static" className="navEo">
          <Toolbar className="content-nav">
            <div>
              <a href="/">
                <img src="/logo.png" alt="logo" />
              </a>
            </div>
            <span className="desktop-link">
              <Link className="link" to="/admin">
                <Button>Admin</Button>
              </Link>
            </span>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
