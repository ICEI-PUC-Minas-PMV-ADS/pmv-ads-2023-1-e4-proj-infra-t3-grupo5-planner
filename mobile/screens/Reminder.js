import { SafeAreaView, View, StyleSheet } from "react-native";
import Button from "../components/Buttons";
import ItemSeparator from "../components/ItemSeparator";
import RegisterContainerBox from "../components/RegisterContainerBox";
import WidgetContentCard from "../components/WidgetContentCard";
import AppText from "../components/AppText";

const Reminder = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <RegisterContainerBox
        title="Lembretes"
        content={
          <View style={styles.reminderView}>
            <View>
            <AppText type="SmallTextBold" color="#333333">
              Hoje
            </AppText>
            <WidgetContentCard             
              type="ReminderContent"
              textDescription="Tomar remédio"
              reminderDate="04/06/2023"
              reminderHour="10:00"
            />
            </View>
            <ItemSeparator size="m" />
            <View>
              <AppText type="SmallTextBold" color="#333333">
                Próximos
              </AppText>
              <WidgetContentCard             
              type="ReminderContent"
              textDescription="Tomar remédio"
              reminderDate="04/06/2023"
              reminderHour="10:00"
            />
            </View>
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

export default Reminder;
