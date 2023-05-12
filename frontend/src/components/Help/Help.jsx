import { HelpComponent, HelpText, HelpTitle } from "./Help.style";
import React, { useState } from "react";
import Text from "../Text/Text";
import Button from "../Button/Button";

const Help = ({ text, helpText }) => {

    const [rotated, setRotated] = useState(false);

    const handleArrowClick = () => {
        setRotated(!rotated);
        console.log(rotated)
    };

    return (
        <HelpComponent>
            <HelpTitle>
                <Text id={`subtitle-grey`} text={`${text}`} />
                <div onClick={() => handleArrowClick()}>
                    <Button
                        arrow
                        text=''
                        isSelected={rotated}
                    />
                </div>
            </HelpTitle>
            <div onClick={() => handleArrowClick()}>
                <HelpText isSelected={rotated}>
                    <Text id={`text-input`} text={helpText} />
                </HelpText>
            </div>
            <><hr style={{ height: 4, backgroundColor: 'black' }}></hr>
            </>
        </HelpComponent>
    )
}

export default Help;
