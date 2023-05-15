import React from "react";
import Header from "./components/Header/Header";
import "./index.css";
import PageHome from "./components/PageHome/PageHome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <PageHome />
    </div>
  );
}

export default App;
