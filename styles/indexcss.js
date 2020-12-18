

const stylex = 
(theme,props) => (
{
  root: {
    flexGrow: 1,
    backgroundColor:'#D6D5C9'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  intro:{
      color:'#2A2A36',
      margin:theme.spacing(1),
      placeItems:'center',
      textAlign:"center",
    justifyContent:"center", 
  },
  thumb:{   
    textAlign:"center",
    justifyContent:"center",      
    maxWidth:'90%',
    borderRadius: '1px 0px 50px 50px',    
        
  },
  thumbdiv:{
      placeItems:'center'
  },
  txtpt:{
    color:'#2A2A36',
    margin:theme.spacing(1),
  },
  fter:{
      gridTemplateRows:1
  },
  sign:{
      fontSize:'7px',
      textAlign:'right'
  },
  parallax:{
    width:'100%',
    height: '200px',
    backgroundImage: props=>props.currentThumb,    
    backgroundAttachment:'fixed',
    backgroundSize:'cover',
    borderRadius: '0px 0px 50px 50px',    
    backgroundPosition:'-1% -150%',
    [theme.breakpoints.down('sm')]: {
        backgroundPosition:'-1% 250%',

      },
    
  }
})
module.exports= { stylex}