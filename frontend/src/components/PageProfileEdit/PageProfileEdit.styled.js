import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const ContainerProfileEdit = styled.div`
  width: ${toRem(842)};
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: ${toRem(30)} 0;
`;

export const HeaderProfileEdit = styled.div`
  padding: ${toRem(15)} 0;
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  &.downButtom {
    justify-content: end;
  }
`;
export const LineButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
`;

export const WidthArea = styled.div`
  &.OnePart {
    width: 30%;
    margin-right: 32px;
  }
  &.TwoPart {
    width: 70%;
  }
  &.ThreePart {
    width: 100%;
  }
`;
