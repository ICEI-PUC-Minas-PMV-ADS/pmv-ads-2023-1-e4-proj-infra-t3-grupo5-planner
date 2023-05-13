import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Line = styled.div`
  flex-direction: row;
  align-items: top;
  display: flex;
  justify-content: left;
  margin-left: 0px;
  width: 100%;
  padding: 0;
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
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &.label-name {
    width: 70%;
    margin-right: 8px;
    margin-top: 3px;
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
  height: 48px;
  padding-right: 16px;
`;
