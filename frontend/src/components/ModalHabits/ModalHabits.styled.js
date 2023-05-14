import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 97%;
`;

export const Buttons = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  margin-top: ${toRem(152)};
`;

export const Label = styled.div`
  flex-direction: column;

  &.label-name {
    width: ${toRem(504)};
    margin-top: ${toRem(28)};
    margin-bottom: ${toRem(168)};
  }

  &.label-type {
    width: ${toRem(88)};
    margin-top: ${toRem(28)};
    margin-bottom: ${toRem(168)};
  }
`;
export const WidthArea = styled.div`
  &.OnePart {
    width: 30%;
  }
  &.TwoPart {
    width: 70%;
    margin-right: ${toRem(32)};
  }
  &.ThreePart {
    width: 100%;
  }
`;