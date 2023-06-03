import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HelpDropdown = ({ text, helpText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleIconPress = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={handleIconPress}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View style={styles.dropdownContainer}>
            <AppText type="Subtitle" color="#33333">
              {text}
            </AppText>
          </View>

          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={isExpanded ? "chevron-up" : "chevron-down"}
              size={24}
              color="#ED4B58"
            />
          </View>
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.dropdownContent}>
            <AppText>{helpText}</AppText>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    minHeight: 40,
    width: "100%",
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    alignSelf: "center",
    justifyContent: "center",
    paddingBottom: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  dropdownContainer: { width: "95%" },
  dropdownContent: { paddingBottom: 8 },
  icon: { position: "absolute", right: 0 },
});

export default HelpDropdown;
