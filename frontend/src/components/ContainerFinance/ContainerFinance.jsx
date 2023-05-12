import React from "react";
import Box from "../Box/Box";
import { ModalRedBox, ModalWhiteBox, RedBox, WhiteBox, WidgetBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import Input from "../Input/Input"

const ContainerFinance = () => {

    return (
        <Box id="ModalBox" content={
            <div>
                <Text id="title-container" text="Defina uma finança" />
                <ModalRedBox content={
                    <div>
                        <Text id="title-container" text="Defina uma finança" />
                    </div>}>
                </ModalRedBox>
                <ModalWhiteBox content={<div><Input></Input></div>}></ModalWhiteBox>    

                <WidgetBox ></WidgetBox>
                <RedBox>
                </RedBox>
                <WhiteBox content={<div><Input></Input></div>}></WhiteBox>
            </div>
        }></Box>
    );
};

export default ContainerFinance;



