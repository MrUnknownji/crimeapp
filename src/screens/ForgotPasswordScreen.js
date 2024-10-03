import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPasswordScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/images/SplashBg.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                {/* Fingerprint Icon with Border */}
                <View style={styles.iconContainer}>
                    <Icon name="finger-print" size={40} color="#FFF" style={styles.icon} />
                </View>

                {/* Forget Password Header */}
                <Text style={styles.header}>Forget Password?</Text>
                <Text style={styles.subHeader}>No Worries, we'll send you reset instructions.</Text>

                {/* Formik for form management */}
                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={ForgotPasswordSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("ResetPasswordScreen");
                    }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                    }) => (
                        <>
                            {/* Email Label */}
                            <Text style={styles.label}>Email</Text>

                            {/* Email Input */}
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your email"
                                placeholderTextColor="#FFFFFF"
                                keyboardType="email-address"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />

                            {/* Error message */}
                            {touched.email && errors.email && (
                                <Text style={styles.errorText}>{errors.email}</Text>
                            )}

                            {/* Reset Password Button */}
                            <TouchableOpacity style={styles.button} onPress={() => {
                                navigation.navigate("ResetPasswordScreen");
                                handleSubmit()

                            }}>
                                <Text style={styles.buttonText}>Reset Password</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>

                {/* Back to Login Link with Arrow Icon */}
                <TouchableOpacity style={styles.backContainer} onPress={() => navigation.navigate("LoginScreen")}>
                    <Icon name="arrow-back" size={18} color="#FFF" />
                    <Text style={styles.backText}>Back to log in</Text>
                </TouchableOpacity>
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
    container: {
        padding: 20,
        alignItems: 'center',
        width: '95%', // Ensure full width for responsiveness
    },
    iconContainer: {
        borderColor: '#FFD700', // Yellow border for the icon box
        borderWidth: 1,
        borderRadius: 10, // Rounded corners for the box
        padding: 10, // Space around the icon
        marginBottom: 20,
    },
    icon: {
        // Inside the box, no additional styling needed
    },
    header: {
        fontSize: 28,
        color: '#FFF',
        marginBottom: 10,
        fontFamily: "Poppins-SemiBold"
    },
    subHeader: {
        fontSize: 13,
        color: '#FFF',
        marginBottom: 30,
        textAlign: 'center',
        fontFamily: "Poppins-Regular"
    },
    label: {
        alignSelf: 'flex-start', // Align the label to the start (left)
        color: '#FFF',
        fontSize: 16,
        marginBottom: 7, // Small space below the label
        fontFamily: "Poppins-Medium",
        fontWeight: "400"
    },
    input: {
        width: '100%', // Full width
        padding: 10, // Padding for input
        backgroundColor: '#000000', // Set input background to black
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFD700', // Orange border color
        color: '#FFD700', // Yellow text inside the input
        fontSize: 16,
        marginBottom: 10, // Space between input and button
        fontFamily: "Poppins-Medium",
        fontWeight: "400"
    },
    errorText: {
        color: 'red', // Error message in yellow
        fontSize: 14,
        marginBottom: 20, // Space between error and button
        fontFamily: "Poppins-Regular",
        alignSelf: "flex-start"
    },
    button: {
        backgroundColor: '#FFD700',
        height: hp("6%"),
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('2')
    },
    buttonText: {
        color: '#000', // Black text on the button
        fontSize: 18,
        fontFamily: "Poppins-Medium",
        fontWeight: "500"
    },
    backContainer: {
        flexDirection: 'row', // Align arrow and text in a row
        alignItems: 'center',
        marginTop: 8,
    },
    backText: {
        color: '#FFF',
        fontSize: 17,
        marginLeft: 5, // Space between the icon and text
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        marginTop: 1,
    },
});

export default ForgotPasswordScreen;
