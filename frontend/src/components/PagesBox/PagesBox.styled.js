import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const RedBoxStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: ${toRem(720)};
height: ${toRem(80)};
background: #ED4B58;
border-top: 4px solid #000000;
border-left: 4px solid #000000;
border-right: 4px solid #000000;
border-radius: ${toRem(32)} ${toRem(32)} ${toRem(0)} ${toRem(0)};
font-family: 'Quicksand';
font-style: normal;
font-weight: 500;
font-size: 40px;
color: #FFFFFF;


`;
export const GrayBoxStyled = styled.div`
width: ${toRem(720)};
height: ${toRem(552)};
background: #D9D9D9;
border: ${toRem(4)} solid #000000;
border-radius: ${toRem(0)} ${toRem(0)} ${toRem(32)} ${toRem(32)};
`;