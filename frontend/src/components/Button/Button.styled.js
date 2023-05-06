import styled from "styled-components";

const ButtonStyled = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.botao-preto-arredondado, &.botao-branco-arredondado {
        background-color: #333333;
        width: 191px;
        height: 48px;
        border-radius: 32px;
    }

    &.botao-preto-arredondado:hover, &.botao-branco-arredondado:hover, &.botao-preto-retangular:hover, &.botao-branco-retangular:hover {
        background-color: #ed4858;
    }

    &.botao-preto-retangular, &.botao-branco-retangular {
        background-color: #333333;
        width: 228px;
        height: 46px;
        border-radius: 8px;
    }

    &.botao-branco-arredondado, &.botao-branco-retangular {
        background-color: #FFFFFF;
        border: 2px solid #000000;
        height: 46px;
    }
`;

export default ButtonStyled;