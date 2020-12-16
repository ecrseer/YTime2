const stylex = 
(theme) => (
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
      margin:theme.spacing(1),
      placeItems:'center',
      textAlign:"center",
    justifyContent:"center", 
  },
  thumb:{   
    textAlign:"center",
    justifyContent:"center",      
    maxWidth:'90%',
    borderRadius: '0px 0px 50px 50px',    
        
  },
  thumbdiv:{
      placeItems:'center'
  },
  txtpt:{
      margin:theme.spacing(2),
      placeItems:'center',
      textAlign:"center",
    justifyContent:"center",   
  },
  fter:{
      gridTemplateRows:1
  },
  sign:{
      fontSize:'7px',
      textAlign:'right'
  }
})
module.exports= { stylex}