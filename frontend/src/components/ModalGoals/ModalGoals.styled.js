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
  width: 100%;
  margin-top: 152px;
`;

export const Label = styled.div`
  flex-direction: column;

  &.label-name {
    width: 504px;
    margin-top: 28px;
    margin-bottom: 168px;
  }

  &.label-type {
    width: 88px;
    margin-top: 28px;
    margin-bottom: 168px;
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
