import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

const ContainerBox = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
        <AppText type="Title" color="#ffffff">
          {title}
        </AppText>
      </View>
      <View style={styles.greyBox}>
        <>{content}</>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 312,
    height: 524,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#000",
    position: "relative",
    alignSelf: "center",
    backgroundColor: "#F2F2F2",
  },

  redBox: {
    position: "absolute",
    top: -2,
    left: -2,
    width: 312,
    height: 56,
    backgroundColor: "#ED4B58",
    borderWidth: 2,
    borderColor: "#000",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 24,
  },

  greyBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ContainerBox;
