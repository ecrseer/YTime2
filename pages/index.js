import Myapp from "../components/MyApp";
import { useEffect, useState } from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Topbar from '../components/layout/Topbar'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {txtpt,txt, intropt} from '../assets/strngs'
import { Typography } from "@material-ui/core";







const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#D6D5C9'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  intro:{
      margin:theme.spacing(1)
  },
  thumb:{   
      textAlign:"center",
      justifyContent:"center"
  },
  pt:{
      paddingTop:theme.spacing(2),
      margin:theme.spacing(1)
  }
}));
const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#E33E7F'
      },
      primary:{
          main: '#902923',
          contrastText:'#D6D5C9'
      },
      multilineColor:{
        color:'#D6D5C9'
    },
    typography:{
        fontSize:10,
        fontFamily: [
            'Nunito',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    },
    }
  });


export default function FullWidthGrid() {
    const [urlvideo, setUrlvideo] = useState('____');
    
    function copyBoard (result){  
        if((result.state=='granted')||
        result.state=='prompt'){           
          navigator.
          clipboard.readText().then((cip) => 
            {setUrlvideo(cip);       
                console.log('executou'+urlvideo);
            })
             .then(()=>{
              //adiciona tempo
                  });
                }
      }
      function PedirPermissaoPraCopiar(_window){
        _window.addEventListener("error", function (e) {
        alert("Error occurred: " + e.error.message);
        return false;
     })
      navigator.permissions.query({name:'clipboard-read',
        allowWithoutGesture: false}).then(
          (result)=>{
            copyBoard(result);
            
                }
        )
        .catch(function (e){
            console.log(e);
           // setFbckURL(flbckURL);
        })
    }

  
    useEffect(()=>{
        
        PedirPermissaoPraCopiar(window)
    },[urlvideo])

    const classes = useStyles();
  return (    <ThemeProvider theme={theme}>

    <div className={classes.root}>
      <Grid container spacing={0}>
      
      <Grid item xs={12}>
        <Topbar/>
       </Grid>
       <Grid item xs={12} className={classes.intro}>
                {intropt}        
       </Grid>
      <Grid className={classes.paper} item xs={8} sm={4} md={4}>
        <Myapp urvideo={urlvideo}/>
      </Grid>
      <Grid item xs={4} sm={2} md={8} lg={12}>
      <img width="50%"
        src="https://img.youtube.com/vi/1sIWez9HAbA/sddefault.jpg" 
        alt="nn"
        className={classes.thumb}
        ></img>
        </Grid>
        
      <Grid item xs={6} sm={3} md={10} lg={12} >      
      {txtpt}      
        </Grid>
        <Grid item xs={6} sm={3} md={2} lg={12}>
        {txt}
        </Grid>
        

        <Grid item xs={12}>
            
       </Grid>
     </Grid>
  </div>
  </ThemeProvider>
        )}
