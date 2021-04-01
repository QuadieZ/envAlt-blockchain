import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react"
import { Global } from "@emotion/react"
import fonts from "./font"

const theme = extendTheme({
  fonts: {
    heading: "Saira",
    body: "Saira",
  },
})


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Global styles={fonts} />
    <App />

  </ChakraProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
