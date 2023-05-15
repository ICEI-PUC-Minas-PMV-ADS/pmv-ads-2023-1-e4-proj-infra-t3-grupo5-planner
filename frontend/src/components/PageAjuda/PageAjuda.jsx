import React from "react";
import {
  ContainerHelp,
  ContainerMessage,
  FormData,
  TextArea,
  PersonalData,
  ContainerButton,
  HeaderHelp,
} from "./PageAjuda.styled";
import Text from "../Text/Text";
import Help from "../Help/Help";
import FormContent from "../FormContent/FormContent";
import Button from "../Button/Button";

const PageAjuda = () => {
  return (
    <ContainerHelp>
      <HeaderHelp>
        <Text id="big-title" text="Sobre o MyPlan" />
      </HeaderHelp>
      <Help
        text="Quem somos"
        helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"
      />
      <Help
        text="Como utilizar os widgets"
        helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"
      />
      <Help
        text="Como editar o perfil"
        helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"
      />
      <Help
        text="Como utilizar os widgets"
        helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"
      />
      <Help
        text="Como recuperar a senha"
        helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"
      />
      <ContainerMessage>
        <Text id="big-title" text="Fale conosco" />
        <FormData>
          <PersonalData>
            <FormContent label="Seu nome" type="Text" />
            <FormContent label="Seu email" type="Text" error="Email inválido" />
          </PersonalData>
          <TextArea placeholder="Digite sua mensagem aqui" />
        </FormData>
      </ContainerMessage>
      <ContainerButton>
        <Button
          id="rectangular-black-button"
          text="Enviar"
          textId="button-white-text"
        />
      </ContainerButton>
    </ContainerHelp>
  );
};

export default PageAjuda;
