import { StyleSheet, ScrollView, View } from "react-native";
import Button from "../components/Buttons";
import AppText from "../components/AppText";
import ScreenWrapper from "../components/ScreenWrapper";
import ItemSeparator from "../components/ItemSeparator";
import InputLabel from "../components/Inputs";

const Profile = () => (
  <ScreenWrapper style={styles.container}>
    <View style={styles.scrollViewWrapper}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <AppText type="Subtitle" color="#ED4B58">
          Edição dos dados
        </AppText>
        <ItemSeparator size="s" />
        <View style={styles.line}>
          <InputLabel labelText="Nome" style={{ width: "40%" }}></InputLabel>
          <InputLabel
            labelText="Sobrenome"
            style={{ width: "57%", marginLeft: 8 }}
          ></InputLabel>
        </View>

        <InputLabel
          labelText="E-mail"
          placeholder="seuemail@email.com"
        ></InputLabel>
        <InputLabel labelText="Confirmar o e-mail"></InputLabel>
        <ItemSeparator size="m" />
        <Button title="Editar dados" fontColor="#ffffff" />
        <ItemSeparator size="s" />
        <AppText type="Subtitle" color="#ED4B58">
          Edição de senha
        </AppText>
        <ItemSeparator size="s" />
        <InputLabel labelText="Senha atual" MaskedInput="password"></InputLabel>
        <ItemSeparator size="s" />
        <InputLabel labelText="Nova senha" MaskedInput="password"></InputLabel>
        <ItemSeparator size="s" />
        <InputLabel
          labelText="Confirmar nova senha"
          MaskedInput="password"
          errorMessage="asdfadfs"
        ></InputLabel>
        <ItemSeparator size="m" />

        <Button title="Editar senha" fontColor="#ffffff" />
      </ScrollView>
    </View>
  </ScreenWrapper>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  scrollViewWrapper: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  line: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export default Profile;
