import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import icon from '../../autocity.png';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 10,
  },
}));

export default function NavBar() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button 
          onClick={() => {
            history.push('/todos')
            window.location.reload();
          }}
          color="inherit">ALL TODOS</Button>
          <Typography variant="h6" className={classes.title}>
          <Button 
          onClick={() => {
            history.push('/home')
            window.location.reload();
          }}
          color="inherit">ABOUT APP</Button>
          <Button href="http://www.autocity.com.ar" target="_blank">
              <img 
              height="40px"
              width="40px"
              alt="AutoCity"
              src={icon} 
              />
            </Button>
          </Typography>
          <Button 
          onClick={() => {
            history.push('/todo/add')
            window.location.reload();
          }}
          color="inherit">ADD TODO</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
