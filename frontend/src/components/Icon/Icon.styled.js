import styled from "styled-components";
import {toRem} from "../../utils/toRem"

export const IconStyled = styled.span`
font-family: "Material Icons";
color: #333333;
width: ${toRem(24)};
&.goalsIcons{
    :hover{      
        color:#ED4B58;  
        cursor: pointer;
    }   
    
}
`