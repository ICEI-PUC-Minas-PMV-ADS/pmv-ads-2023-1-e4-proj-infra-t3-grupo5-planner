import { HelpComponent, PrincipalText } from "./Help.style";
import React from "react";
import Text from "../Text/Text";
import Button from "../Button/Button";

const Help = ({ textId, text }) => {
    return (
        <HelpComponent>
            <PrincipalText>
            <Text id={`subtitle-grey`} text={`${text}`}/>
            <Button arrow text=''/>
            </PrincipalText>
            <><hr style={{height: 4, backgroundColor: 'black' }}></hr>
            </>
        </HelpComponent>
    )
}

export default Help;
