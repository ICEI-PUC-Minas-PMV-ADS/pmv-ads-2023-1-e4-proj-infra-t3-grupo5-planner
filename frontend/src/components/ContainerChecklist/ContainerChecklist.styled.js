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

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;

  &.label-checkbox {
    width: ${toRem(24)};
    height: ${toRem(24)};
    margin-right: ${toRem(8)};
    margin-top: ${toRem(4)};
  }

  &.label-text {
    width: 85%;
    &[contentEditable="true"] {
    }
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
