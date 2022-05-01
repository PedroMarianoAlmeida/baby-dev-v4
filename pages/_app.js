import HeaderWrapper from "../src/components/components/Header";
import { createGlobalStyle } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <HeaderWrapper />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default MyApp;
