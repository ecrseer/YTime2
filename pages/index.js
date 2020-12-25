import Myapp from "../components/MyApp";
import { useEffect, useState } from "react";
import Image from 'next/image'

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Topbar from '../components/layout/Topbar'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {txtpt,txt, intropt} from '../assets/strngs'
import { Typography} from "@material-ui/core";
import { stylex } from "../styles/indexcss";
import BackBtn from "../components/layout/BackButton";
import Anuncios from "../components/adsens/Anuncios";


const useStyles = makeStyles(stylex);

const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#E33E7F'
      },
      primary:{
          main: '#b53369',
          contrastText:'#D6D5C9',
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
    const [thumbvideo,setThumbvideo] = useState(false);
    const [tst,stst] = useState(<Myapp urvideo={urlvideo.completa}/>)
    
    //deprecated
  function _idThumb(_urlvideoPar){
    //var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var regExpNova = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/
    let urlvidx = ""+_urlvideoPar+"";
    
    var matc = urlvidx.match(regExpNova);
    
    //return (match&&match[7].length==11)? match[7] : false;
    return (matc&&matc[1].length==11)? matc[1] : false;
  }
  
  function getIdThumb(urlc){
    var regExpNova = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/
    let urlvidx = ""+urlc+"";    
    var matc = urlvidx.match(regExpNova);
    return matc[1].length>7?matc[1]:'';
  }
  function carregarThumb(url){
      let idT = getIdThumb(url);
      console.log('idT'+idT);
      if (idT){          
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
                carregarThumb(cip);                
            })
             .catch(()=>{
              //adiciona tempo
              
                  });
                }
      }
      function PedirPermissaoPraCopiar(_window){
        document.body.style.backgroundColor = "#D6D5C9";

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
            
           // setFbckURL(flbckURL);
        })
    }

    useEffect(()=>{    
        setTimeout(()=>
        PedirPermissaoPraCopiar(window)
        ,1000)
        
    },[])
    const props = { currentThumb: thumbvideo?
        'url('+""+thumbvideo+""+')' :'url("/icons/logo.png")',  };

    const classes = useStyles(props);
  return (    <ThemeProvider theme={theme}>

    <div className={classes.root}>
      <Grid container spacing={0}>      
      <Grid item xs={12}>
        <Topbar/>
       </Grid>
       <Grid item xs={12} className={classes.intro}>
       <div className={classes.parallax}></div>
                {intropt}    
                {optURL}                  
       </Grid>

      <Grid className={classes.paper} item xs={8} sm={10} md={4} lg={4}>
       
        <Myapp urvideo={urlvideo.completa}/>
        
      </Grid>


      <Grid item xs={4} sm={2} md={8}  className={classes.thumbdiv}>
        <img className={classes.thumb}
            src={thumbvideo?
                        thumbvideo :'/icons/logo.png'}
            alt="nn"        
            ></img>
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={12}>
                    <Anuncios/><br/>
        </Grid>
      <Grid item xs={7} sm={6} md={8} lg={12} className={classes.txtpt}
      >      
      <p>{txtpt}</p>
        </Grid>

        <Grid item xs={2} sm={6} md={8} lg={12} 
      className={classes.txtpt}>      
        <BackBtn originalVideo={urlvideo.completa?urlvideo.completa:'www.youtube.com'}
            timedVideo={'https://www.youtube.com/watch?v=waAlgFq9Xq8s'}
        />

        </Grid>

        <Grid item xs={6} sm={6} md={8} lg={12}
        className={classes.txtpt}>
        {txt}
        
        </Grid>
        

        <Grid item xs={12} className={classes.fter}>
            <p className={classes.sign}>made with 👍😞 by gjm</p>
            
       </Grid>
     </Grid>
  </div>
  </ThemeProvider>
        )}
