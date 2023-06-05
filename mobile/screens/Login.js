import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Modal, View } from "react-native";
import Button from "../components/Buttons";
import InputLabel from "../components/Inputs";
import ContainerBox from "../components/ContainerBox";
import Header from "../components/Header";
import MyModal from '../components/ModalReminder';

const Login = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
        <MyModal></MyModal>
    </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    padding: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Login;
