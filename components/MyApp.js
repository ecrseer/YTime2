import Head from 'next/head'
import { useEffect, useState } from 'react'
import LaunchScreen from '../components/launch/launchScreen'
import Sbutton from '../components/textMaterial/Sbutton';
import TextField from '../components/textMaterial/TextField'
import TimeFields from '../components/textMaterial/TimeFields'



const normalFt = (<a
    href="https://github.com/ecrseer"
    target="_blank"
    rel="noopener noreferrer"
  >
    Made with ❤️ by  gjm
  </a>);

export default function Myapp(){ 
    const [waitd,setWaitd] = useState(true);
    const [urlvideo, setUrlvideo] = useState('____');
    const [tempo,setTempo] = useState({minuto:0,segundo:0});
    const [urlModif,setUrlModif] = useState('');
    const [Footinho,setFootinho] = useState(normalFt);
    const [Falli,setFalli] = useState(()=>{})
    
    

    function copyBoard (result){
  
        if((result.state=='granted')||
        result.state=='prompt'){           
          navigator.
          clipboard.readText().then((cip) => 
            {setUrlvideo(cip);})
             .then(()=>{
              //adiciona tempo
                  });
                }
      }
      function adicionaTempo(){
        let tmp= parseInt(tempo.minuto)+parseInt(tempo.segundo);
        let url="";
        if(urlvideo.search("youtube")!==-1){//se encontrou youtube 
          url=urlvideo+'&feature=youtu.be&t='+tmp;
          setUrlModif(url);
          }
          else 
          if(urlvideo.search("youtu.be")!==-1){    
            url=urlvideo+'?t='+tmp;
            setUrlModif(url);           
          }
            else
              setFootinho(<h2>Digite uma url do youtube</h2>)
    
      }
//remove later
      function falbck(){
        return(
          <TextField
                id="standard-basic" name="min"
                label="URL" onChange={({target:{value}})=>
                setUrlvideo(value)}  />
        )
      }

    function PedirPermissaoPraCopiar(_window){
        _window.addEventListener("error", function (e) {
        alert("Error occurred: " + e.error.message);
        return false;
     })
      navigator.permissions.query({name:'clipboard-read',
        allowWithoutGesture: false}).then(
          (result)=>{
            copyBoard(result);          }
        )
        .catch(function (e){
            console.log(e);
        })
    }
    

    
    useEffect(()=>{
        setWaitd(false);
        PedirPermissaoPraCopiar(window);
    },[urlvideo,tempo])
    return(
  <>
    <Head>
      <title>Time Shared YT</title>
    </Head>
    {waitd?<LaunchScreen/>:<></>}    


    <div>
        <div>
        {/* <TimeFields/> */}
        <TextField
            id="standard-number" name="min" type="number"
            label="Minutos" onChange={({target:{value}})=>setTempo({
              segundo:tempo.segundo, minuto:value*60
            })}  /><br/>
    <TextField
              id="standard-number" 
              label="Segundos" name="seg" type="number"                         
              onChange={({target:{value}})=> setTempo(
                {segundo:value,minuto:tempo.minuto}) }  
                onBlur={adicionaTempo}        
            />
            </div>
            <Sbutton urlModif={urlModif}/>
            
            </div>            
    
    
  </>
)
}
