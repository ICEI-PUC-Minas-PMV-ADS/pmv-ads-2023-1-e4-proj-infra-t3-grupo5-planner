import React from "react";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text id="big-title" text="Título grande" />
        <Text id="item-widget" text="Item Widget" />
        <Text id="subtitle" text="Subtítulo" />
        <Text id="title-widget" text="Título widget" />
        <Text id="label-styled" text="Label" />
        <Text id="button-black-text" text="Texto preto" />
        <Text id="button-white-text" text="Texto branco" />
        <Text id="text-input" text="Texto input" />
        <Text id="message-error" text="Mensagem de erro" />
        <Text id="little-text" text="Título pequeno" />
      </header>
    </div>
  );
}

export default App;
