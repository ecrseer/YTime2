import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));
const temBotaoCompartilhar= ()=>{    
    if(navigator.share)
     return (<Button variant="contained" color="primary" >
          Compartilhar
   </Button>)
     else
        return (<Button variant="contained" color="primary" >
        Copiar
    </Button>)
}
export default function Sbutton({txt,urlModif}) {
    const classes = useStyles();
//  useEffect(()=>temBotaoCompartilhar(),[])
    return (
      <div className={classes.root}>
        {temBotaoCompartilhar()}
      </div>
    );
  }