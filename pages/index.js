import Head from 'next/head'
import { useState } from 'react'

export default () =>{ 
    const [waitd,setWaitd] = useState(true);
    return(
  <>
    <Head>
      <title>Time Shared YT</title>
    </Head>
    <h1>Next.js+ PWA = AWESOME!</h1>
    <button onClick={()=>setWaitd(!waitd)}>botaozdd</button>
    <div className="waiter">
    
    
    </div>
  </>
)
}
