import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

export default function Sbutton({urlModif}) {
    const classes = useStyles();
    const [myNav,setMyNav] = useState(undefined);
    useEffect(()=>{
        setMyNav(navigator.share)
    },[])
    async function copiar(urlMod){
        
        navigator.clipboard.writeText('test'+urlMod).then(()=>{})
        .catch(err=>console.log(err));
    }
     async function compartilhar(urlModi){        
        const shareData = {           
            title:''+urlModi,
          }
        try {            
             navigator.share(shareData).then(()=>{}).catch(er=>new er);
        } catch (error) {
               console.log('errofoi: '+error)
        }
    }  
  
    return (
      <div className={classes.root}>
             
        {typeof myNav === "undefined"?
            <Button variant="contained" color="primary"
         onClick={()=>{copiar(urlModif)}} >
            Copiar
        </Button>
        :
            <Button variant="contained" color="primary"
         onClick={()=>{compartilhar(urlModif)}} >
         Compartilhar
     </Button>
     
     }
      </div>
    );
  }