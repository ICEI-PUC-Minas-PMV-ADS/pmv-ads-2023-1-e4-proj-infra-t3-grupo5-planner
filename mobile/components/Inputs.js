import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MaskInput, { Masks } from 'react-native-mask-input'

const InputLabel = ({labelText, placeholder, inputSize = 280 , icon, errorMessage, labelStyle, MaskedInput}) => {
    
    const [masked, setMasked] = React.useState('');

    const getInputStyle = () => {
        switch (labelStyle){
            case 'textArea':
                return styles.textArea;
            default:
                return styles.standard;
        }
    }
    const getIcon = () => {
        switch (icon){
            case "schedule":
                return "calendar-month"
            case "clock":
                return "clock-outline"
            case "checkbox":
                return "checkbox-outline"
        }
    }
    const getMask = () => {
        switch(MaskedInput){
            case "date":
                return Masks.DATE_DDMMYYYY
            case "hour":
                return [/\d/, /\d/, ':', /\d/, /\d/]
            case "expense":
                return Masks.BRL_CURRENCY
        }
    }

    const textAreaStyled = labelStyle === 'textArea' ? {padding: 10} : {};

    return(
        <View>
            {labelText && <Text style={styles.labelText}>{labelText}</Text>}
            <View style={styles.container}>
                <MaskInput 
                    value={masked}                    
                    onChangeText={(mask) => setMasked(mask)} 
                    mask={getMask()} 
                    secureTextEntry = {MaskedInput === "password" ? true : false}
                    style={[getInputStyle(), {width: inputSize}, textAreaStyled]} 
                    inputMode={MaskedInput === 'date' || MaskedInput === 'hour' ? 'numeric' : 'none'}
                    placeholder={placeholder}
                    multiline={labelStyle === 'textArea' ? true : false}
                    numberOfLines={labelStyle === 'textArea' ? 10 : null}
                    textAlignVertical={labelStyle === 'textArea' ? "top" : null}
                />
                {icon && <MaterialCommunityIcons name={getIcon()} size={24} color="black" style={styles.icon}/>}
            </View>
            <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    standard:{
        height:40,
        borderRadius:8,
        paddingVertical:4,
        paddingHorizontal:8,
        borderWidth:2,
        borderColor:'#333333',
        /*fontFamily:"Quicksand_400Regular",*/
        fontStyle:"normal"
    },
    textArea:{
        width:280,
        height:408,
        borderWidth:2,
        borderColor:'#333333',
        borderRadius:8,
        /*fontFamily:"Quicksand_400Regular",*/
        fontStyle:"normal",
        padding: 10
    },
    labelText:{
        /*fontFamily:"Quicksand_700Bold",*/
        fontStyle:"normal",
        fontSize: 14,
        color: "#696767",
    },
    errorText:{
        /*fontFamily:"Quicksand_400Regular",*/
        fontStyle:"normal",
        fontSize:12,
        color:'#ED4B58',
        marginTop:0
    },  
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
});
export default InputLabel;
