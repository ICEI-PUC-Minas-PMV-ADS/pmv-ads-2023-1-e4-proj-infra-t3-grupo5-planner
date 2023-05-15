import styled from "styled-components";
import { toRem } from "../../utils/toRem";


export const CadastroContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width:100%;
margin-top: ${toRem(112)};
`;

export const FormStyled = styled.form`
display:flex;
flex-direction: column;
align-items: center;
gap: ${toRem(8)};
padding:${toRem(64)} ${toRem(16)} ${toRem(16)} ${toRem(16)};
`;

export const InfoContainer = styled.div`
width:100%;
gap: ${toRem(16)};
display: flex;
flex-direction: row;
`
export const ButtonContainer = styled.div`
display:flex;
margin-top:${toRem(40)};
justify-content: center;
`
