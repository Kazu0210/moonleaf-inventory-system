import { Text, View, TouchableOpacity, Dimensions, ScrollView, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { useState } from 'react';

import styles from '../../assets/styles/home'
import TotalProdCard from '../../components/totalProdCard'

export default function Dashboard() {
    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'column', padding: 10 }}>
                <View style={{ flex: 1, flexDirection: 'row' }} >
                    <TotalProdCard />
                </View>
            </View>
        </ScrollView>
    );
}

const tempStyle = StyleSheet.create ({
    view: {
        height: 100,
        borderWidth: 1,
        borderColor: 'black'
    }
})