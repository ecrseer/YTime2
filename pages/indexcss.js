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
      alignItems:'right'
  },
  thumb:{   
    textAlign:"center",
    justifyContent:"center",      
    maxWidth:'90%',
    
        
  },
  thumbdiv:{
      placeItems:'center'
  },
  txtpt:{
      margin:theme.spacing(2)
  },
  fter:{
      gridTemplateRows:1
  }
})
module.exports= { stylex}