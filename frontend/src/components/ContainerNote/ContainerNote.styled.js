import styled from "styled-components";

export const BoxSize = styled.div`
  width: 392px;
  height: 248px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  max-width: 100%;
  line-height: 1.5;
  border-radius: 5px;
  border: 4px solid #333333;
  align-self: center;
  font-family: "Quicksand";
  font-size: 16px;
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
