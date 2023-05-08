import styled from "styled-components";
import { toRem } from "../../utils/toRem";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f2f2f2;
  border: 4px solid #333333;
  height: 424px;
  width: 696px;
  border-radius: 32px 32px;
  filter: drop-shadow(8px 8px 0px #000000);

  & > div {
    // height: 50%;
  }

  .cima {
    width: 696px;
    height: 80px;
    background-color: #ed4b58;
    border-radius: 24px 24px 0px 0px;
    border-bottom: 4px solid #333333;
  }

  .baixo {
    width: 100%;
    height: 344px;
    background-color: #f2f2f2;
    border-radius: 0px 0px 24px 24px;
  }

  // TENTATIVA DE MODIFICAR O CARD - Testando

  &.card-widget {
    width: 380px;

    .cima {
      width: 696px;
      height: 80px;
      background-color: #ed4b58;
      border-radius: 24px 24px 0px 0px;
      border-bottom: 4px solid #333333;
    }

    .baixo-widget {
      width: 100%;
      height: 344px;
      background-color: #f2f2f2;
      border-radius: 0px 0px 24px 24px;
    }
  }
`;

export default Card;
