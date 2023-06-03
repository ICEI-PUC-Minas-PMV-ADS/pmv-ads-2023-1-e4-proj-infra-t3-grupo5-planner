import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import AppText from "./AppText";

const Button = ({ title, onPress, buttonType, fontColor, ...props }) => {
  const getButtonStyle = () => {
    switch (buttonType) {
      case "smallStandard":
        return styles.smallStandard;
      case "transparentStandard":
        return styles.transparentButton;
      case "circleAddButton":
        return styles.circleAddButton;
      case "whiteRoundedButton":
        return [
          styles.roundedButton,
          { backgroundColor: "white", borderWidth: 2, borderColor: "black" },
        ];
      case "redRoundedButton":
        return [styles.roundedButton, { backgroundColor: "#ED4B58" }];
      case "blackRoundedButton":
        return [styles.roundedButton, { backgroundColor: "black" }];
      default:
        return styles.standard;
    }
  };
  return (
    <TouchableOpacity onPress={onPress} style={[getButtonStyle(), props.style]}>
      {buttonType === "circleAddButton" && (
        <View style={styles.styleIcon}>
          <Octicons name="plus" size={44} color={fontColor} />
        </View>
      )}
      {buttonType && buttonType.includes("roundedButton") && (
        <View style={styles.smallIconContainer}>
          <Octicons name="plus" size={16} color={fontColor} />
        </View>
      )}
      <AppText type="MediumTextBold" color={fontColor}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  standard: {
    backgroundColor: "#333333",
    borderRadius: 8,
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  smallStandard: {
    backgroundColor: "#333333",
    borderRadius: 8,
    width: 132,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  transparentButton: {
    backgroundColor: "transparent",
    borderRadius: 8,
    width: 132,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  circleAddButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#ED4B58",
    alignItems: "center",
  },
  roundedButton: {
    width: 280,
    height: 48,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  styleIcon: {
    paddingTop: 6,
  },
  smallIconContainer: {
    paddingRight: 8,
    paddingTop: 3,
  },
  standardText: {
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 16,
  },
});
export default Button;
