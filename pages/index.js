import Head from 'next/head'
import { useEffect, useState } from 'react'
import LaunchScreen from '../components/launch/launchScreen'
import Sbutton from '../components/textMaterial/Sbutton';
import TextField from '../components/textMaterial/TextField'




const normalFt = (<a
    href="https://github.com/ecrseer"
    target="_blank"
    rel="noopener noreferrer"
  >
    Made with ❤️ by  gjm
  </a>);

export default function yshindex(){ 
    const [waitd,setWaitd] = useState(true);
    const [urlvideo, setUrlvideo] = useState('____');
    const [tempo,setTempo] = useState({minuto:0,segundo:0});
    const [urlModif,setUrlModif] = useState('');
    const [Footinho,setFootinho] = useState(normalFt);
    const [Falli,setFalli] = useState(()=>{})
    
    const [ShrButton,setShrButton] = useState(<Sbutton 
        txt="Copiar" />)
    const [mylog,setMyLog] = useState('--no logs--');

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
      //badbehaviour    openLink(url);
    }
          else 
          if(urlvideo.search("youtu.be")!==-1){
    //        alert("//se encontrou youtu.be");
            url=urlvideo+'?t='+tmp;
            setUrlModif(url);
           //badbehaviour openLink(url);
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

    function PedirPermissaoPraCopiar(){
    window.addEventListener("error", function (e) {
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
        })
    }
    async function usarBotaoAdequado(){
        await navigator.share? 
        setShrButton(<Sbutton txt="Compartilhar" />) :
            setShrButton(<Sbutton 
                txt="Copia" />)
    }

    async function compartilhar(){
        const shareData = {
            title: 'MDN',
            text: 'Aprenda desenvolvimento web no MDN!',
            url: 'https://developer.mozilla.org',
          }
        try {
            await navigator.share(shareData);
        } catch (error) {
            setMyLog('errofoi: '+error)
        }
    }
    useEffect(()=>{
        setWaitd(false);
        PedirPermissaoPraCopiar();
        usarBotaoAdequado();
    },[urlvideo,tempo])
    return(
  <>
    <Head>
      <title>Time Shared YT</title>
    </Head>
    {waitd?<LaunchScreen/>:<></>}
    





    <button onClick={()=>setWaitd(!waitd)}>botaozdd</button>
    <h3>urlmodif:           {urlModif}</h3>
    <h2>es{urlvideo}</h2>
    <h1>ts+ PA = a!</h1>
    <div>
        <div><TextField
            id="standard-basic" name="min"
            label="Minutos" onChange={({target:{value}})=>setTempo({
              segundo:tempo.segundo, minuto:value*60
            })}  />
    <TextField
              id="standard-basic"
              label="Segundos" name="seg"                         
              onChange={({target:{value}})=> setTempo(
                {segundo:value,minuto:tempo.minuto}) }  
                onBlur={adicionaTempo}        
            />
            </div>
            {ShrButton}
            <Sbutton txt="Compartilhar"  onShr={compartilhar}/>
            </div>
            <div>
            {mylog}
            </div>
    
    
  </>
)
}
