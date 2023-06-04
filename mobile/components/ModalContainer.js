import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

const ModalContainer = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
        <AppText type="Title" color="#ffffff">
          {title}
        </AppText>
      </View>
      <View style={styles.greyBox}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    flex: 1,
  },

  redBox: {
    width: "100%",
    height: 56,
    backgroundColor: "#ED4B58",
    borderWidth: 2,
    borderColor: "#000",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 24,
  },

  greyBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
    borderTopWidth: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#F2F2F2",
  },
});

export default ModalContainer;
