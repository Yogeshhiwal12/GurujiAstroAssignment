import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Avatar, IconButton, Menu, MenuItem, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    
  },
  menuBar:{
    backgroundColor: "#BD5300",
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    marginLeft: theme.spacing(1),
  },
  menuLinks: {
    display: 'flex',
    justifyContent:"space-evenly",
    alignItems: 'center',
    textAlign:'center',
    flexGrow: 1,
    
    marginRight: '250px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'Column',
      marginRight: 0,
    },
  },
  menuItem: {
    marginBottom: theme.spacing(0),
  },
  slideContainer: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '70%',
    maxWidth: '300px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
    transform: 'translateX(100%)',
    zIndex: 999,
    overflow: 'auto',
    padding: theme.spacing(2),
  },
  closeIcon: {
    alignSelf: 'flex-end',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menuBar}>
        <Toolbar>
          <div className={classes.title}>
            <img src="https://user-images.githubusercontent.com/99132893/232487978-470f10f8-1077-4fc2-b691-c9ed4859dd21.jpg" alt="Logo" className={classes.logo} />
            <Typography variant="h6">Guruji</Typography>
          </div>

          <Hidden mdUp>
            <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleToggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Hidden smDown>
            <div className={classes.menuLinks}>
              <Typography variant="subtitle1" className={classes.menuItem}>
                Home
              </Typography>
              <Typography variant="subtitle1" className={classes.menuItem}>
                About Us
              </Typography>
              <Typography variant="subtitle1" className={classes.menuItem}>
                Testimonials
              </Typography>
              <Typography variant="subtitle1" className={classes.menuItem}>
                Call with Astrologer
              </Typography>
              <Typography variant="subtitle1" className={classes.menuItem}>
                Live (Coming Soon)
              </Typography>
            </div>
            <Avatar alt="User" src="https://user-images.githubusercontent.com/99132893/233114711-f2a94a7e-8d0c-43af-a6bf-ca08cc6f49b0.jpeg" className={classes.avatar} />
          </Hidden>
        </Toolbar>
      </AppBar>

      <Hidden mdUp>
        <motion.div
          className={classes.slideContainer}
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
        >
          <IconButton className={classes.closeIcon} color="inherit" aria-label="close" onClick={handleToggle}>
            <CloseIcon />
          </IconButton>

          <div className={classes.menuLinks}>
            <Avatar alt="User" src="https://user-images.githubusercontent.com/99132893/233114711-f2a94a7e-8d0c-43af-a6bf-ca08cc6f49b0.jpeg" className={classes.avatar} />
            <Typography variant="subtitle1" className={classes.menuItem}>
              Home
            </Typography>
            <Typography variant="subtitle1" className={classes.menuItem}>
                About Us
              </Typography>
              <Typography variant="subtitle1" className={classes.menuItem}>
                Testimonials
              </Typography>
            <Typography variant="subtitle1" className={classes.menuItem}>
              Call with Astrologer
            </Typography>
            <Typography variant="subtitle1" className={classes.menuItem}>
              Live (Coming Soon)
            </Typography>
          </div>
        </motion.div>
      </Hidden>
    </div>
  );
};

export default Navbar;
