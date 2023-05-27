import { StyleSheet } from "react-native";

export default StyleSheet.create({

    standard:{
        height:40,
        borderRadius:8,
        paddingVertical:4,
        paddingHorizontal:8,
        borderWidth:2,
        borderColor:'#333333',
        fontFamily:"Quicksand_400Regular",
        fontStyle:"normal"
    },

    textArea:{
        width:280,
        height:408,
        borderWidth:2,
        borderColor:'#333333',
        borderRadius:8,
        fontFamily:"Quicksand_400Regular",
        fontStyle:"normal",
        padding: 10
    },

    labelText:{
        fontFamily: "Quicksand_700Bold",
        fontStyle:"normal",
        fontSize: 14,
        color: "#696767",
    },

    errorText:{
        fontFamily:"Quicksand_400Regular",
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


})