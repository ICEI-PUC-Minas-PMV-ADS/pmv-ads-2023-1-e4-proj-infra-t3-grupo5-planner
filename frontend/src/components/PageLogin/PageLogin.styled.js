import styled from "styled-components";
import { toRem } from "../../utils/toRem";


export const LoginContainer = styled.div`
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
padding:${toRem(32)} ${toRem(16)} ${toRem(32)} ${toRem(16)};
`;

export const InfoContainer = styled.div`
width:100%;
gap: ${toRem(16)};
display: flex;
flex-direction: row;
`
export const ButtonContainer = styled.div`
display:flex;
flex-direction:column;
margin-top:${toRem(16)};
justify-content: center;
align-items: center;
`

export const LogoContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
width:100%;
margin-top: ${toRem(24)};
`
export const RegisterContainer = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`