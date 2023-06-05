import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Button from "../components/Buttons";
import AppText from "../components/AppText";
import ItemSeparator from "./ItemSeparator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WidgetContentCard = ({
  type,
  textDescription,
  reminderDate,
  reminderHour,
  goalsIcon,
  progressValue,
  goalValue,
  habitsIcon,
  expenseValue,
}) => {
  const [habitCheck, setHabitCheck] = useState(true);
  const [ProgressValue, setProgressValue] = useState(true);

  const [touchAddIcon, setTouchAddIcon] = useState(true);
  const [touchRemoveIcon, setTouchRemoveIconn] = useState(true);

  const changeHabitIcon = () => {
    setHabitCheck(!habitCheck);
  };

  const handleAddPress = () => {
    setTouchAddIcon(!touchAddIcon);
  };

  const handleRemovePress = () => {
    setTouchRemoveIconn(!touchRemoveIcon);
  };

  switch (type) {
    default:
      return (
        <View style={styles.container}>
          <AppText type="SmallTextBold">Você não definiu o tipo</AppText>
        </View>
      );
    case "ReminderContent":
      return (
        <View style={styles.container}>
          <AppText type="SmallTextBold">{textDescription}</AppText>
          <View style={styles.rightSide}>
            <AppText type="Caption">{reminderDate}</AppText>
            <ItemSeparator size="s" />
            <AppText type="Caption">{reminderHour}</AppText>
          </View>
        </View>
      );
    case "GoalsContent":
      return (
        <View style={styles.container}>
          <View style={styles.leftSideWithIcon}>
            <MaterialCommunityIcons name={goalsIcon} size={24} />
            <ItemSeparator size="s" />
            <AppText type="SmallTextBold">{textDescription}</AppText>
          </View>

          <View style={styles.rightSide}>
            <AppText type="Caption">
              {progressValue}/{goalValue}
            </AppText>
            <ItemSeparator size="s" />
            <TouchableOpacity onPress={handleAddPress}>
              {touchAddIcon ? (
                <MaterialCommunityIcons name="plus-circle-outline" size={16} />
              ) : (
                <MaterialCommunityIcons
                  name="plus-circle"
                  size={16}
                ></MaterialCommunityIcons>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRemovePress}>
              {touchRemoveIcon ? (
                <MaterialCommunityIcons name="minus-circle-outline" size={16} />
              ) : (
                <MaterialCommunityIcons name="minus-circle" size={16} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      );
    case "HabitContent":
      return (
        <View style={styles.container}>
          <View style={styles.leftSideWithIcon}>
            <MaterialCommunityIcons name={habitsIcon} size={24} />
            <ItemSeparator size="s" />
            <AppText type="SmallTextBold">{textDescription}</AppText>
          </View>

          <View style={styles.rightSide}>
            <ItemSeparator size="s" />
            <TouchableOpacity onPress={changeHabitIcon}>
              {habitCheck ? (
                <MaterialCommunityIcons name="radiobox-blank" size={16} />
              ) : (
                <MaterialCommunityIcons
                  name="radiobox-marked"
                  size={16}
                ></MaterialCommunityIcons>
              )}
            </TouchableOpacity>
          </View>
        </View>
      );
    case "ExpenseContent":
      return (
        <View style={styles.container}>
          <AppText type="SmallTextBold">{textDescription}</AppText>
          <View style={styles.rightSide}>
            <AppText type="Caption">{expenseValue}</AppText>
          </View>
        </View>
      );
    case "ChecklistContent":
      return (
        <View style={styles.container}>
          <View style={styles.leftSideWithIcon}>
            <MaterialCommunityIcons name={habitsIcon} size={24} />
            <ItemSeparator size="s" />
            <AppText type="SmallTextBold">{textDescription}</AppText>
          </View>

          <View style={styles.rightSide}>
            <ItemSeparator size="s" />
            <TouchableOpacity onPress={changeHabitIcon}>
              {habitCheck ? (
                <MaterialCommunityIcons
                  name="checkbox-blank-outline"
                  size={24}
                />
              ) : (
                <MaterialCommunityIcons
                  name="checkbox-marked"
                  size={24}
                  color="#ED4B58"
                ></MaterialCommunityIcons>
              )}
            </TouchableOpacity>
          </View>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    width: 270,
    height: 48,
    padding: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#000",
    alignSelf: "center",
    backgroundColor: "#F2F2F2",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  leftSide: {
    width: "50%",
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  leftSideWithIcon: {
    width: "65%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rightSide: {
    position: "absolute",
    right: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 8,
  },
});
export default WidgetContentCard;
