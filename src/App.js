import React from "react";
import { SafeAreaView, View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import product_data from './product_data.json';
import ProductCard from './components/ProductCard';

function App() {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headerText}>PATIKASTORE</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ara..."
                />
            </View>
            <FlatList
                numColumns={2}
                data={product_data}
                renderItem={({ item }) => <ProductCard products={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    headerText: {
        color: '#8b008b',
        fontWeight: 'bold',
        fontSize: 35,
        margin: 5
    },
    input: {
        backgroundColor: '#ddd',
        margin: 5,
        borderRadius: 10,
        padding: 10,
    }
})

export default App;