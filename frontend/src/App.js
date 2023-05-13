import React from "react";
import Header from "./components/Header/Header";
import "./index.css";
import ContainerReminder from "./components/ContainerReminder/ContainerReminder";
import ContainerFinance from "./components/ContainerFinance/ContainerFinance";
import ContainerChecklist from "./components/ContainerChecklist/ContainerChecklist";
import ContainerNote from "./components/ContainerNote/ContainerNote";
import { WidgetHabits } from "./components/WidgetHabits/WidgetHabits";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <ContainerReminder></ContainerReminder>
      <ContainerFinance></ContainerFinance>
      <ContainerChecklist></ContainerChecklist>
      <ContainerNote></ContainerNote>
      <WidgetHabits></WidgetHabits>
    </div>
  );
}

export default App;
