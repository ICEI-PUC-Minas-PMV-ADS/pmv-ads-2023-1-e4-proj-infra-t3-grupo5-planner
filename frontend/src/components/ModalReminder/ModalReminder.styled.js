import styled from "styled-components";

export const ContainerReminderContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 97%;
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
export const Buttons = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  margin-top: 80px;
`;
