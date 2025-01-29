import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F5F5F5'
    },
    navBar: {
        backgroundColor: '#fff',
        elevation: 5
    },
    navItems: {
        backgroundColor: '#fff',
        height: 50,
        maxHeight: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 15,
        paddingLeft: 30
    },
    navItemsText: {
        color: '#8B8B8B',
        fontWeight: '400',
        fontSize: 14
    }
})

export default styles