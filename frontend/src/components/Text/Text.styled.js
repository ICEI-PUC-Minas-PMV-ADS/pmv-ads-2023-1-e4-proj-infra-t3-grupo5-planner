import styled from "styled-components";
import { toRem } from "../../utils/toRem";

const TextStyled = styled.p`
  font-family: "Quicksand";
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  line-height: 160%;
  color: #1a1a1a;

  &.titulo-grande {
    font-size: ${toRem(32)};
    width: 270px;
    height: 51px;
    font-weight: 600;
  }

  &.item-widget {
    font-size: ${toRem(20)};
    width: 328px;
    height: 32px;
    font-weight: 400;
  }

  &.subtitulo {
    font-size: ${toRem(26)};
    width: 328px;
    height: 42px;
    font-weight: 600;
  }

  &.titulo-widget {
    font-size: ${toRem(20)};
    width: 328px;
    height: 32px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &.label-styled {
    font-size: ${toRem(14)};
    width: 328px;
    height: 22px;
    font-weight: 700;
    color: #696767;
  }

  &.texto-botao {
    font-size: ${toRem(16)};
    width: 95px;
    height: 26px;
    font-weight: 700;
  }

  &.texto-input {
    font-size: ${toRem(16)};
    width: 328px;
    height: 26px;
    font-weight: 400;
  }

  &.mensagem-erro {
    font-size: ${toRem(12)};
    width: 328px;
    height: 19px;
    font-weight: 400;
    color: #ed4b58;
  }

  &.titulo-pequeno {
    font-size: ${toRem(20)};
    width: 328px;
    height: 32px;
    font-weight: 600;
  }
`;
export default TextStyled;
