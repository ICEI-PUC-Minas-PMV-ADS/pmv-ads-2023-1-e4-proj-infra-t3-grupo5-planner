import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./providers/auth";
import Router from "./routes/Router";

import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

const App = () => {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
