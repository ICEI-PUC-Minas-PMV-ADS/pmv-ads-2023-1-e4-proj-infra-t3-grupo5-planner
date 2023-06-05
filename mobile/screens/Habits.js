import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import Button from "../components/Buttons";
import ItemSeparator from "../components/ItemSeparator";
import RegisterContainerBox from "../components/RegisterContainerBox";
import WidgetContentCard from "../components/WidgetContentCard";

const { height } = Dimensions.get("window");

const Habits = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <RegisterContainerBox
        title="Hábitos"
        content={
          <View style={styles.reminderView}>
            <WidgetContentCard
              habitsIcon="water"
              type="HabitContent"
              textDescription="Beber água ao acordar"
            />
          </View>
        }
      />
      <ItemSeparator size="m" />
      <Button buttonType="circleAddButton" fontColor="#fff" />
    </View>
  </SafeAreaView>
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
    alignItems: "center",
    justifyContent: "center", 
    flex: 1,
    overflow: "hidden",
  },
});

export default Habits;
