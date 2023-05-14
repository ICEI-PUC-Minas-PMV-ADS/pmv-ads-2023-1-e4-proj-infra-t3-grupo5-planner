import React from "react";
import Box from "../Box/Box";
import { ModalRedBox, ModalWhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import Input from "../Input/Input"
import Button from "../Button/Button";
import { Buttons, Line, Label } from "./ModalFinance.styled";

const ModalFinance = () => {

    return (
        <Box id="ModalBox" content={
            <div>
                <ModalRedBox>
                    <Text id="title-modal" text="Defina uma finança" />
                </ModalRedBox>
                <ModalWhiteBox>
                    <Line>
                        <Label className="label-name">
                            <Text id="label-styled" text="Nome"></Text>
                            <Input type="Text"></Input>
                        </Label>
                        <Label className="label-type">
                            <Text id="label-styled" text="Tipo"></Text>
                            <Input type="Text"></Input>
                        </Label>
                    </Line>
                    <Line>
                        <Label className="label-value">
                            <Text id="label-styled" text="Valor"></Text>
                            <Input type="Text" placeholder="R$ 000,00"></Input>
                        </Label>
                    </Line>
                    <Buttons>
                        <Button id="text-button" text="Cancelar" textId="button-black-text"></Button>
                        <Button id="rectangular-black-button" textId="button-white-text" text="Criar hábito"></Button>
                    </Buttons>
                </ModalWhiteBox>
            </div>
        }></Box>
    );
};

export default ModalFinance;



