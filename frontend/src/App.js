import React from "react";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";
import Mood from "./components/Mood/Mood";

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
        <Button id="radio-black-button" plusIcon="white" textId="button-white-text" text="Texto Botão"/>
        <Button id="radio-white-button" plusIcon textId="button-black-text" text="Texto Botão"/>
        <Button id="rectangular-black-button" textId="button-white-text" text="Texto Botão"/>
        <Button id="rectangular-white-button" textId="button-black-text" text="Texto Botão"/>
        <Button id="pink-button" plusButton textId="button-black-text" text=""/>
        <Button id="close-button" closeIcon textId="button-black-text" text=""/>
        <Button id="text-button" textId="button-black-text" text="Texto Botão"/>
        <Button profileIcon id="profile-picture" text=""/>
        <Mood id="small-mood" mood="sad"/> 
        <Mood id="small-mood" mood="happy"/> 
        <Mood id="small-mood" mood="inLove"/> 
        <Mood id="small-mood" mood="playful"/> 
        <Mood id="small-mood" mood="worried"/> 
        <Mood id="small-mood" mood="angry"/> 
        <Mood id="medium-mood" mood="angry"/> 
        <Mood id="big-mood" mood="angry"/> 
      </header>
    </div>
  );
}

export default App;
