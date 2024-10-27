import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useAuth} from '../hooks/useAuth';

// Validation schema using Yup
const SetNewPasswordSchema = Yup.object().shape({
  password: Yup.string()
    // .min('Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const SetNewPasswordScreen = ({navigation, route}) => {
  const {email, token} = route.params;
  const {resetPassword, loading, error} = useAuth();
  return (
    <ImageBackground
      source={require('../assets/images/SplashBg.png')}
      style={styles.background}>
      <View style={styles.container}>
        {/* Lock Icon */}
        <View style={styles.iconContainer}>
          <Icon
            name="lock-closed-outline"
            size={40}
            color="#FFF"
            style={styles.icon}
          />
        </View>

        {/* Header Text */}
        <Text style={styles.header}>Set New Password</Text>
        <Text style={styles.subHeader}>Must be at least 8 characters.</Text>

        {/* Formik for form management */}
        <Formik
          initialValues={{password: '', confirmPassword: ''}}
          validationSchema={SetNewPasswordSchema}
          onSubmit={async values => {
            try {
              const response = await resetPassword({
                email,
                token,
                password: values.password,
                password_confirmation: values.confirmPassword,
              });
              if (response.message === 'Your password has been reset!') {
                navigation.navigate('AllDoneScreen');
              }
            } catch (err) {
              console.log('Error occurred while resetting password: ', err);
            }
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              {/* Password Input */}
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#fff"
                secureTextEntry={true}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              {/* Error message for password */}
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              {/* Confirm Password Input */}
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#fff"
                secureTextEntry={true}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
              />
              {/* Error message for confirm password */}
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}

              {/* Reset Password Button */}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Reset Password</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>

        {/* Back to Login Link */}
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.goBack()}>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    width: wp('95%'),
    borderRadius: 20,
  },
  iconContainer: {
    borderColor: '#FFD700', // Yellow border for the icon box
    borderWidth: 1,
    borderRadius: 10, // Rounded corners for the box
    padding: 10, // Space around the icon
    marginBottom: 25,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 5,
    fontFamily: 'Poppins-SemiBold',
  },
  subHeader: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 30,
    fontFamily: 'Poppins-Regular',
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#000000',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFD700',
    color: '#FFD700',
    fontSize: 16,
    marginBottom: 10,
    marginTop: '5%',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'flex-start',
  },
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
    height: hp('6%'),
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
  },
  backText: {
    color: '#FFF',
    fontSize: 17,
    marginLeft: 5,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    marginTop: 1,
  },
});

export default SetNewPasswordScreen;
