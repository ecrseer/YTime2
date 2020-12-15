import Myapp from "../components/MyApp";
import { useEffect, useState } from "react";
import Image from 'next/image'

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Topbar from '../components/layout/Topbar'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {txtpt,txt, intropt} from '../assets/strngs'
import { Typography } from "@material-ui/core";
import { stylex } from "./indexcss";


const useStyles = makeStyles(stylex);
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
    const [urlvideo, setUrlvideo] = useState({completa:'',idw:''});
    const [optURL,setOptURL] = useState(<></>)
    const [thumbvideo,setThumbvideo] = useState('');


    
  function _idThumb(_urlvideo){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let urlvid = ""+_urlvideo;
    console.log('urlvid:'+urlvid)
    var match = urlvid.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }
  function carregarThumb(url){
      let idT = _idThumb(url);
      if (idT){
          console.log('idT eh'+idT)
          let thmb = 'https://img.youtube.com/vi/'+idT+'/sddefault.jpg';
          setThumbvideo(thmb);
          
        return idT;
    }
    else
    return '';
  }

    function copyBoard (result){  
        if((result.state=='granted')||
        result.state=='prompt'){           
          navigator.
          clipboard.readText().then((cip) => 
            {let
                myobj = {
                    completa: cip,
                    idw: urlvideo.idw
                };
                setUrlvideo(myobj);       
                console.log('consegui copiar'+cip)
                carregarThumb(cip);
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
            console.log('acabei de copiar')
                }
        )
        .catch(function (e){
            console.log('nao consegui copiar:'+e);
           // setFbckURL(flbckURL);
        })
    }

    useEffect(()=>{    
        PedirPermissaoPraCopiar(window)
    },[])
    
    const classes = useStyles();
  return (    <ThemeProvider theme={theme}>

    <div className={classes.root}>
      <Grid container spacing={0}>
      
      <Grid item xs={12}>
        <Topbar/>
       </Grid>
       <Grid item xs={12} className={classes.intro}>
                {intropt}    
                {optURL}    
       </Grid>

      <Grid className={classes.paper} item xs={8} sm={4} md={4}>
       
        <Myapp urvideo={urlvideo.completa}/>
      </Grid>


      <Grid item xs={4} sm={2} md={8} lg={12} className={classes.thumbdiv}>
        <img className={classes.thumb}
            src={urlvideo.completa!== ''?
                        thumbvideo :'/icons/logo.png'}
            alt="nn"        
            ></img>
        </Grid>
        
      <Grid item xs={6} sm={6} md={8} lg={12} 
      className={classes.txtpt}>      
      {txtpt}      
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={12}
        className={classes.txtpt}>
        {txt}
        </Grid>
        

        <Grid item xs={12} className={classes.fter}>
            <p className={classes.sign}>made with ❤️ by gjm</p>
       </Grid>
     </Grid>
  </div>
  </ThemeProvider>
        )}
