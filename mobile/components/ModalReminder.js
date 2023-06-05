import React from 'react';
import { View, Modal, StyleSheet} from 'react-native';
import Button from './Buttons';
import InputLabel from './Inputs';
import ItemSeparator from './ItemSeparator';
import ModalContainer from './ModalContainer'

const ModalReminder = (onPressAdd, onPressReturn) => {

    return(
        <ModalContainer title='Definir um lembrete' content={      
            <View style={{width:'100%'}}>
                <InputLabel labelText="Lembrete" inputSize="100%" placeholder="Digite o seu lembrete"/>
                <View style={styles.boxLine}>
                    <InputLabel labelText="Dia" inputSize={175} placeholder="__/__/____" icon='schedule' MaskedInput='date'/>
                    <ItemSeparator size="s"/>
                    <InputLabel labelText="Hora" inputSize={123} placeholder="__:__" icon='clock' MaskedInput='hour'/>
                </View>
                <ItemSeparator size="l"/>
                <Button title="Adicionar Lembrete" fontColor='#ffffff' onPress={onPressAdd} style={{width: "100%"}}/>
                <Button title="Cancelar" buttonType="transparentStandard" fontColor='#333333' onPress={onPressReturn} style={{width: "100%"}}/>
            </View>
        }/>
    );
}
const styles = StyleSheet.create({

    boxLine:{
        flexDirection:'row'
    },
    modalContainer:{
        width:'100%',
        alignContent:'center',
        justifyContent:'center',

    }
});
export default ModalReminder;
