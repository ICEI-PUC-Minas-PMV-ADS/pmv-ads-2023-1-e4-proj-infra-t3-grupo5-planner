import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const ContainerHome = styled.div`
  width: ${toRem(1440)};
  display: flex;
  flex-direction: column;
  margin: auto;

  padding: 0 ${toRem(30)} 0;
`;
export const LineButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  box-sizing: border-box;
`;
export const ContainerLayout = styled.div`
  width: 100%;
  height: ${toRem(800)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 4px solid #333333;
  border-radius: ${toRem(32)} ${toRem(0)} ${toRem(32)} ${toRem(32)};
`;

export const ContainerWidgets = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: ${toRem(16)};
  box-sizing: border-box;
  justify-content: space-between;
`;
