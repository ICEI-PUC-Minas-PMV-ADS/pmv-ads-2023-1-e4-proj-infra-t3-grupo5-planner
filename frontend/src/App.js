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
        <Text id="texto-botao" text="Texto botão" />
        <Text id="texto-input" text="Texto input" />
        <Text id="mensagem-erro" text="Mensagem de erro" />
        <Text id="titulo-pequeno" text="Título pequeno" />
        <Button id="botao-preto-arredondado" textId="texto-botao" text="Texto Botão"/>
        <Button id="botao-branco-arredondado" textId="texto-botao" text="Texto Botão"/>
        <Button id="botao-preto-retangular" textId="texto-botao" text="Texto Botão"/>
        <Button id="botao-branco-retangular" textId="texto-botao" text="Texto Botão"/>
      </header>
    </div>
  );
}

export default App;
