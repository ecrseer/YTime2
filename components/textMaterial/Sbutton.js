import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import LaunchScreen from '../launch/launchScreen';

async function compartilhar(){
    const shareData = {
        title: 'MDN',
        text: 'Aprenda desenvolvimento web no MDN!',
        url: 'https://developer.mozilla.org',
      }
    try {
        await navigator.share(shareData);
    } catch (error) {
        console.log('errofoi: '+error)
    }
}


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

export default function Sbutton({urlModif}) {
    const classes = useStyles();
    const [btn,setBtn] = useState(<LaunchScreen/>)

    const usarBotaoCorreto = (nav) =>{    
        if(nav.share)
         setBtn(<Button variant="contained" color="primary"
         onClick={compartilhar} >
         Compartilhar
     </Button>)
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