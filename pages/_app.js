/* eslint no-undef: "off"*/
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import theme from "../styles/theme/Theme";
import '../styles/thememain.css'
import usePanZoom from "use-pan-and-zoom";

function MyApp({ Component, pageProps }) {
  const { transform, setContainer, panZoomHandlers } = usePanZoom();
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
export default MyApp;
