import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image,
    ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const RegisterSchema = Yup.object().shape({
    username: Yup.string()
        .matches(/^[A-Za-z0-9]+$/, 'Username must only contain letters and numbers')
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        )
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

const RegisterScreen = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <ImageBackground
            source={require('../assets/images/SplashBg.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {/* Logo */}
                    <Image
                        source={require('../assets/images/Eagle.png')}
                        style={styles.logo}
                    />

                    {/* Title */}
                    <Text style={styles.title}>Get Started</Text>

                    {/* Formik for form management */}
                    <Formik
                        initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
                        validationSchema={RegisterSchema}
                        onSubmit={(values) => {
                            console.log(values);
                            navigation.navigate('LoginScreen');
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
                                {/* Username Field (Text Input) */}
                                <TextInput
                                    style={styles.input}
                                    placeholder="Username"
                                    placeholderTextColor="#fff"
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                />
                                {touched.username && errors.username && (
                                    <Text style={styles.errorText}>{errors.username}</Text>
                                )}

                                {/* Email Input */}
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email Id"
                                    placeholderTextColor="#fff"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                                {touched.email && errors.email && (
                                    <Text style={styles.errorText}>{errors.email}</Text>
                                )}

                                {/* Password Field */}
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    secureTextEntry={!passwordVisible} // Toggle password visibility
                                    placeholderTextColor="#fff"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                />
                                {touched.password && errors.password && (
                                    <Text style={styles.errorText}>{errors.password}</Text>
                                )}

                                {/* Confirm Password Field */}
                                <TextInput
                                    style={styles.input}
                                    placeholder="Confirm Password"
                                    secureTextEntry={true} // Always hidden
                                    placeholderTextColor="#fff"
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}
                                />
                                {touched.confirmPassword && errors.confirmPassword && (
                                    <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                                )}

                                {/* Checkbox for Show Password */}
                                <View style={styles.options}>
                                    <View style={styles.showPasswordContainer}>
                                        <CheckBox
                                            value={passwordVisible}
                                            onValueChange={setPasswordVisible}
                                            style={styles.checkbox}
                                            tintColors={{ true: '#FFD700', false: '#FFFFFF' }}
                                        />
                                        <Text style={styles.showPasswordText}>Show password</Text>
                                    </View>

                                    {/* Login Text */}
                                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                                        <Text style={styles.loginText}>Login</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Register Button */}
                                <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
                                    <Text style={styles.registerButtonText}>Register</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

// Styles
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: wp('95%'),
        padding: 20,
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        marginBottom: hp('4%'),
    },
    title: {
        fontSize: hp('4%'),
        color: '#FFD700',
        marginBottom: hp('3%'),
        fontFamily: 'Sniglet-Regular',
        fontWeight: '400',
    },
    input: {
        width: '100%',
        padding: 12,
        marginTop: hp('1%'),
        marginBottom: hp('2%'),
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFD700',
        color: '#FFD700',
        fontSize: hp('2%'),
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
    },
    options: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    showPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 5,
    },
    showPasswordText: {
        color: '#FFFFFF',
        fontSize: hp('2%'),
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
    },
    loginText: {
        color: '#FFD700',
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
    },
    registerButton: {
        width: '100%',
        height: hp('6%'),
        backgroundColor: '#FFD700',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp('4%'),
        marginTop: '10%',
    },
    registerButtonText: {
        color: '#000000',
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: hp('1%'),
        alignSelf: 'flex-start', // Left-align errors
        fontFamily: "Poppins-Regular"
    },
});

export default RegisterScreen;
