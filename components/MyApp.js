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

export default function Myapp({urvideo,setIndexURL}){ 
    const [waitd,setWaitd] = useState(true);
    const [urlvideo, setUrlvideo] = useState(''+urvideo);    
    const [tempo,setTempo] = useState({minuto:0,segundo:0});
    const [urlModif,setUrlModif] = useState('');
    const [Footinho,setFootinho] = useState(normalFt);
    const [FbckURL,setFbckURL] = useState(<></>)
    const [vThumbnail,setvThumbnail] = useState(<></>);
    



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
      function flbckURL(){
        return(
            <div>
          <TextField
                id="standard-basic" name="min"                
                label="URL" onChange={({target:{value}})=>
                setUrlvideo(value)}  /><br/></div>
        )
      }

    useEffect(()=>{
        setWaitd(false);
        const hvideo = ""+urvideo;
        setUrlvideo(''+hvideo)   
        
        //PedirPermissaoPraCopiar(window);
    },[urlvideo,tempo])
    return(
  <>
    <Head>
      <title>Time Shared YT</title>
    </Head>
    {waitd?<LaunchScreen/>:<></>}    


    <div>
        <div>
        {FbckURL}
        {/* <TimeFields/> */}
        
        </div>
        <div>
        <TextField
            id="standard-number" name="min" type="number"
            label="Minutos" autoComplete="nope"
            onChange={({target:{value}})=>setTempo({
              segundo:tempo.segundo, minuto:value*60
            })}  /><br/>
    <TextField
              id="standard-number" 
              label="Segundos" name="seg" type="number"      
              autoComplete="off"                   
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
