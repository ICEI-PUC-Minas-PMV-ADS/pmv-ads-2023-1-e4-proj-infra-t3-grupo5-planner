import { HelpComponent, PrincipalText } from "./Help.style";
import React, { useState } from "react";
import Text from "../Text/Text";
import Button from "../Button/Button";

const Help = ({ text }) => {

    const [rotated, setRotated] = useState(false);

    const handleArrowClick = () => {
        setRotated(!rotated);
        console.log(rotated)
    };

    return (
        <HelpComponent>
            <PrincipalText>
                <Text id={`subtitle-grey`} text={`${text}`} />
                <div onClick={() => handleArrowClick()}>
                    <Button
                        arrow
                        text=''
                        isSelected={rotated}
                    />
                </div>
            </PrincipalText>
            <><hr style={{ height: 4, backgroundColor: 'black' }}></hr>
            </>
        </HelpComponent>
    )
}

export default Help;
