import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import { capitalize, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      
    },
    btnText:{
        color:'#902923',      

    },
    btn:{
        borderRadius: '0px 0px 50px 50px',  
    }
  },
}));

export default function Sbutton({urlModif}) {
    const classes = useStyles();
    const [myNav,setMyNav] = useState(undefined);
    useEffect(()=>{
        setMyNav(navigator.share)
    },[])
    async function copiar(urlMod){
        
        navigator.clipboard.writeText(''+urlMod).then(()=>{})
        .catch(err=>console.log(err));
    }
     async function compartilhar(urlModi){        
        const shareData = {  
            url:''+urlModi
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
         onClick={()=>{copiar(urlModif)}} className={classes.btn} >            
              Copiar            
        </Button>
        :
            <Button variant="contained" color="primary"
         onClick={()=>{compartilhar(urlModif)}} className={classes.btn}>
         Compartilhar
     </Button>
     
     }
      </div>
    );
  }