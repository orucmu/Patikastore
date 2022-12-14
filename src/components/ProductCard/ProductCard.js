import React, { useState } from "react";
import { View, Text, Image } from "react-native";
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
                {products.inStock== false ? <Text style={styles.instock}>STOKTA YOK</Text> : null }
            </View>
        </View>
    )
}

export default ProductCard;