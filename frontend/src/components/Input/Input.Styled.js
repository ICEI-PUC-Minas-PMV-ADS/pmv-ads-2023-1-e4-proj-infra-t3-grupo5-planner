import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const InputStyled = styled.input`
  width: 100%;
  background: #ffffff;
  border: ${toRem(2)} solid #333333;
  border-radius: ${toRem(8)};
  padding: ${toRem(4)} ${toRem(8)};
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: ${toRem(16)};
  color: #333333;

  &.Text {
    border: ${toRem(2)} solid #333333;
    border-radius: ${toRem(8)};
  }
  // &.Text{
  //     border: none;
  //     &:focus{
  //         outline:0;
  //     }
  //     }

  &.Checkbox {
    accent-color: #333333;
    cursor: pointer;
  }
`;
