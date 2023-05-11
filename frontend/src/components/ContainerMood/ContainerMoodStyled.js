import styled from "styled-components";

export const ContainerMoodStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  &.not-selected {
    opacity: 0.5;
  }
`;
