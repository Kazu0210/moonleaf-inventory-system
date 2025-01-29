import { Stack, useRouter, Slot } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { Text, View, TouchableOpacity, Dimensions, StatusBar } from "react-native";
import { Image, ScrollView } from 'react-native';

import styles from '../../assets/styles/home'

const { height } = Dimensions.get('window');  // Get screen height
const { width } = Dimensions.get('window');  // Get screen width

export default function HomeLayout() {
    const router = useRouter();

    return (
        <ScrollView style={[ styles.container, {height} ]}>
            <StatusBar barStyle={'dark-content'} hidden={false} />
            <SQLiteProvider databaseName="moonleaf_db.db" assetSource={{ assetId: require('../../assets/moonleaf_db.db') }}>
                <View style={styles.container}>
                    <View style={styles.navBar}>
                        <View>
                            <Image
                                source={require('../../assets/images/moonleaf-logo.png')}
                                style={{ width: 200, height: 100, objectFit: 'contain' }}
                                />
                        </View>
                        {/* goes to dashboard screen */}
                        <TouchableOpacity style={styles.navItems} onPress={() => router.push('/(home)/dashboard')}>
                            <Image
                                source={require('../../assets/images/navIcons/home.png')}
                                style={{ width: 25, height: 25 }}
                                resizeMode="contain"
                                />
                            <Text style={styles.navItemsText}>Dashboard</Text>
                        </TouchableOpacity>
                        {/* goes to inventory screen */}
                        <TouchableOpacity style={styles.navItems} onPress={() => router.push('/(home)/inventory')}>
                            <Image
                                source={require('../../assets/images/navIcons/inventory.png')}
                                style={{ width: 25, height: 25 }}
                                resizeMode="contain"
                                />
                            <Text style={styles.navItemsText}>Inventory</Text>
                        </TouchableOpacity>
                        {/* goes to order screen */}
                        <TouchableOpacity style={styles.navItems} onPress={() => router.push('/(home)/order')}>
                            <Image
                                source={require('../../assets/images/navIcons/orders.png')}
                                style={{ width: 25, height: 25 }}
                                resizeMode="contain"
                                />
                            <Text style={styles.navItemsText}>Order</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
                        <Slot />
                    </View>
                </View>
            </SQLiteProvider>
        </ScrollView>
    );
}
   