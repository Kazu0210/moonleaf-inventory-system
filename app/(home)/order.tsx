import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { Image, ScrollView } from 'react-native';
import { useState } from 'react';

import styles from '../../assets/styles/order';
import WidgetCard from '../../components/widgetCard';
import ProductCard from '../../components/productCard';

export default function Order() {
    return (
        <ScrollView>
            <View style={styles.mainCont}>
                <View style={{padding: 10}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Orders</Text>
                </View>

                <View style={{flex:1, flexDirection:'row', padding:10}}>
                    <WidgetCard title="Total Orders" subTitle="(Today)" value={20}/>
                </View>
                
                <View style={{padding:10, margin:10, flex:1, justifyContent:'center', alignItems:'stretch', backgroundColor:'#fff', borderRadius: 10, elevation:3, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 5,}}>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <Text style={{fontSize:18, fontWeight:'600'}}>Create Order here</Text>
                        
                        {/* <TouchableOpacity style={buttonStyle.addProd}>
                            <Text style={buttonStyle.addProdTxt}>Add Product</Text>
                        </TouchableOpacity> */}
                    </View>

                    <View>
                        <ProductCard name="Match Latte" price={10} />
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}

const buttonStyle = StyleSheet.create ({
    addProd: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        width: 150,
        maxWidth: 150,
        height: 40,
        maxHeight: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addProdTxt: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        color: '#fff'
    }
})