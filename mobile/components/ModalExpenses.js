import React from "react";
import { StyleSheet, View } from "react-native";
import ContainerBox from "./ContainerBox";
import InputLabel from "./Inputs";
import Button from "./Buttons";
import ModalContainer from "./ModalContainer";
import ItemSeparator from "./ItemSeparator";

const ModalExpenses = () => {
  return (
    <View style={styles.container}>
      <ModalContainer
        title="Defina uma finança"
        content={
          <View style={styles.content}>
            <View style={styles.inputRow}>
              <View style={[{ flex: 3 }]}>
                <InputLabel labelText="Meta" placeholder="Descreva sua meta" />
              </View>
              <ItemSeparator size="s" />
              <View style={[{ flex: 2 }]}>
                <InputLabel labelText="Tipo" placeholder="Ícone" icon="icon" />
              </View>
            </View>

            <View style={styles.inputRow}>
              <View style={[[styles.inputContainer], { flex: 10 }]}>
                <InputLabel labelText="Valor" placeholder="R$ 000,00" />
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
    justifyContent: "center",
    alignItems: "center",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: { width: "100%" },

  buttonContainer: {
    alignItems: "center",
    width: "100%",
  },
});

export default ModalExpenses;
