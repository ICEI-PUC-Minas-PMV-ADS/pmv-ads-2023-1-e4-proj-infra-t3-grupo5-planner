import styled from "styled-components";
import { toRem } from "../../utils/toRem";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #f2f2f2;
  border: 4px solid #333333;

  &.box-widget-content {
    width: ${toRem(400)};
    height: ${toRem(72)};
    border-radius: ${toRem(16)};
  }

  &.box-header {
    width: ${toRem(1440)};
    height: ${toRem(80)};
    border-radius: ${toRem(0)} ${toRem(0)} ${toRem(32)} ${toRem(32)};
  }

  &.box-moods {
    width: ${toRem(448)};
    height: ${toRem(80)};
    border-radius: ${toRem(32)} ${toRem(0)} ${toRem(0)} ${toRem(32)};
    background-color: #ed4b58;
  }

  // CRIAR COMPONENTE DE BOX COM 2 RETANGULOS

  //   &.box-card {
  //     width: 696px;
  //     height: 424px;

  //     & > div {
  //       height: 50%;
  //       background-color: red;
  //     }

  //     .cima {
  //       width: 100%;
  //       height: 80px;
  //       background-color: red;
  //       border-radius: 32px 32px 0px 0px;
  //     }

  //     & .baixo {
  //       width: 100%;
  //       height: 64px;
  //       background-color: white;
  //       border-radius: 0px 0px 32px 32px;
  //     }
  //   }
`;

export default Box;
