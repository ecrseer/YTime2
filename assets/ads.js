let l1 = "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=",
    l2 = process.env.ADS_JSON + "&marketplace=amazon&region=BR&placement=B07FN5HKRQ&asins=B07FN5HKRQ&linkId=ea6dc7c1b1336ab58cd420be407e7529&show_border=false&link_opens_in_new_window=true&price_color=d6d5c9&title_color=ffffff&bg_color=b53369",
    repelent = l1 + "" + l2;

let urls = [
    "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=ecrseer0d-20&marketplace=amazon&region=BR&placement=B08P54TYFZ&asins=B08P54TYFZ&linkId=56cf8c0035571c5af87f29f71b8a2e74&show_border=false&link_opens_in_new_window=true&price_color=d6d5c9&title_color=ffffff&bg_color=b53369",
    "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=ecrseer0d-20&marketplace=amazon&region=BR&placement=B0751SBTGM&asins=B0751SBTGM&linkId=80be9f60b6714c5327025b0183fa72da&show_border=false&link_opens_in_new_window=true&price_color=d6d5c9&title_color=ffffff&bg_color=b53369",
    "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=ecrseer0d-20&marketplace=amazon&region=BR&placement=B07C4NPFWX&asins=B07C4NPFWX&linkId=e5958d6a66a20fea569683d33e365c64&show_border=false&link_opens_in_new_window=true&price_color=d6d5c9&title_color=ffffff&bg_color=b53369",
    "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=ecrseer0d-20&marketplace=amazon&region=BR&placement=B07N95TQY4&asins=B07N95TQY4&linkId=4f912fd1e8f1833666feb9c05a3caa0f&show_border=false&link_opens_in_new_window=true&price_color=d6d5c9&title_color=ffffff&bg_color=b53369",
    "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=ecrseer0d-20&marketplace=amazon&region=BR&placement=B0779L1T25&asins=B0779L1T25&linkId=0f82643be59dd67338bcec2bc9b739d1&show_border=false&link_opens_in_new_window=true&price_color=d6d5c9&title_color=ffffff&bg_color=b53369",
    
    
];

    module.exports = { repelent,urls };