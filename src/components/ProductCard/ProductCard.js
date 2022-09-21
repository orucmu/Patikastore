import React, {useState} from "react";
import { View, Text, Image, PreviewLayout } from "react-native";
import styles from './ProductCard.style';


const ProductCard = ({ products }) => {
   

    return (
        <View style={styles.product_data} >
            <View style={styles.image_container}>
                <Image style={styles.image} source={{ uri: products.imgURL }} />
            </View>
            <View style={styles.text_container}>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
                <Text></Text>
            </View>
        </View>
    )
}

export default ProductCard;