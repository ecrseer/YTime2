import Document, { Html, Head, Main, NextScript } from 'next/document'

const APP_NAME = 'YTimeShared2'
const APP_DESCRIPTION = 'Share your youtube links on a specific point in time'

export default class extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#FFFFFF' />
          <meta name="google-site-verification" content="TJ8vBft7kfgV7mfGMA6wYcTTSQt_BMAr45nXravhK4M" />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}
          
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/icons/favicon.ico' />
          <style>{
            `           
  }
            html, body, #__next {
              background-color:#111;
              height: 100%;
            }
            #__next {
                background-color:#111;
                color:white;
              margin: 0 auto;
            }
            h1 {
              text-align: center;              
            }
            `
          }</style>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
         <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script data-ad-client="ca-pub-6327791955539503" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </body>
      </Html>
    )
  }
}
