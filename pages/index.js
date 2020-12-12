import Head from 'next/head'
import { useEffect, useState } from 'react'
import LaunchScreen from '../components/launch/launchScreen'

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
          openLink(url);}
          else 
          if(urlvideo.search("youtu.be")!==-1){
    //        alert("//se encontrou youtu.be");
            url=urlvideo+'?t='+tmp;
            setUrlModif(url);
            openLink(url);
          }
            else
              setFootinho(<h2>Digite uma url do youtube</h2>)
    
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


    useEffect(()=>{
        setWaitd(false);
        PedirPermissaoPraCopiar();
    },[])
    return(
  <>
    <Head>
      <title>Time Shared YT</title>
    </Head>
    {waitd?<LaunchScreen/>:<></>}
    




    
    <button onClick={()=>setWaitd(!waitd)}>botaozdd</button>
    <h2>es{urlvideo}</h2>
    <h1>tjs+ PA = AWESOME!</h1>
    
    
  </>
)
}
