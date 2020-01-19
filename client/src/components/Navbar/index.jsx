import React from 'react';
import { AppBar, 
  Toolbar, 
  // IconButton, 
  // Button, 
  Typography, 
  InputBase } from '@material-ui/core';
import { Instagram, 
  Explore, 
  FavoriteBorder, 
  PersonOutline, 
  Search } from '@material-ui/icons';

const styles = {
  root: {
    marginBottom: 100
  },
  AppBar: {
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center'
  },
  Toolbar: {
    width: '100%',
    maxWidth: 960,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0px 10px 0px 10px'
  },
  icons: {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    margin: 10
  },
  search: {
    color: 'gray',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    padding: 5,
    height: 20,
    borderRadius: '20px 20px 20px 20px'
  },
  navIcons: {
    margin: 5
  }
}

const Navbar = () => {
  return (
    <div style={styles.root}>
      <AppBar position='fixed' style={styles.AppBar}>
        <Toolbar style={styles.Toolbar}>
          <div style={styles.icons}>
            <Instagram />
            <Typography> | </Typography>
            <Typography style={{fontFamily: "'Pacifico', cursive"}}>Instagram</Typography>
          </div>>
          <div style={styles.search}>
            <div>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div style={styles.icons}>
            <Explore style={styles.navIcons} />
            <FavoriteBorder style={styles.navIcons}/>
            <PersonOutline style={styles.navIcons}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;