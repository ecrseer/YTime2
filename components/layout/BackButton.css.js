

const stylex = 
(theme) => (
{
  root: {
    display:'block',
    backgroundColor: 'red',
    color: 'white',    
    textDecoration: 'none',    
    minWidth:'100px',
    maxWidth:'100px',
    maxHeight:'50px',    
    fontFamily:'Calibri Light',
    fontSize:'16px',
    placeItems:'center',
    textAlign:'center',
    borderRadius: '20px',
    paddingLeft:'5px',
    paddingRight:'5px',
    backgroundImage:'linear-gradient(#B9BAA3,#902923)',
    transition:'padding-right 2s',
    "&:hover": {
        backgroundImage:'linear-gradient(red,blue)',
        paddingRight:'32px',
    },
    "&:active":{
        backgroundImage:'linear-gradient(red,gray)',
    },
    "&::selection":{
        background: 'transparent'
    }

  }
    
  
})
module.exports= { stylex}