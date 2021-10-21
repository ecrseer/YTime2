const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    // pwa output folder
    dest: 'public'
    

    // 
    // Other configurations:
    // ...
  },
  env:{
      ADS_JSON:process.env.ADS_JSON,
  }
})
