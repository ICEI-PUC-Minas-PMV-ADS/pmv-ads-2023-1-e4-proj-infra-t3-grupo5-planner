import styled from "styled-components";
import {toRem} from "../../utils/toRem";

export const TextAreaStyled = styled.textarea`
display:flex;
background: #FFFFFF;
border: ${toRem(2)} solid #333333;
border-radius:${toRem(8)};
padding: ${toRem(4)} ${toRem(8)};
font-family: 'Quicksand';
font-style: normal;
font-weight: 400;
font-size: ${toRem(16)};
color: #333333;
max-width:${toRem(256)};
 min-height: ${toRem(192)};   
`