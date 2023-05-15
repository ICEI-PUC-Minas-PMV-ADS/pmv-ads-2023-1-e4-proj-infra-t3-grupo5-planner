import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const NewGoalContent = styled.div`
 margin-bottom: ${toRem(16)};
`;
export const PlusButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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
