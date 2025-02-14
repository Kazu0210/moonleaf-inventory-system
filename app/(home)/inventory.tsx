import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Link } from 'expo-router';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { Image, ScrollView } from 'react-native';
import { useState } from 'react';

import styles from '../../assets/styles/home'

export default function Inventory() {
    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text>Inventory Screen</Text>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'blue', padding: 5 }}>
                    <TextInput placeholder="Search here" style={{ backgroundColor: '#fff', width: 250, height: 30, borderRadius: 5, fontSize: 12, padding: 0, margin: 0, textAlignVertical: 'center' }} />
                    {/* remove margin or padding on the text input */}
                    <TouchableOpacity style={{
                        backgroundColor: 'red',
                        width: 70,
                        maxWidth: 70,
                        height: 30,
                        flex: 1,
                        justifyContent: "center",
                        alignItems: 'center',
                        borderRadius: 5,
                        margin: 5
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 12,
                            fontWeight: 'bold'
                        }} >Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
