import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');  // Get screen dimensions

const ProfileScreen = () => {
    return (
        <ImageBackground
            source={require('../assets/images/SplashBg.png')}
            style={styles.background}
        >
            <View style={styles.container}>

                {/* Profile Image and Text */}
                <View style={styles.profileSection}>
                    <Image source={require("../assets/images/ProfileImg.png")} style={styles.profileImage} />
                    <Text style={styles.profileName}>Bruno Pham</Text>
                    <Text style={styles.profileEmail}>thanhphamhbk@gmail.com</Text>
                </View>

                {/* Input Fields */}
                <View style={styles.inputContainer}>
                    <TextInput value="Bruno Pham" style={styles.inputField} />
                    <View style={styles.inputFieldWithIcon}>
                        <TextInput value="thanhphamhbk@gmail.com" style={styles.inputField} />
                        <TouchableOpacity style={styles.iconTouchable}>
                            <Icon name="pencil" size={20} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <TextInput value="Password" secureTextEntry={true} style={styles.inputField} />
                    <TouchableOpacity style={styles.managePostButton}>
                        <Text style={styles.buttonText}>Manage Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: width,  // Full width
        height: height,  // Full height
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',  // To make the background image visible
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    profileEmail: {
        fontSize: 16,
        color: '#fff',
        fontFamily: "Poppins-Medium",
        fontWeight: "400"
    },
    inputContainer: {
        width: '100%',
    },
    inputField: {
        backgroundColor: '#FFD700',
        borderRadius: 25,
        padding: 15,
        marginBottom: 15,
        width: '100%',
        fontSize: 16,
        textAlign: 'left',  // Align text to the left
        fontFamily: "Poppins-Medium",
        fontWeight: "400"
    },
    inputFieldWithIcon: {
        position: 'relative',
        width: '100%',
    },
    iconTouchable: {
        position: 'absolute',
        right: 15,
        top: 15,
    },
    icon: {
        color: '#666',
    },
    managePostButton: {
        backgroundColor: '#FFD700',
        borderRadius: 25,
        padding: 15,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#000',
        fontFamily: "Poppins-Medium",
        fontWeight: "400"
    },
});

export default ProfileScreen;
