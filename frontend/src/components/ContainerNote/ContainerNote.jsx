import React from "react";
import Box from "../Box/Box";
import { RedBox, WhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import { BoxSize, TextArea } from "./ContainerNote.styled";


const ContainerNote = () => {

    return (
        <Box id="WidgetBox" content={
            <div>
                <RedBox>
                    <Text id="big-title" text="Notas" />
                </RedBox>
                <WhiteBox>
                    <BoxSize>
                        <TextArea placeholder="Digite aqui"  />
                    </BoxSize>
                </WhiteBox>
            </div>
        }></Box>
    );
};

export default ContainerNote;



