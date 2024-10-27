import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useUser} from '../hooks/useUser';

// Validation schema using Yup
const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z0-9]+$/, 'Username must only contain letters and numbers')
    .required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number',
    )
    .min(6, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const RegisterScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {register} = useUser();

  return (
    <ImageBackground
      source={require('../assets/images/SplashBg.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
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
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
              phone: '9999999999',
            }}
            validationSchema={RegisterSchema}
            onSubmit={async (values, {setSubmitting}) => {
              try {
                const registrationData = {
                  name: values.name,
                  email: values.email,
                  password: values.password,
                  password_confirmation: values.confirmPassword,
                  phone: values.phone,
                };
                const result = await register(registrationData);
                console.log(result);
                navigation.navigate('LoginScreen');
              } catch (error) {
                console.error('Detailed error:', error);
                if (
                  error.response.data.errors ===
                  'The email has already been taken.'
                ) {
                  Alert.alert(
                    'The account already exist on this email, Try another one',
                  );
                } else {
                  Alert.alert('Try again, Registration failed');
                }
                if (error.response) {
                  console.error('Error data:', error.response.data);
                  console.error('Error status:', error.response.status);
                  console.error('Error headers:', error.response.headers);
                } else if (error.request) {
                  console.error('Error request:', error.request);
                } else {
                  console.error('Error message:', error.message);
                }
                throw error;
              } finally {
                setSubmitting(false);
              }
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
            }) => (
              <>
                {/* Username Field (Text Input) */}
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#fff"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
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
                {/* Phone Number Field */}
                {/* <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  placeholderTextColor="#fff"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                />
                {touched.phone && errors.phone && (
                  <Text style={styles.errorText}>{errors.phone}</Text>
                )} */}

                {/* Checkbox for Show Password */}
                <View style={styles.options}>
                  <View style={styles.showPasswordContainer}>
                    <CheckBox
                      value={passwordVisible}
                      onValueChange={setPasswordVisible}
                      style={styles.checkbox}
                      tintColors={{true: '#FFD700', false: '#FFFFFF'}}
                    />
                    <Text style={styles.showPasswordText}>Show password</Text>
                  </View>

                  {/* Login Text */}
                  <TouchableOpacity
                    onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.loginText}>Login</Text>
                  </TouchableOpacity>
                </View>

                {/* Register Button */}
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() => {
                    console.log('Register button pressed');
                    if (Object.keys(errors).length === 0) {
                      handleSubmit();
                    } else {
                      console.log('Form has errors:', errors);
                    }
                  }}
                  disabled={isSubmitting}>
                  <Text style={styles.registerButtonText}>
                    {isSubmitting ? 'Registering...' : 'Register'}
                  </Text>
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
    fontFamily: 'Poppins-Regular',
  },
});

export default RegisterScreen;
