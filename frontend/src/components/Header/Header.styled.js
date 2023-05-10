import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: ${toRem(1000)};
  margin: auto;
  @media (max-width: 768px) {
        width: 100%;
    }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 768px) {
        display: none;
    }
`;

export const Anchor = styled.a`
    text-decoration: none;
`;
