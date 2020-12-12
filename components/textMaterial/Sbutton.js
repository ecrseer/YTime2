import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));
async function temBotaoCompartilhar(){
    let hasShareApi = await navigator.share;
    if(hasShareApi)
     return true;
     else
     return false;
}
export default function Sbutton({txt,urlModif}) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        {temBotaoCompartilhar ?
        <Button variant="contained" color="primary" >
          Compartilhar
        </Button>:
        <Button variant="contained" color="primary" >
          Copiar
        </Button>
        }
      </div>
    );
  }