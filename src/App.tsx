import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "styled-components";
import { DarkContext } from "./providers/DarkThemeContext";
import Router from "./routes/routes";


function App() {
  const { theme } = useContext(DarkContext)

  return (
    <>
     <ThemeProvider theme={theme}>
      <Router />
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light' //TODO: manipular com estado
      />
      </ ThemeProvider>
    </>
  )
}

export default App