import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const ContainerHelp = styled.div`
  width: ${toRem(1440)};
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: ${toRem(30)} 0;
`;

export const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${toRem(35)} 0;
`;

export const FormData = styled.div`
  width: ${toRem(1440)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${toRem(20)} 0 0 0;
`;

export const TextArea = styled.textarea`
  width: ${toRem(670)};
  background: #ffffff;
  border: ${toRem(2)} solid #333333;
  border-radius: ${toRem(8)};
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: ${toRem(16)};
  color: #333333;
  padding: ${toRem(4)} ${toRem(8)};
`;

export const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  width: ${toRem(670)};
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
`;

export const HeaderHelp = styled.div`
  padding: ${toRem(15)} 0;
`;
