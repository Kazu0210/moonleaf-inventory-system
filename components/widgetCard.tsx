import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WidgetCardProps {
    title: string;
    subTitle?: string;
    value: number;
}

const WidgetCard: React.FC<WidgetCardProps> = ({ title, value, subTitle }) => {
    return (
        <View style={styles.container}>
            <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
            <Text style={styles.info}>{value}</Text>
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
        marginRight: 5
    },
    subTitle: {
        fontWeight: 500,
        fontSize: 14,
        color: '#000',
    },
    info: {
        fontWeight: 800,
        fontSize: 20
    }
})

export default WidgetCard;