import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import Layout from "./components/layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>App</Layout>
    </ThemeProvider>
  );
}

export default App;
