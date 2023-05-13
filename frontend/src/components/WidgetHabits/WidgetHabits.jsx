import React from "react";
import Box from "../Box/Box";
import { RedBox, WhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import { WidgetContent } from "../WidgetContent/WidgetContent";
import Button from "../Button/Button";
import { useState } from "react";
import {NewHabitContent, PlusButtonContainer} from "./WidgetHabits.styled";


export const WidgetHabits = () => {
  const [habits, setHabits] = useState([]);

  const addNewHabit = () => {
    setHabits([...habits, "Novo hábito"]);
  };

  return (
    <Box
      id="WidgetBox"
      content={
        <div>
          <RedBox>
            <Text id="title-widget" text="Hábitos" />
          </RedBox>
          <WhiteBox>
            <div>
              {habits.map((habit, index) => (
                <NewHabitContent key={index}>
                  <WidgetContent
                    id="HabitsContent"
                    habitsIcon="radio_button_unchecked_outlined"
                    textDescription={habit}
                  />
                </NewHabitContent>
              ))}
            </div>
            <PlusButtonContainer>
              <Button plusIcon id="pink-button" text="" onClick={addNewHabit} />
            </PlusButtonContainer>
          </WhiteBox>
        </div>
      }
    ></Box>
  );
};
