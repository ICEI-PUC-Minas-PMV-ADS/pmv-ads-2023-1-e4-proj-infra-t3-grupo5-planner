import { StyleSheet, ScrollView, View } from "react-native";
import Button from "../components/Buttons";
import AppText from "../components/AppText";
import ScreenWrapper from "../components/ScreenWrapper";
import ItemSeparator from "../components/ItemSeparator";
import InputLabel from "../components/Inputs";
import ContainerBox from "../components/ContainerBox";
import WidgetContentCard from "../components/WidgetContentCard";

const Reminder = () => (
  <ScreenWrapper style={styles.container}>
    <ContainerBox
      title="Lembretes"
      content={
        <View style={styles.reminderView}>
          <AppText type="SmallTextBold" color="#333333">
            Hoje
          </AppText>
          <ItemSeparator size="s" />
          <View style={styles.scrollViewWrapperToday}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <WidgetContentCard
                type="ReminderContent"
                textDescription="Tomar remédio"
                reminderDate="04/06/2023"
                reminderHour="10:00"
              />
            </ScrollView>
          </View>

          <AppText type="SmallTextBold" color="#333333">
            Próximos
          </AppText>
          <ItemSeparator size="s" />
          <View style={styles.scrollViewWrapperUpcoming}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <WidgetContentCard
                type="ReminderContent"
                textDescription="Tomar remédio"
                reminderDate="04/06/2023"
                reminderHour="10:00"
              />
            </ScrollView>
          </View>
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

export default Reminder;
