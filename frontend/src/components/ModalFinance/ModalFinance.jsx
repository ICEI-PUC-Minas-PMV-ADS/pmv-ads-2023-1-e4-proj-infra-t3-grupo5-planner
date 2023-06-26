import React from "react";
import { useForm } from "react-hook-form";
import Box from "../Box/Box";
import { ModalRedBox, ModalWhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { Buttons, Line, WidthArea, ModalOverlay, InputFinance, SelectFinance } from "./ModalFinance.styled";

const ModalFinance = ({ onClose, onIncluirFinanca }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleModalClose = () => {
    onClose();
  };

  const onSubmit = (data) => {
    onIncluirFinanca(data);
    reset();
    onClose();
  };

  return (
    <ModalOverlay>
      <Box
        id="ModalBox"
        content={
          <div>
            <ModalRedBox>
              <Text id="title-modal" text="Defina uma finança" />
            </ModalRedBox>
            <ModalWhiteBox>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Line>
                  <WidthArea className="TwoPart">
                    <Text text="Nome"/>
                      <InputFinance
                        type="text"
                        placeholder="Nome"
                        {...register("nome", { required: true })}
                      />
                  </WidthArea>
                  <WidthArea className="OnePart">
                    <Text text="Tipo"/>
                      <SelectFinance {...register("tipo", { required: true })}>
                        <option value="">Selecione...</option>
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                      </SelectFinance>
                  </WidthArea>
                </Line>
                <Line>
                  <WidthArea className="ThreePart">
                    <Text text="Valor"/>
                      <InputFinance
                        type="text"
                        pattern="\d+(\,\d{1,2})?"
                        placeholder="R$ 00,00"
                        {...register("valor", { required: true })}
                      />
                  </WidthArea>
                </Line>
                <Buttons>
                  <Button
                    id="text-button"
                    text="Cancelar"
                    textId="button-black-text"
                    onClick={handleModalClose}
                  />
                  <Button
                    id="rectangular-black-button"
                    textId="button-white-text"
                    type="submit"
                    text="Incluir finança"
                  />
                </Buttons>
              </form>
            </ModalWhiteBox>
          </div>
        }
      />
    </ModalOverlay>
  );
};

export default ModalFinance;


