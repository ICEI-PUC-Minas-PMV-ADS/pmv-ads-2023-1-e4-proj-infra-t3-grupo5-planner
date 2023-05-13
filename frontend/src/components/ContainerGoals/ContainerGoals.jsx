import React from "react";
import Box from "../Box/Box";
import { ModalRedBox, ModalWhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import Input from "../Input/Input"
import Button from "../Button/Button";
import { Buttons, Line, Label } from "./ContainerGoals.styled";

const ContainerGoals = () => {

    return (
        <Box id="ModalBox" content={
            <div>
                <ModalRedBox>
                    <Text id="title-container" text="Defina uma meta" />
                </ModalRedBox>
                <ModalWhiteBox>
                    <Line>
                        <Label className="label-name">
                            <Text id="label-styled" text="Nome"></Text>
                            <Input type="Text"></Input>
                        </Label>
                        <Label className="label-type">
                            <Text id="label-styled" text="Objetivo"></Text>
                            <Input type="Text"></Input>
                        </Label>
                    </Line>
                    <Buttons>
                        <Button id="text-button" text="Cancelar" textId="button-black-text"></Button>
                        <Button id="rectangular-black-button" textId="button-white-text" text="Criar meta"></Button>
                    </Buttons>
                </ModalWhiteBox>
            </div>
        }></Box>
    );
};

export default ContainerGoals;



