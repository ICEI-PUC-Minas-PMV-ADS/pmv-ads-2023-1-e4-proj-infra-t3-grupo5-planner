import React from "react";
import Box from "../Box/Box";
import { RedBox, WhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import Button from "../Button/Button";
import {
  Buttons,
  Line,
  Label,
  Balance,
  BalanceValue,
} from "./ContainerFinance.styled";
import { ScrollBox, DownRow } from "./ContainerFinance.styled";

const ContainerFinance = () => {
  return (
    <Box
      id="WidgetBox"
      content={
        <div>
          <RedBox>
            <Text id="big-title" text="Finanças" />
          </RedBox>
          <WhiteBox>
            <ScrollBox>
              <Line>
                <Label className="label-name">
                  <Text id="little-text" text="Aluguel"></Text>
                </Label>
                <Label className="label-value">
                  <Text id="text-container-content" text="-R$ 1.000,00"></Text>
                </Label>
              </Line>
            </ScrollBox>
            <DownRow>
              <Balance>
                <Text id="little-text" text="Saldo:"></Text>
              </Balance>
              <BalanceValue>
                <Text id="text-container-content" text="-R$ 1.000,00"></Text>
              </BalanceValue>
              <Buttons>
                <Button
                  plusButton
                  id="pink-button"
                  text=""
                  textId="button-black-text"
                ></Button>
              </Buttons>
            </DownRow>
          </WhiteBox>
        </div>
      }
    ></Box>
  );
};

export default ContainerFinance;
