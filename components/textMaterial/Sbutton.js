import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import LaunchScreen from '../launch/launchScreen';


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
    const [mylog,setMyLog] = useState('--no logs--');
    async function compartilhar(urlModi){
        let urlMod = ""+urlModi+"";
        const shareData = {
            title: ''+urlMod+'',
            text: ''+urlMod+'',
            url: ''+urlMod+'',
          }
        try {
            setMyLog("urlMod text: "+urlMod);
            await navigator.share(shareData);
        } catch (error) {
            setMyLog('errofoi: '+error)
        }
    }
    const usarBotaoCorreto = (nav) =>{    
        if(nav.share)
         setBtn(<Button variant="contained" color="primary"
         onClick={()=>{compartilhar(urlModif)}} >
         Compartilhar
     </Button>)
         else
         setBtn(<div><Button variant="contained" color="primary"
         onClick={()=>{copiar(urlModif)}} >
            Copiar
        </Button>
        
        </div>)
    }



  useEffect(()=>usarBotaoCorreto(navigator),[])
    return (
      <div className={classes.root}>
        {btn}
        <br/>
        logs: {mylog}
        <br/>
        urlModif:{urlModif}
      </div>
    );
  }