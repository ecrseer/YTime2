
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { stylex } from './Topbarcss';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(stylex);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
      <Box >
        <Toolbar className={classes.toolbar} borderRadius={16}>
          
          <Typography variant="h6" className={classes.titl}>
            Time Shared Youtube
          </Typography>
          
        </Toolbar>
        </Box>
      </AppBar>
      <Toolbar/>      
    </div>
  );
}
