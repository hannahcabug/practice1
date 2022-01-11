import 'semantic-ui-css/semantic.min.css'
import MyThemeProvider from '../utils/provider'

function MyApp({ Component, pageProps }) {
  return <MyThemeProvider>
  <Component {...pageProps} />
  </MyThemeProvider>
}

/*
To-Do
1. choose a styling method (sass/styled-components)
2. pick two color palettes as your themes
3. make a card component which has an (image/header/description)
4. have buttons where you can change your themes for both the styled buttons and card components
*/

export default MyApp
