import React from "react";
import Header from "./components/Header/Header";
import "./index.css";
import ContainerMood from "./components/ContainerMood/ContainerMood";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ContainerMood></ContainerMood>
      </header>
    </div>
  );
}

export default App;
