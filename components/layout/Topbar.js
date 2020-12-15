
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  toolbar:{
    backgroundColor:'#902923',
    textAlign:'center',
    justifyContent:'center'


  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  titl: {
    color: '#D6D5C9',
    textAlign:'center',
    justifyContent:'center'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          
          <Typography variant="h6" className={classes.titl}>
            Time Shared Youtube
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>
  );
}
