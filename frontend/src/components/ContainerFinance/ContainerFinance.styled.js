import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Line = styled.div`
  flex-direction: row;
  align-items: top;
  display: flex;
  justify-content: left;
  margin-left: ${toRem(0)};
  width: 100%;
  padding: ${toRem(0)};
`;

export const Balance = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const Buttons = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const BalanceValue = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  font-family: "Quicksand";
  font-size: ${toRem(20)};
  font-weight: 400;
  color: ${(props) => (props.isNegative ? "red" : "green")};
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &.label-name {
    width: 70%;
    margin-right: ${toRem(8)};
    margin-top: ${toRem(4)};
  }

  &.label-value {
    width: 30%;
  }
`;

export const ScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${toRem(240)};
  overflow: scroll;
  overflow-x: hidden;
`;
export const DownRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: ${toRem(48)};
  padding-right: ${toRem(16)};
`;
