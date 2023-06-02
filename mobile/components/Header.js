import React, { useState } from 'react';
import { View, StyleSheet, Platform, Dimensions, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons} from '@expo/vector-icons';


const { width, height } = Dimensions.get('screen');

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuOptionPress = (option) => {
        console.warn('Opção selecionada:', option);
        setIsOpen(false);
    };

    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <View style={styles.buttonsGroup}>
                    <TouchableOpacity style={styles.userButton} onPress={toggleDropdown}>
                        <FontAwesome name="user" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificationButton}>
                        <MaterialIcons name="notifications-active" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.icon}></View>
                {isOpen && (
                    <View style={styles.dropdownContainer}>
                        <TouchableOpacity style={styles.dropItens} onPress={() => handleMenuOptionPress('Perfil')}>
                        <Text>Perfil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropItens} onPress={() => handleMenuOptionPress('Ajuda')}>
                        <Text>Ajuda</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropItens} onPress={() => handleMenuOptionPress('Sair')}>
                        <Text>Sair</Text>
                        </TouchableOpacity>
                    </View>
                )}

            </View>
        </View>
        
    );
};

    const styles = StyleSheet.create({

    header: {
        position: 'absolute',
        paddingTop: Platform.OS === 'android' ? 10 : 0,
        top: 0,
        backgroundColor: '#333333',
        height: height / 10,
        width: width,

    },
    notificationButton:{
        width: 24,
        height: 24,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    buttonsGroup:{
        flexDirection:'row-reverse',
    },
    container:{
        flexDirection:'row-reverse',
        alignItems: 'flex-start',
        justifyContent:'space-between', 
        padding:30
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    dropdownContainer: {
        backgroundColor: 'white',
        width: width/4,
        height: height*0.10,
        marginTop: 20,
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 8,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flex:1,
        alignItems:'center',
    },
    dropItens: {
        marginVertical: 4,
    },
    userButton:{
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    icon:{
        height:35,
        width: 123,
        backgroundColor: 'white'
    }
});

export default Header;