import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface ProductCard {
    name: string;
    price: number;
}

const ProductCard: React.FC<ProductCard> = ({ name, price }) => {
    return (
        <View style={styles.container}>
            <View style={{width:150, height:150, borderRadius:10, overflow:'hidden'}}>
                <Image style={styles.image} resizeMode='cover' source={{ uri: 'https://munchingwithmariyah.com/wp-content/uploads/2020/06/IMG_0748-600x600.jpg' }} />
            </View>
            <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        width: 170,
        maxWidth: 170,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
        marginRight: 5
    },
    subTitle: {
        fontWeight: 500,
        fontSize: 14,
        color: '#000',
    },
    price: {
        fontWeight: 800,
        fontSize: 18
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10
    }
})

export default ProductCard;