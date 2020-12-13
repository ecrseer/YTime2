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
    const [modiURL,setModiURL] = useState(urlModif);
    let modURL = ()=>{return urlModif+""};
     function compartilhar(urlModi){
        
        const shareData = {            
            title:''+modURL(),
            text: 'parametro'+urlModi,
          }
        try {
            setMyLog("parametro modiURL text: "+urlModi);
             navigator.share(shareData).then(()=>{}).catch(er=>new er);
        } catch (error) {
            setMyLog('errofoi: '+error)
        }
    }
    function NormalTest(){
        let myurlModif = urlModif+'2';
        return(<h1>{myurlModif}</h1>)
    }
    function usarBotaoCorreto (nav) {    
        if(nav.share)
         setBtn(<div><Button variant="contained" color="primary"
         onClick={()=>{compartilhar(urlModif)}} >
         Compartilhar
     </Button></div>)
         else
         setBtn(<div><Button variant="contained" color="primary"
         onClick={()=>{copiar(urlModif)}} >
            Copiar
        </Button>
        
        </div>)
    }


function fns(uuu){
    let el= (<h1>{urlModif}</h1>);
        let txt = el.innerHTML;
        alert(uuu);
}
  useEffect(()=>usarBotaoCorreto(navigator),[urlModif])
    return (
      <div className={classes.root}>
        {btn}
        <br/>
        logs: {mylog}
        <br/>
        urlModif:{urlModif}
        <br/>
        ModiURL: {modiURL}
        <NormalTest/>
        <br/>
        <Button onClick={()=>{fns(urlModif)}}>alerta</Button>
        <br/>
        <div><Button variant="contained" color="primary"
         onClick={()=>{compartilhar(urlModif)}} >
         Compartilhar2
     </Button></div>
      </div>
    );
  }