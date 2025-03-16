import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface ProductCard {
    name: string;
    price: number;
    image?: string;
}

const ProductCard: React.FC<ProductCard> = ({ name, price, image }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    resizeMode="cover" 
                    source={{ uri: image }} 
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>₱{price}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        width: 160, // Ensure consistent card width
        margin: 10, // Add margin for spacing between cards
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 150,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
    },
    price: {
        fontWeight: '800',
        fontSize: 18,
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

export default ProductCard;
