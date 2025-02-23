import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Link } from 'expo-router';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { Image, ScrollView } from 'react-native';
import { useState } from 'react';

import styles from '../../assets/styles/home'

export default function Inventory() {
    const [InputValue, setInputValue] = useState('');

    const handleSearchClicked = () => {
        setInputValue('')
        console.log(InputValue);
    }

    return (
        <ScrollView style={{ padding:5 }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>

                <Text>Inventory</Text>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <TextInput placeholder="Search here" value={InputValue} onChangeText={setInputValue} style={{ backgroundColor: '#fff', width: 250, height: 30, borderRadius: 5, fontSize: 12, padding: 0, paddingInlineStart: 5, margin: 0, textAlignVertical: 'center' }} />

                    <TouchableOpacity onPress={handleSearchClicked} style={{
                        backgroundColor: 'green',
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

            <View style={{ backgroundColor:'green', height:'auto', flex:1, flexDirection:'column' }}>
                <View style={{ flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center', backgroundColor:'orange'
                 }}>
                    <TouchableOpacity style={{ backgroundColor:'green', flex:1, justifyContent:'center', alignItems:'center', width: 100, maxWidth:100, height:30, borderRadius: 5, marginTop:5, marginBottom:5 }}><Text style={{ color:'#fff', fontWeight:'bold', fontSize:12 }}>Add Product</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}