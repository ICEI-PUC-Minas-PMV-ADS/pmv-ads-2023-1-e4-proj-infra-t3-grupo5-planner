import styled from "styled-components";

export const HelpComponent = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const HelpTitle = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin: 0;
`;

export const HelpText = styled.div`
  display: ${(props) => (props.isSelected ? "inline" : "none")};
  transition: "transform 0.3s ease";
`;

export const HR = styled.div`
  height: 4px;
  margin: 0;
`;
