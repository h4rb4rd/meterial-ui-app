import React, { useState } from 'react';

import { AppBar, Container, Toolbar, IconButton, Typography, Button, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import DialogModal from './DialogModal';

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const isOpen = open;

  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Material Landing
          </Typography>
          <Box mr={3}>
            <Button onClick={handleClickOpen} color="inherit" variant="outlined">
              Log In
            </Button>
            <DialogModal handleClose={handleClose} open={isOpen} />
          </Box>
          <Button color="secondary" variant="contained">
            Sign Up
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
