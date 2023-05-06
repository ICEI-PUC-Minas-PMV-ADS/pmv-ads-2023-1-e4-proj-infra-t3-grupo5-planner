import React from "react";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";

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
        <Button id="radio-black-button" icon textId="texto-botao-claro" text="Texto Botão"/>
        <Button id="radio-white-button" icon textId="texto-botao-escuro" text="Texto Botão"/>
        <Button id="radio-black-button" textId="texto-botao-claro" text="Texto Botão"/>
        <Button id="rectangular-white-button" textId="texto-botao-escuro" text="Texto Botão"/>
      </header>
    </div>
  );
}

export default App;
