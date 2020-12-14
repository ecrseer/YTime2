import Myapp from "../components/MyApp";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Topbar from '../components/layout/Topbar'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {txtpt} from '../assets/strngs'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#D6D5C9'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
}));
const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#E33E7F'
      },
      primary:{
          main: '#902923',
          contrastText:'#D6D5C9'
      },
      multilineColor:{
        color:'#D6D5C9'
    }
    }
  });

export default function FullWidthGrid() {
  const classes = useStyles();

  return (    <ThemeProvider theme={theme}>

    <div className={classes.root}>a
      <Grid container spacing={0}>
      <Grid item xs={12}>
        <Topbar/>
       </Grid>
      <Grid className={classes.paper} item xs={12} sm={6}>
        <Myapp/>
      </Grid>
      <Grid item xs={6} sm={3}>
      
        </Grid>
        <Grid item xs={6} sm={3}>
        
        </Grid>
        

        <Grid item xs={12}>
            {txtpt}
       </Grid>
     </Grid>
  </div>
  </ThemeProvider>
        )}
