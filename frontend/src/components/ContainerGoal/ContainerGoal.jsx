import React from 'react'
import {NewGoalContent, ScrollBox,DownRow } from "./ContainerGoal.styled"
import Box from "../Box/Box";
import { RedBox, WhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import { WidgetContent } from "../WidgetContent/WidgetContent";
import Button from "../Button/Button";
import { useState } from "react";

const ContainerGoal = () => {  
    const [goals, setGoals] = useState([]);

    const addNewGoal = () => {
      setGoals([...goals, "Nova meta"]);
    };
  
    return (
      <Box
        id="WidgetBox"
        content={
          <div>
            <RedBox>
              <Text id="title-widget" text="Metas" />
            </RedBox>
            <WhiteBox>
              <ScrollBox>
                {goals.map((goal, index) => (
                  <NewGoalContent key={index}>
                    <WidgetContent
                      id="GoalsContent"
                      GoalsIcon="radio_button_unchecked_outlined"
                      textDescription={goal}
                      progressValue="0"
                      goalValue="0"
                    />
                  </NewGoalContent>
                ))}
              </ScrollBox>
              <DownRow>
                <Button
                  plusButton
                  id="pink-button"
                  text=""
                  onClick={addNewGoal}
                />
              </DownRow>
            </WhiteBox>
          </div>
        }
      ></Box>
    );
}

export default ContainerGoal;