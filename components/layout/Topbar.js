
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { stylex } from './Topbarcss';
import { Box, TextField } from '@material-ui/core';

const useStyles = makeStyles(stylex);

export default function ButtonAppBar({NoCopy,setarNoCopyURL}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.toolbar}>
      <Toolbar className={classes.toolbar}>    
       
        {!NoCopy?
            <Typography variant="h6" className={classes.titl}>
              Time Shared for Youtube
            </Typography>  
          :
          <TextField  id="standard-basic" name="min"                
                      label="URL"  
                      onBlur={(ev)=>{
                        setarNoCopyURL(
                        ev.target.value)
                      }} fullWidth style={{margin:'1.5%'}} />
        }
        </Toolbar>
        
      </AppBar>
      <Toolbar/>      
    </div>
  );
}
