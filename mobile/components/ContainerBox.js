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
    display: "flex",
    flexDirection: "column",
    height: "auto",
    alignSelf: "center",
  },

  redBox: {
    width: 312,
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
    height: 458,
    width: 312,
    borderTopWidth: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderWidth: 2,
    borderColor: "#000",
    alignSelf: "center",
    backgroundColor: "#F2F2F2",
  },
});

export default ContainerBox;
