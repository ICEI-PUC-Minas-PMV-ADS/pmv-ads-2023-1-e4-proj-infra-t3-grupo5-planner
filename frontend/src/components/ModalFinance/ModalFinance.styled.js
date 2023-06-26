import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 97%;
`;

export const InputFinance = styled.input`
  width: 94%;
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
`;

export const SelectFinance = styled.select`
  width: 94%;
  background: #ffffff;
  border: ${toRem(2)} solid #333333;
  border-radius: ${toRem(8)};
  padding: ${toRem(4)} ${toRem(8)};
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: ${toRem(16)};
  color: #333333;
`;

export const Buttons = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-top: 80px;
  width: 100%;
`;

export const Label = styled.div`
  flex-direction: column;

  &.label-name {
    width: 432px;
    margin-top: 44px;
    margin-bottom: 20px;
  }

  &.label-type {
    width: 160px;
    margin-top: 44px;
    margin-bottom: 20px;
  }

  &.label-value {
    width: 616px;
    margin-bottom: 55px;
  }
`;

export const WidthArea = styled.div`
  &.OnePart {
    width: 30%;
  }
  &.TwoPart {
    width: 70%;
    margin-right: 32px;
  }
  &.ThreePart {
    width: 100%;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
