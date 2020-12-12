import Head from 'next/head'
import { useEffect, useState } from 'react'
import LaunchScreen from '../components/launch/launchScreen'
export default () =>{ 
    const [waitd,setWaitd] = useState(true);
    useEffect(()=>{
        setWaitd(false);
        
    },[])
    return(
  <>
    <Head>
      <title>Time Shared YT</title>
    </Head>
    {waitd?<LaunchScreen/>:<></>}
    
    <h1>Next.js+ PWA = AWESOME!</h1>
    <button onClick={()=>setWaitd(!waitd)}>botaozdd</button>
    <div className="waiter">
    
    
    </div>
    {}
  </>
)
}
