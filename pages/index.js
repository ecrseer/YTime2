import Myapp from "../components/MyApp";
import Topbar from '../components/layout/Topbar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {txt2} from '../assets/strngs'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
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
            {txt2}
       </Grid>
     </Grid>
  </div>
        )}
