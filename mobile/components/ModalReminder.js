import React, { useState } from 'react';
import { View, Modal, StyleSheet, KeyboardAvoidingView} from 'react-native';
import Button from './Buttons';
import AppText from './AppText'
import InputLabel from './Inputs';
import ItemSeparator from './ItemSeparator';

const ModalReminder = () => {


    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <KeyboardAvoidingView
        style={styles.modalContainer}
        behavior="padding"
        enabled
        >
            <Button title="Abrir Modal" onPress={toggleModal} />
                <Modal
                    visible={modalVisible}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={toggleModal}
                >

                    <View style={styles.modalContent}>
                            <View style={styles.redBox}>
                                <AppText type="Title" color="#ffffff">
                                    Defina um lembrete
                                </AppText>
                            </View>
                            <View style={styles.greyBox}>
                                <View style={styles.Boxcontainer}>
                                    <InputLabel labelText="Lembrete" inputSize="100%" placeholder="Digite o seu lembrete"/>
                                    <View style={styles.dateTime}>
                                        <InputLabel labelText="Dia" inputSize={154} placeholder="__/__/____" icon='schedule' MaskedInput='date'/>
                                        <ItemSeparator size="s"/>
                                        <InputLabel labelText="Hora" inputSize={123} placeholder="__:__" icon='clock' MaskedInput='hour'/>
                                    </View>
                                    <ItemSeparator size="l"/>
                                    <Button title="Adicionar Lembrete" fontColor='#ffffff'/>
                                    <Button title="Cancelar" buttonType="transparentStandard" onPress={toggleModal} fontColor='#333333' style={{width: "100%"}}/>
                                </View>
                            </View>
                    </View>
                </Modal>
        </KeyboardAvoidingView>
        
    );
};



const styles = StyleSheet.create({
    Boxcontainer:{
        display: "flex",
        flex: 1, 
        flexDirection: "column",
        alignContent:'center',
        justifyContent:'center',
        width:"80%",
    },
    modalContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-end',
    },
    modalContent: {
        display: "flex",
        flex: 1, 
        backgroundColor:'rgba(217, 217, 217, 0.6)',
        justifyContent: 'flex-end', 
        alignItems: 'center',
        flexDirection: "column",
        height: "auto",
    },
    redBox: {
        width: '100%',
        height: 56,
        backgroundColor: "#ED4B58",
        borderWidth: 2,
        borderColor: "#000",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 24,
    },
    greyBox: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        height: '50%',
        width: '100%',
        borderTopWidth: 0,
        borderWidth: 0,
        borderColor: "#000",
        alignSelf: "center",
        backgroundColor: "#F2F2F2",
    },
    dateTime: {
        flexDirection:'row'

    }
});

export default ModalReminder;