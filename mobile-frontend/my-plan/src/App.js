import { View } from 'react-native';
import Button from './components/Buttons/Button';
import InputLabel from './components/Inputs/Input';
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
      {/* 
      */}
      <InputLabel labelText="Data" labelStyle="standard" icon="schedule" inputSize={154} placeholder='__/__/__' MaskedInput="date"/>
      <InputLabel labelText="Valor" labelStyle="standard" placeholder='R$ 000,00' MaskedInput="expense"/>
      <InputLabel labelText="Email" labelStyle="standard" errorMessage="Mensagem de erro"/>
      <InputLabel labelText="Nome" labelStyle="standard" />
      <InputLabel labelStyle="textArea" placeholder="TextArea"/>
    </View>
  );
}


