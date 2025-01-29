import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TotalProdCard: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Total Product:</Text>
            <Text style={styles.info}>100</Text>
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
        width: 200,
        maxWidth: 200,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
    },
    info: {
        fontWeight: 500,
        fontSize: 16
    }
})

export default TotalProdCard;