import { StyleSheet, ScrollView, View } from "react-native";
import Button from "../components/Buttons";
import AppText from "../components/AppText";
import ScreenWrapper from "../components/ScreenWrapper";
import ItemSeparator from "../components/ItemSeparator";
import InputLabel from "../components/Inputs";
import ContainerBox from "../components/ContainerBox";
import WidgetContentCard from "../components/WidgetContentCard";

const Checklist = () => (
  <ScreenWrapper style={styles.container}>
    <ContainerBox
      title="Checklist"
      content={
        <View style={styles.reminderView}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <WidgetContentCard
              type="ChecklistContent"
              textDescription="Titulo"
            />
            <ItemSeparator size="s" />
          </ScrollView>
        </View>
      }
    ></ContainerBox>
    <ItemSeparator size="m" />
    <Button buttonType="circleAddButton" fontColor="#fff"></Button>
  </ScreenWrapper>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewWrapperToday: {
    width: "100%",
    overflow: "hidden",
    maxHeight: 120,
  },
  scrollViewWrapperUpcoming: {
    width: "100%",
    overflow: "hidden",
    maxHeight: 232,
  },
  item: {
    width: 270,
    height: 48,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#000",
    alignSelf: "center",
    backgroundColor: "#F2F2F2",
  },
  reminderView: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
    overflow: "hidden",
  },
});

export default Checklist;
