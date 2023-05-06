import React from "react";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text id="titulo-grande" text="Título grande" />
        <Text id="item-widget" text="Item Widget" />
        <Text id="subtitulo" text="Subtítulo" />
        <Text id="titulo-widget" text="Título widget" />
        <Text id="label-styled" text="Label" />
        <Text id="texto-botao-escuro" text="Texto preto" />
        <Text id="texto-botao-claro" text="Texto branco" />
        <Text id="texto-input" text="Texto input" />
        <Text id="mensagem-erro" text="Mensagem de erro" />
        <Text id="titulo-pequeno" text="Título pequeno" />
      </header>
    </div>
  );
}

export default App;
