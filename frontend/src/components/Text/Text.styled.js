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

  &.subtitle,
  &.subtitle-grey {
    font-size: ${toRem(26)};
    font-weight: 600;
  }

  &.subtitle-grey {
    color: #696767;
  }

  &.title-widget {
    font-size: ${toRem(20)};
    font-weight: 700;
    text-transform: uppercase;
  }

  &.title-modal {
    font-size: ${toRem(40)};
    font-weight: 500;
    color: #ffffff;
  }

  &.text-container-content {
    font-size: ${toRem(20)};
    font-weight: 400;
    color: #1a1a1a;
  }

  &.label-styled {
    font-size: ${toRem(14)};
    font-weight: 700;
    color: #696767;
  }

  &.title-container {
    font-size: ${toRem(40)};
    font-weight: 500;
    color: #ffffff;
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
    color: #ed4b58;
    font-weight: 700;
    font-size: ${toRem(14)};
  }

  &.text-input {
    font-size: ${toRem(16)};
    font-weight: 400;
  }

  &.message-error {
    font-size: ${toRem(12)};
    font-weight: 600;
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
