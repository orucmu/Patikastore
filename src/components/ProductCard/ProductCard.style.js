import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    image: {
        height: 250,
        resizeMode: "contain",
        padding: 7,
        borderRadius: 5

    },
    image_container: {
        padding: 7,
        margin: 5,
        borderRadius: 5

    },
    product_data: {
        flex: 1,
        backgroundColor: '#ddd',
        margin: 5,
        borderRadius: 5,
        height: 360,
    },
    text_container: {
        margin: 12
    },

    title: {
        color: 'black',
        fontWeight: 'bold'
    },
    price: {
        fontWeight:'bold',
        
    }


})