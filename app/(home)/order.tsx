import { Text, View, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { Image, ScrollView } from 'react-native';
import { useState } from 'react';

import styles from '../../assets/styles/home'

export default function Order() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Order Screen</Text>
            </View>
        </ScrollView>
    );
}
