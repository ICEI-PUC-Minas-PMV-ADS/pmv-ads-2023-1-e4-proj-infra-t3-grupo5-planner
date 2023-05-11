import styled from "styled-components";
import { toRem } from "../../utils/toRem";

const TextStyled = styled.p`
  font-family: "Quicksand";
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  line-height: 160%;
  color: #1a1a1a;
  margin: 0 !important;

  &.big-title {
    font-size: ${toRem(32)};
    font-weight: 600;
  }

  &.item-widget {
    font-size: ${toRem(18)};
    font-weight: 400;
  }

  &.subtitle {
    font-size: ${toRem(26)};
    font-weight: 600;
  }

  &.title-widget {
    font-size: ${toRem(20)};
    font-weight: 700;
    text-transform: uppercase;
  }

  &.label-styled {
    font-size: ${toRem(14)};
    font-weight: 700;
    color: #696767;
  }

  &.button-black-text,
  &.button-white-text {
    font-size: ${toRem(16)};
    font-weight: 700;
  }

  &.button-white-text {
    color: #ffffff;
  }

  &.button-red-text {
    color: #ED4B58;
  }

  &.text-input {
    font-size: ${toRem(16)};
    font-weight: 400;
  }

  &.message-error {
    font-size: ${toRem(12)};
    font-weight: 400;
    color: #ed4b58;
  }

  &.little-text {
    font-size: ${toRem(20)};
    font-weight: 600;
  }

  &.description-widget {
    font-size: ${toRem(16)};
    font-weight: 700;   
    line-height: 100%; 
  }
`;
export default TextStyled;
