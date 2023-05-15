import React from "react";
import Text from "../Text/Text";
import Button from "../Button/Button";
import {
  ContainerHome,
  LineButtons,
  Line,
  ContainerLayout,
  ContainerWidgets,
} from "./PageHome.styled";

import ContainerMood from "../ContainerMood/ContainerMood";
import ContainerReminder from "../ContainerReminder/ContainerReminder";
import ContainerChecklist from "../ContainerChecklist/ContainerChecklist";
import WidgetHabits from "../WidgetHabits/WidgetHabits";
import ContainerGoal from "../ContainerGoal/ContainerGoal";
import ContainerFinance from "../ContainerFinance/ContainerFinance";
import ContainerNote from "../ContainerNote/ContainerNote";

const PageHome = () => {
  return (
    <ContainerHome>
      <LineButtons>
        <Button
          plusIcon
          id="radio-black-button"
          textId="button-white-text"
          text="Lembretes"
        ></Button>
        <Button
          plusIcon
          id="radio-black-button"
          textId="button-white-text"
          text="Checklist"
        ></Button>
        <Button
          plusIcon
          id="radio-black-button"
          textId="button-white-text"
          text="Hábitos"
        ></Button>
        <Button
          plusIcon
          id="radio-black-button"
          textId="button-white-text"
          text="Metas"
        ></Button>
        <Button
          plusIcon
          id="radio-black-button"
          textId="button-white-text"
          text="Finanças"
        ></Button>
        <Button
          plusIcon
          id="radio-black-button"
          textId="button-white-text"
          text="Notas"
        ></Button>
      </LineButtons>
      <ContainerLayout>
        <Line>
          <Text id="big-title" text="Terça-Feira, 2 de maio de 2023" />
          <ContainerMood></ContainerMood>
        </Line>
        <ContainerWidgets>
          <ContainerReminder></ContainerReminder>
          <ContainerChecklist></ContainerChecklist>
          <ContainerGoal></ContainerGoal>
          <ContainerGoal></ContainerGoal>
          <ContainerFinance></ContainerFinance>
          <ContainerNote></ContainerNote>
        </ContainerWidgets>
      </ContainerLayout>
    </ContainerHome>
  );
};

export default PageHome;
