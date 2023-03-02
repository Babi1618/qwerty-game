import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { QwertyGame } from "./pages/QwertyGame/QwertyGame";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <QwertyGame />
    </GlobalContextProvider>
  );
}

export default App;
