import React from "react";
import { StyleSheet, View } from "react-native";
import ContainerBox from "./ContainerBox";
import InputLabel from "./Inputs";
import Button from "./Buttons";
import ModalContainer from "./ModalContainer";

const ModalExpenses = () => {
  return (
    <View style={styles.container}>
      <ModalContainer
        title="Defina uma meta"
        content={
          <View style={styles.content}>
            <View style={styles.inputRow}>
              <View style={[styles.inputContainer, { flex: 8 }]}>
                <InputLabel labelText="Meta" placeholder="Descreva sua meta" />
              </View>
              <View style={[styles.inputContainer, { flex: 2 }]}>
                <InputLabel labelText="Ícone" placeholder="Ícone" icon="icon" />
              </View>
            </View>
            <View style={styles.inputRow}>
              <View style={[styles.inputContainer, { flex: 5 }]}>
                <InputLabel labelText="Objetivo" placeholder="10" />
              </View>
              <View style={[styles.inputContainer, { flex: 5 }]}>
                <InputLabel labelText="Progresso" placeholder="0" />
              </View>
            </View>
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
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  inputContainer: {
    marginRight: 16,
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
  },
});

export default ModalExpenses;
