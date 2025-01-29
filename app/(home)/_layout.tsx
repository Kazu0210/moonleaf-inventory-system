import { Stack, useRouter, Slot } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { Text, View, TouchableOpacity, Dimensions, StatusBar } from "react-native";
import { Image, ScrollView, StyleSheet } from 'react-native';

import styles from '../../assets/styles/home'

export default function HomeLayout() {    
    const { height: screenHeight } = Dimensions.get('window');  // Get screen height
    const { width: screenWidth } = Dimensions.get('window');  // Full screen width

    const router = useRouter();

    return (
        <View style={{ backgroundColor: 'yellow', height: screenHeight }}>
            <StatusBar barStyle={'dark-content'} hidden={true} />
            <SQLiteProvider databaseName="moonleaf_db.db" assetSource={{ assetId: require('../../assets/moonleaf_db.db') }}>
                <View style={{ backgroundColor: '#F5F5F5', flex:1, flexDirection: 'row', width: '100%' }}>
                    <View style={styles.navBar}>
                        <View style={{ maxHeight: 80, flex: 1, justifyContent: 'center', alignItems: "center" }}>
                            <Image
                                source={require('../../assets/images/moonleaf-logo.png')}
                                style={{ width: 200, height: 50, objectFit: 'contain' }}
                            />
                        </View>
                        {/* goes to dashboard screen */}
                        <TouchableOpacity style={styles.navItems} onPress={() => router.push('/(home)/dashboard')}>
                            <Image
                                source={require('../../assets/images/navIcons/home.png')}
                                style={{ width: 20, height: 20 }}
                                resizeMode="contain"
                            />
                            <Text style={styles.navItemsText}>Dashboard</Text>
                        </TouchableOpacity>
                        {/* goes to inventory screen */}
                        <TouchableOpacity style={styles.navItems} onPress={() => router.push('/(home)/inventory')}>
                            <Image
                                source={require('../../assets/images/navIcons/inventory.png')}
                                style={{ width: 20, height: 20 }}
                                resizeMode="contain"
                            />
                            <Text style={styles.navItemsText}>Inventory</Text>
                        </TouchableOpacity>
                        {/* goes to order screen */}
                        <TouchableOpacity style={styles.navItems} onPress={() => router.push('/(home)/order')}>
                            <Image
                                source={require('../../assets/images/navIcons/orders.png')}
                                style={{ width: 20, height: 20 }}
                                resizeMode="contain"
                            />
                            <Text style={styles.navItemsText}>Order</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Slot />
                    </View>
                </View>
            </SQLiteProvider>
        </View>
    );
}

const tempStyle = StyleSheet.create({
    dynamicCont: {
        backgroundColor: '#60AFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
