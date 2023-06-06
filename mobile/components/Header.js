import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Logo from "../components/Logo";
import {useAuth} from '../providers/auth';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const PROFILE_OPTION = 1;
  const HELP_OPTION = 2;
  const LOGOUT_OPTION = 3;

  const {handleSignOut} = useAuth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuOptionPress = async (option) => {
    if (option === LOGOUT_OPTION) {
      await handleSignOut();
    }
    setIsOpen(false);
  };

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <View style={styles.buttonsGroup}>
          <TouchableOpacity style={styles.userButton} onPress={toggleDropdown}>
            <FontAwesome name="user" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationButton}>
            <MaterialIcons
              name="notifications-active"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <Logo size="s" whiteLogo />
        {isOpen && (
          <View style={styles.dropdownContainer}>
            <TouchableOpacity
              style={styles.dropItens}
              onPress={() => handleMenuOptionPress(PROFILE_OPTION)}
            >
              <Text>Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dropItens}
              onPress={() => handleMenuOptionPress(HELP_OPTION)}
            >
              <Text>Ajuda</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dropItens}
              onPress={() => handleMenuOptionPress(LOGOUT_OPTION)}
            >
              <Text>Sair</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    position: "absolute",
    top: 0,
    backgroundColor: "#333333",
  },
  notificationButton: {
    width: 24,
    height: 24,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  buttonsGroup: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  dropdownContainer: {
    backgroundColor: "white",
    marginTop: 20,
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    borderColor: "#333333",
    borderWidth: 2,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flex: 1,
    alignItems: "center",
  },
  dropItens: {
    flex: 1,
    marginVertical: 4,
  },
  userButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 10,
  },
  icon: {
    height: 35,
    width: 123,
    backgroundColor: "white",
  },
});

export default Header;
