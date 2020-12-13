import TextField from "@material-ui/core/TextField";
async function compartilhar(){
    const shareData = {
        title: 'MDN',
        text: 'Aprenda desenvolvimento web no MDN!',
        url: 'https://developer.mozilla.org',
      }
    try {
        await navigator.share(shareData);
    } catch (error) {
        console.log('errofoi: '+error)
    }
}
const TimeFields = ()=>{
    
    return(<></>)
}
export default TimeFields;