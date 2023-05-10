import styled from "styled-components";

export const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const ImageStyled = styled.img`
  height: ${(props) => props.heightImage}px;
`;
