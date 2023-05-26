import { View } from 'react-native';
import Button from './components/Buttons/Button';
import ButtonStyled from './components/Buttons/Button.styled';
import AppStyled from '../src/App.styled'

import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Quicksand_400Regular,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={AppStyled.container}>
      <Button title="Entrar" fontColor={"white"}/>
      <Button title="Entrar" buttonStyled="smallStandard" fontColor={"white"}/>
      <Button title="Cancelar" buttonStyled="transparentStandard" fontColor={"black"}/>
      <Button title="Cancelar" buttonStyled="transparentStandard" fontColor={"#ED4B58"}/>
      <Button buttonStyled="circleAddButton"/>
      <Button buttonStyled="whiteRoundedButton" fontColor={"black"} title="Metas"/>
      <Button buttonStyled="redRoundedButton" title="Lembretes"/>
      <Button buttonStyled="blackRoundedButton" title="Hábitos"/>
    </View>
  );
}


