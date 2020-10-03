import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Link } from 'react-router-dom';
import TemporaryDrawer from './Nav';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">
                <img src="/logo.svg" alt="" />
              </Link>
            </Typography>
            <TemporaryDrawer />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
