import styled from "styled-components";

const MoodStyled = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  opacity: ${props => props.isSelected ? 1 : 0.6};

  &.small-mood {
    width: 58px;
    height: 58px;
  }

  &.medium-mood {
    width: 90px;
    height: 90px;
  }

  &.big-mood {
    width: 120px;
    height: 120px;
  }

  &:hover {
    opacity: 1;
  }
`;

export default MoodStyled;
