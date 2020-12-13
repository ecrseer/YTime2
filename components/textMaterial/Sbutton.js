import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import LaunchScreen from '../launch/launchScreen';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

export default function Sbutton({txt,urlModif}) {
    const classes = useStyles();
    const [btn,setBtn] = useState(<LaunchScreen/>)

    const usarBotaoCorreto = (nav) =>{    
        if(nav.share)
         setBtn(<h1>may</h1>)
         else
         setBtn(<Button variant="contained" color="primary" >
            Copiar
        </Button>)
    }



  useEffect(()=>usarBotaoCorreto(navigator),[])
    return (
      <div className={classes.root}>
        {btn}
      </div>
    );
  }