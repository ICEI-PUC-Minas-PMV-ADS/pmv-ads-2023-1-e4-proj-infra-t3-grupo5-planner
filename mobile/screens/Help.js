import { StyleSheet, ScrollView, FlatList, View } from "react-native";
import Button from "../components/Buttons";
import AppText from "../components/AppText";
import HelpDropdown from "../components/HelpDropdown";
import ScreenWrapper from "../components/ScreenWrapper";
import ItemSeparator from "../components/ItemSeparator";
import InputLabel from "../components/Inputs";

const Help = () => (
  <ScreenWrapper style={styles.container}>
    <View style={styles.scrollViewWrapper}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <AppText type="Subtitle">Sobre o MyPlan</AppText>
        <ItemSeparator size="l" />
        <HelpDropdown
          text="Quem somos"
          helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"
        ></HelpDropdown>
        <ItemSeparator size="s" />
        <HelpDropdown
          text="Como utilizar os widgets"
          helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"
        ></HelpDropdown>
        <ItemSeparator size="s" />
        <HelpDropdown
          text="Como editar o dados do perfil"
          helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"
        ></HelpDropdown>
        <ItemSeparator size="s" />
        <HelpDropdown
          text="Como recuperar a senha"
          helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"
        ></HelpDropdown>
        <ItemSeparator size="l" />
        <AppText type="Subtitle">Enviar solicitação</AppText>
        <ItemSeparator size="l" />
        <InputLabel labelText="Seu nome"></InputLabel>
        <ItemSeparator size="s" />
        <InputLabel
          labelText="Seu e-mail"
          placeholder="seuemail@email.com"
        ></InputLabel>
        <ItemSeparator size="s" />
        <InputLabel
          labelText="Escreva-nos uma mensagem"
          labelStyle="textArea"
        ></InputLabel>
        <Button title="Enviar" fontColor="#ffffff" />
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
});

export default Help;
