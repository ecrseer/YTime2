import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import LaunchScreen from '../launch/launchScreen';

async function compartilhar(urlMod){
    const shareData = {
        title: 'ytvdeo',
        text: 'youtube',
        url: urlMod,
      }
    try {
        await navigator.share(shareData);
    } catch (error) {
        console.log('errofoi: '+error)
    }
}
async function copiar(urlMod){
    navigator.clipboard.writeText(''+urlMod).then(()=>{})
    .catch(err=>console.log(err));
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
         onClick={()=>compartilhar(urlModif)} >
         Compartilhar
     </Button>)
         else
         setBtn(<Button variant="contained" color="primary"
         onClick={()=>copiar(urlModif)} >
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