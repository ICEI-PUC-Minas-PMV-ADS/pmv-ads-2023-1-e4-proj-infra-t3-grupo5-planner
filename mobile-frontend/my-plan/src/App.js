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
      <Button 
        title="Entrar"
      />
    </View>
  );
}


