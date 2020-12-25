import {repelent} from '../../assets/ads';
const Anuncios = ({esconde})=>{

    return(
    <div>
    <iframe style={{width:'120px',height:'242px'}} scrolling="no" frameBorder="0"
 src={repelent}>
</iframe>
<p>{esconde}</p>

</div>)}

export default Anuncios;