import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import AppText from "./AppText";

const ContainerBox = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
        <AppText type="Title" color="#ffffff">
          {title}
        </AppText>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.contentPadding}>{content}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 312,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#000",
    alignSelf: "center",
    backgroundColor: "#F2F2F2",
  },

  redBox: {
    height: 56,
    backgroundColor: "#ED4B58",
    borderWidth: 2,
    borderColor: "#000",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: "center",
    paddingLeft: 24,
  },

  contentContainer: {
    flexGrow: 1,
  },

  contentPadding: {
    flex: 1,
    padding: 16, 
  },
});

export default ContainerBox;
