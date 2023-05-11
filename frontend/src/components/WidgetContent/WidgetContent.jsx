import React, {useState} from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";
import {
  Container,
  RightSideContent,
  LeftSideContent, 
  IconButton,
  GoalsIconsContainer,
} from "./WidgetContent.styled";
import Icon from "../Icon/Icon";

export const WidgetContent = ({
  id,
  textDescription,
  ReminderDate,
  ReminderHour,
  goalsIcon,
  progressValue,
  goalValue, 
  habitsIcon,
  ExpenseValue
}) => {
  const [habitCheck, setHabitCheck] = useState(true);
  const [clickAddIcon, setClickAddIcon] = useState(true);
  const [clickRemoveIcon, setClickRemoveIcon] = useState(true);

  const changeHabitIcon = () => {
    setHabitCheck(!habitCheck);
  };

  const addHandleMouseDown = () => {
    setClickAddIcon(false)   
  }
  const addHandleMouseUp = () => {
    setClickAddIcon(true)   
  }

  const removeHandleMouseDown = () => {
    setClickRemoveIcon(false)   
  }
  const removeHandleMouseUp = () => {
    setClickRemoveIcon(true)   
  }
  switch (id) {
    default:
      return (
        <Box
          id="WidgetContentBox"
          content={
            <Text id="description-widget" text="Você esqueceu de passar o ID" />
          }
        ></Box>
      );
    case "ReminderContent":
      return (
        <Box
          id="WidgetContentBox"
          content={
            <Container>
              <Text id="description-widget" text={textDescription} />
              <RightSideContent>
                <Text id="item-widget" text={ReminderDate} />
                <Text id="item-widget" text={ReminderHour} />
              </RightSideContent>
            </Container>
          }
        ></Box>
      );
    case "GoalsContent":
      return (
        <Box
          id="WidgetContentBox"
          content={
            <Container>
              <LeftSideContent>
                <Icon icon={goalsIcon} />
                <Text id="description-widget" text={textDescription} />
              </LeftSideContent>
              <RightSideContent>
                <Text id="item-widget" text={progressValue + "/" + goalValue} />  
                <GoalsIconsContainer>             
                  <IconButton onMouseDown={addHandleMouseDown} onMouseUp={addHandleMouseUp}>{clickAddIcon ? <Icon id="goalsIcons" icon="add_circle_outline"/>: <Icon id="goalsIcons" icon="add_circle"/> }</IconButton>
                  <IconButton onMouseDown={removeHandleMouseDown} onMouseUp={removeHandleMouseUp}>{clickRemoveIcon ? <Icon id="goalsIcons" icon="remove_circle_outline"/>:<Icon id="goalsIcons" icon="remove_circle"/>}</IconButton>            
                </GoalsIconsContainer>
              </RightSideContent>
            </Container>
          }
        ></Box>
      );
    case "HabitsContent":
      return (
        <Box
          id="WidgetContentBox"
          content={
            <Container>
              <LeftSideContent>
                <Icon icon={habitsIcon} />
                <Text id="description-widget" text={textDescription} />
              </LeftSideContent>
              <RightSideContent>
              <IconButton onClick={changeHabitIcon}> 
              {habitCheck ? <Icon id="goalsIcons" icon="radio_button_unchecked_outlined"/> : <Icon id="goalsIcons" icon="radio_button_checked_outlined"/>}</IconButton>
              </RightSideContent>
            </Container>
          }
        ></Box>
      );
      case "ExpenseContent":
        return (
          <Box
            id="WidgetContentBox"
            content={
              <Container>
                <LeftSideContent>                  
                  <Text id="description-widget" text={textDescription} />
                </LeftSideContent>
                <RightSideContent>
                <Text id="item-widget" text={ExpenseValue} />
                </RightSideContent>
              </Container>
            }
          ></Box>
        );
  }
};
