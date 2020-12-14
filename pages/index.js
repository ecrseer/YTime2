import Myapp from "../components/MyApp";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Topbar from '../components/layout/Topbar'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {txtpt,txt, intropt} from '../assets/strngs'
import { Typography } from "@material-ui/core";

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
    },
    typography:{
        fontSize:10,
        fontFamily: [
            'Nunito',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    },
    }
  });

export default function FullWidthGrid() {
  const classes = useStyles();

  return (    <ThemeProvider theme={theme}>

    <div className={classes.root}>
      <Grid container spacing={0}>
      
      <Grid item xs={12}>
        <Topbar/>
       </Grid>
       <Grid item xs={12}>
                {intropt}        
       </Grid>
      <Grid className={classes.paper} item xs={8} sm={4}>
        <Myapp/>
      </Grid>
      <Grid item xs={4} sm={2} >
      <img width="90%"
        src="https://img.youtube.com/vi/1sIWez9HAbA/sddefault.jpg" 
        alt="nn"></img>
        </Grid>
      <Grid item xs={6} sm={3}>
      
      {txtpt}
      
        </Grid>
        <Grid item xs={6} sm={3}>
        {txt}
        </Grid>
        

        <Grid item xs={12}>
            
       </Grid>
     </Grid>
  </div>
  </ThemeProvider>
        )}
