import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the Ionicons for the checkmark icon

const AllDoneScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/images/SplashBg.png')}
            style={styles.background}
        >
            {/* Popup Container */}
            <View style={styles.popupContainer}>
                {/* Checkmark Icon */}
                <Icon name="checkmark-circle-outline" size={80} color="#FFD700" style={styles.icon} />

                {/* Main Text */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabNavigator')}>
                    <Text style={styles.buttonText}>All Done</Text>
                </TouchableOpacity>

                {/* Subtext */}
                <Text style={styles.subHeader}>Your password has been reset. Would you like to set up Face ID as well?</Text>

                {/* All Done Button */}

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupContainer: {
        backgroundColor: '#FFF', // White background for the popup
        paddingVertical: 40,
        paddingHorizontal: 20,
        borderRadius: 15, // Rounded corners
        alignItems: 'center',
        shadowColor: "#000", // Shadow for popup to give depth
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8, // Android shadow
        width: Dimensions.get('window').width * 0.9, // 90% of screen width
    },
    icon: {
        marginBottom: 30,
    },
    header: {
        fontSize: 24,
        fontFamily: "Poppins-SemiBold",
        color: '#000',
        marginBottom: 10,
    },
    subHeader: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 15,
        fontFamily: "Poppins-Regular"
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: "#000", // Button shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2.5,
        elevation: 5, // Android shadow
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontFamily: "Poppins-SemiBold",
    },
});

export default AllDoneScreen;
