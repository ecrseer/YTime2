import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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
             
        {typeof navigator === "undefined"?
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