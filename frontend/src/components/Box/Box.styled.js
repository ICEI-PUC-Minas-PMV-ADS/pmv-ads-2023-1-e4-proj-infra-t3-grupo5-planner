import styled from "styled-components";
import { toRem } from "../../utils/toRem";

const Box = styled.div`
  display: flex;
  flex-direction: row;

  &.HeaderBox {
    width: ${toRem(1440)};
    height: ${toRem(80)};
    border-radius: ${toRem(0)} ${toRem(0)} ${toRem(32)} ${toRem(32)};
    background-color: #333333;
    border: 4px solid #333333;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${toRem(56)};
    @media (max-width: 768px) {
      height: ${toRem(60)};
      width: 100%;
      padding: 0 ${toRem(10)};
      justify-content: space-between;
      border-radius: ${toRem(0)} ${toRem(0)} ${toRem(20)} ${toRem(20)};
    }
  }
  &.MoodsBox {
    width: ${toRem(448)};
    height: ${toRem(80)};
    border-radius: ${toRem(32)} ${toRem(0)} ${toRem(0)} ${toRem(32)};
    background-color: #ed4b58;
    border: 4px solid #333333;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${toRem(15)};
  }

  &.WidgetContentBox {
    width: ${toRem(400)};
    height: ${toRem(72)};
    border-radius: ${toRem(16)};
    background-color: #f2f2f2;
    border: ${toRem(4)} solid #333333;
  }
  &.ModalBox {
    filter: drop-shadow(${toRem(8)} ${toRem(8)} ${toRem(0)} #333333);
  }
`;

export const WidgetBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WhiteBox = styled.div`
  width: ${toRem(446)};
  height: ${toRem(376)};
  background: #f2f2f2;
  border-top: none;
  border-bottom: ${toRem(4)} solid #333333;
  border-left: ${toRem(4)} solid #333333;
  border-right: ${toRem(4)} solid #333333;
  border-radius: ${toRem(0)} ${toRem(0)} ${toRem(32)} ${toRem(32)};
`;

export const RedBox = styled.div`
  width: ${toRem(446)};
  height: ${toRem(64)};
  background: #ed4b58;
  border: ${toRem(4)} solid #333333;
  border-radius: ${toRem(32)} ${toRem(32)} ${toRem(0)} ${toRem(0)};
`;

export const ModalWhiteBox = styled.div`
  width: ${toRem(696)};
  height: ${toRem(352)};
  background: #f2f2f2;
  border-top: none;
  border-bottom: ${toRem(4)} solid #333333;
  border-left: ${toRem(4)} solid #333333;
  border-right: ${toRem(4)} solid #333333;
  border-radius: ${toRem(0)} ${toRem(0)} ${toRem(32)} ${toRem(32)};
`;

export const ModalRedBox = styled.div`
  width: ${toRem(696)};
  height: ${toRem(80)};
  background: #ed4b58;
  border: ${toRem(4)} solid #333333;
  border-radius: ${toRem(32)} ${toRem(32)} ${toRem(0)} ${toRem(0)};
`;

export default Box;
