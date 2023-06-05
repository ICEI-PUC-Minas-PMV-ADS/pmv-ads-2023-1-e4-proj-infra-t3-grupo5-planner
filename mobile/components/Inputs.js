import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MaskInput, { Masks } from "react-native-mask-input";
import AppText from "./AppText";

const InputLabel = ({
  labelText,
  placeholder,
  inputSize = 280,
  icon,
  errorMessage,
  labelStyle,
  MaskedInput,
  value,
  onChangeText,
  ...props
}) => {
    const [masked, setMasked] = React.useState("");
    const [innerValue, setInnerValue] = React.useState("");

    const getInputStyle = () => {
      switch (labelStyle) {
        case "textArea":
          return styles.textArea;
        default:
          return styles.standard;
      }
    };
    const getIcon = () => {
      switch (icon) {
        case "schedule":
          return "calendar-month";
        case "clock":
          return "clock-outline";
        case "checkbox":
          return "checkbox-outline";
      }
    };
    const getMask = () => {
      switch (MaskedInput) {
        case "date":
          return Masks.DATE_DDMMYYYY;
        case "hour":
          return [/\d/, /\d/, ":", /\d/, /\d/];
        case "expense":
          return Masks.BRL_CURRENCY;
      }
    };

    const textAreaStyled = labelStyle === "textArea" ? { padding: 10 } : {};

  return (
    <View style={props.style}>
      {labelText && <AppText type="Label">{labelText}</AppText>}
      <View style={styles.container}>
        <MaskInput
          value={masked}
          onChangeText={(mask, unmasked) => {
            setMasked(mask);
            setInnerValue(unmasked);
            onChangeText(unmasked);
          }}
          mask={getMask()}
          secureTextEntry={MaskedInput === "password"}
          style={[getInputStyle(), { width: inputSize }, textAreaStyled]}
          inputMode={
            MaskedInput === "date" || MaskedInput === "hour"
              ? "numeric"
              : "none"
          }
          placeholder={placeholder}
          multiline={labelStyle === "textArea"}
          numberOfLines={labelStyle === "textArea" ? 10 : null}
          textAlignVertical={labelStyle === "textArea" ? "top" : null}
        />
        {icon && (
          <MaterialCommunityIcons
            name={getIcon()}
            size={24}
            color="black"
            style={[styles.icon, props.styleIcon]}
          />
        )}
      </View>
      <AppText type="ErrorText" color="#ED4B58">
        {errorMessage}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
    standard: {
      maxWidth:"100%",
      height: 40,
      borderRadius: 8,
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderWidth: 2,
      borderColor: "#333333",
      fontStyle: "normal",
    },
    textArea: {
      width: 280,
      height: "200%",
      borderWidth: 2,
      borderColor: "#333333",
      borderRadius: 8,
      backgroundColor: "white",
      fontStyle: "normal",
      padding: 10,
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
    },
    icon: {
      position: "absolute",
      top: 10,
      right: 10,
      zIndex: 1,
    },
});
export default InputLabel;
