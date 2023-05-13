import React from "react";
import Header from "./components/Header/Header";
import "./index.css";
import ContainerReminder from "./components/ContainerReminder/ContainerReminder";
import ContainerFinance from "./components/ContainerFinance/ContainerFinance";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <ContainerReminder></ContainerReminder>
      <ContainerFinance></ContainerFinance>
    </div>
  );
}

export default App;
