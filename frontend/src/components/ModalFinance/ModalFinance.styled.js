import styled from "styled-components";

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
