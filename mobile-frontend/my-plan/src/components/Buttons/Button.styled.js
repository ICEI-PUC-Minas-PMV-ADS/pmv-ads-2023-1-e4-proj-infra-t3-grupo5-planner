import { StyleSheet } from "react-native";

export default StyleSheet.create({

    standard:{
        backgroundColor: "#333333",
        borderRadius: 8,
        width: 280,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
    },

    smallStandard:{
        backgroundColor: "#333333",
        borderRadius: 8,
        width: 132,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
    },

    transparentButton:{
        backgroundColor: "transparent",
        borderRadius: 8,
        width: 132,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
    },

    circleAddButton:{
        width:60,
        height: 60,
        borderRadius:30,
        borderWidth:2,
        borderColor: "black",
        backgroundColor: "#ED4B58",
        alignItems: "center",
    },

    RoundedButton:{
        width:280,
        height:48,
        borderRadius:32,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'row',
        
    },

    styleIcon:{
        paddingTop:6,
    },

    smallIconContainer: {
        paddingRight: 8,
        paddingTop: 3,
    },

    standardText: {
        fontFamily: "Quicksand_700Bold",
        fontStyle:"normal",
        fontSize: 16
    }
})