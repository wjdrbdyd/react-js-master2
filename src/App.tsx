import React, { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { isDarkAtom } from "./atom";
import { useRecoilValue } from "recoil";
function App() {
  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default App;
