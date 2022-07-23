import React from "react";
import { TreeContextProvider } from "./contexts/TreeContext";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

      <div className="App">
        <TreeContextProvider />
      </div>
    </React.Fragment>
  );
}

export default App;
