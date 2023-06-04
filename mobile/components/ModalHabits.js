import React from "react";
import { StyleSheet, View } from "react-native";
import ContainerBox from "./ContainerBox";
import InputLabel from "./Inputs";
import Button from "./Buttons";
import ModalContainer from "./ModalContainer";

const ModalHabits = () => {
  return (
    <View style={styles.container}>
      <ModalContainer
        title="Defina um hábito"
        content={
          <View style={styles.content}>
            <InputLabel
              labelText="Hábito"
              placeholder="Descreva seu hábito"
            />
            <InputLabel
              labelText="Ícone"
              placeholder="Descreva seu hábito"
              icon="icon"
            />
            <View style={styles.buttonContainer}>
              <Button
                buttonType="redRoundedButton"
                title="Salvar"
                fontColor="white"
              />
              <Button
                buttonType="transparentStandard"
                title="Cancelar"
                fontColor="black"
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "42%",
  },
  content: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: "center",
    width: "100%",
  },
});

export default ModalHabits;
