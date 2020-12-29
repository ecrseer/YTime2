import { repelent,urls } from '../../assets/ads';
import { makeStyles } from '@material-ui/core';
import { stylex } from './Anuncios.css.js';

const useStyles = makeStyles(stylex);


const Anuncios = ({ esconde }) => {
    const classes = useStyles();
    return (
        <div className={classes.outer}>

            <iframe className={classes.frame2} scrolling="no"
                src={repelent}>
            </iframe>

            <iframe className={classes.frame2} scrolling="no" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=ecrseer0d-20&marketplace=amazon&region=BR&placement=B08PCDQJCV&asins=B08PCDQJCV&linkId=4f939e4fbb69b9cc32f3866d97231469&show_border=false&link_opens_in_new_window=true&price_color=d6d5c9&title_color=ffffff&bg_color=b53369">
            </iframe>
            <iframe className={classes.frame2} scrolling="no" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=ecrseer0d-20&marketplace=amazon&region=BR&placement=B01N5IB20Q&asins=B01N5IB20Q&linkId=1c153964cc6dfaf636c66c8c030c1f9f&show_border=false&link_opens_in_new_window=true&price_color=d6d5c9&title_color=ffffff&bg_color=b53369">
            </iframe>
            <iframe className={classes.frame2} scrolling="no" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=ecrseer0d-20&marketplace=amazon&region=BR&placement=B08GTLRM2C&asins=B08GTLRM2C&linkId=2cbe9128313ab4126e70fbcf68e6c0b2&show_border=false&link_opens_in_new_window=true&price_color=d6d5c9&title_color=ffffff&bg_color=b53369">
            </iframe>

            <iframe className={classes.frame2} scrolling="no" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=ecrseer0d-20&language=pt_BR&marketplace=amazon&region=BR&placement=B01N6A114U&asins=B01N6A114U&linkId=711f75cba0d27d5e646f020ff4746e35&show_border=true&link_opens_in_new_window=true">
            </iframe>

            <iframe className={classes.frame2} scrolling="no" 
             src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=ecrseer0d-20&marketplace=amazon&region=BR&placement=B07ZGJRVDY&asins=B07ZGJRVDY&linkId=5f699dc428ea6272374f97d2e147a277&show_border=false&link_opens_in_new_window=true&price_color=d6d5c9&title_color=ffffff&bg_color=b53369">
    </iframe>

    {urls.map(
        (url,index)=>(<iframe className={classes.frame2} scrolling="no"
            src={url} key={index}></iframe>)        
    )}
            
             
               
        </div>)
}

export default Anuncios;