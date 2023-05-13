import React from "react";
import Box from "../Box/Box";
import { RedBox, WhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import Input from "../Input/Input"
import Button from "../Button/Button";
import { Buttons, Line, Label, BoxSize } from "./ContainerChecklist.styled";

const ModalFinance = () => {

    return (
        <Box id="WidgetBox" content={
            <div>
                <RedBox>
                    <Text id="big-title" text="Checklist" />
                </RedBox>
                <WhiteBox>
                    <BoxSize>
                        <Line>
                        <Label className="label-checkbox">
                            <Input type="Checkbox" className></Input>
                        </Label>
                        <Label className="label-text">
                            <Text id="text-container-content" text="Checkbox"></Text>
                        </Label>
                    </Line>
                    <Buttons>
                        <Button plusButton id="pink-button" text="" textId="button-black-text"></Button>
                    </Buttons>
                    </BoxSize>
                </WhiteBox>
            </div>
        }></Box>
    );
};

export default ModalFinance;



