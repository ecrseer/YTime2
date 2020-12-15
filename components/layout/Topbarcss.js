const stylex = 
(theme) => ({
    root: {
      flexGrow: 1,
      
    },
    toolbar:{
      backgroundColor:'#902923',
      textAlign:'center',
      justifyContent:'center',
      borderRadius: 3,
    
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    titl: {
      color: '#D6D5C9',
      textAlign:'center',
      justifyContent:'center'
    },
  })
  module.exports= {stylex}