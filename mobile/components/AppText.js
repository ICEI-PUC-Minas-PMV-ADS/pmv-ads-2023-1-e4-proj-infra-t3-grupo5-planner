import React from "react";
import { Text, StyleSheet } from "react-native";

const AppText = ({ type, children, color }) => {
  const style = getTextStyle(type);
  const textColor = { color };
  return (
    <Text style={[styles.defaultStyle, style, textColor]}>{children}</Text>
  );
};

const getTextStyle = (type) => {
  switch (type) {
    case "Title":
      return styles.Title;
    case "Subtitle":
      return styles.Subtitle;
    case "SmallText":
      return styles.SmallText;
    case "SmallTextBold":
      return styles.SmallTextBold;
    case "Label":
      return styles.Label;
    case "MediumText":
      return styles.MediumText;
    case "MediumTextBold":
      return styles.MediumTextBold;
    case "ErrorText":
      return styles.ErrorText;
    case "Caption":
      return styles.Caption;
    default:
      return {};
  }
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "Quicksand_400Regular",
    fontSize: 16,
    fontStyle: "normal",
  },
  Title: {
    fontFamily: "Quicksand_700Bold",
    fontStyle: "normal",
    fontSize: 26,
  },
  Subtitle: {
    fontFamily: "Quicksand_700Bold",
    fontStyle: "normal",
    fontSize: 20,
  },
  SmallText: {
    fontFamily: "Quicksand_400Regular",
    fontStyle: "normal",
    fontSize: 14,
  },
  SmallTextBold: {
    fontFamily: "Quicksand_700Bold",
    fontStyle: "normal",
    fontSize: 14,
  },
  Label: {
    fontFamily: "Quicksand_700Bold",
    fontStyle: "normal",
    fontSize: 14,
    color: "#696767",
  },
  MediumText: {
    fontFamily: "Quicksand_400Regular",
    fontStyle: "normal",
    fontSize: 16,
  },
  MediumTextBold: {
    fontFamily: "Quicksand_700Bold",
    fontStyle: "normal",
    fontSize: 16,
  },
  ErrorText: {
    fontFamily: "Quicksand_400Regular",
    fontStyle: "normal",
    fontSize: 12,
    color: "#ED4B58",
  },
  Caption: {
    fontFamily: "Quicksand_400Regular",
    fontStyle: "normal",
    fontSize: 12,
  },
});

export default AppText;
