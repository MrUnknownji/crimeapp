import React, {useEffect, useState} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

// Validation schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    )
    .required('Password is required'),
});

const LoginScreen = ({navigation}) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {login} = useUser();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const loggedIn = await AsyncStorage.getItem('loggedIn');
      const loginToken = await AsyncStorage.getItem('loginToken');
      if (loggedIn === 'true' && loginToken) {
        navigation.replace('TabNavigator');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  const handleLogin = async values => {
    setIsLoading(true);
    try {
      const response = await login(values);

      await AsyncStorage.setItem('userId', response.data.user.id.toString());
      await AsyncStorage.setItem('loginToken', response.data.token);
      if (rememberMe) {
        await AsyncStorage.setItem('loggedIn', 'true');
      }

      navigation.replace('TabNavigator');
    } catch (err) {
      Alert.alert('Login unsuccessful', 'Please try again.');
      console.error('Error while login: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/SplashBg.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/Eagle.png')}
            style={styles.logo}
          />

          <Text style={styles.title}>Welcome Back</Text>

          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                {/* Email Input */}
                <TextInput
                  style={styles.input}
                  placeholder="Email Id"
                  placeholderTextColor="#FFFFFF"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorTextRight}>{errors.email}</Text>
                )}

                {/* Password Input */}
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="#FFFFFF"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorTextRight}>{errors.password}</Text>
                )}

                {/* Remember me and Register */}
                <View style={styles.options}>
                  <View style={styles.rememberMe}>
                    <CheckBox
                      value={rememberMe}
                      onValueChange={setRememberMe}
                      style={styles.checkbox}
                      tintColors={{true: '#FFD700', false: '#FFFFFF'}}
                    />
                    <Text style={styles.rememberMeText}>Remember me</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.registerText}>Register</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={[
                    styles.loginButton,
                    isLoading && styles.disabledButton,
                  ]}
                  onPress={handleSubmit}
                  disabled={isLoading}>
                  <Text style={styles.loginButtonText}>
                    {isLoading ? 'Loading...' : 'Login'}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text style={styles.forgotPassword}>Forget Password</Text>
          </TouchableOpacity>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    marginBottom: hp('2%'),
  },
  title: {
    fontSize: hp('4%'),
    color: '#FFD700',
    marginBottom: hp('2%'),
    fontFamily: 'Sniglet-Regular',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#1a1a1a',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFD700',
    color: '#FFD700',
    fontSize: hp('2%'),
    marginTop: hp('2%'),
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
  },
  options: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 5,
  },
  rememberMeText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
  },
  registerText: {
    color: '#FFD700',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
  },
  loginButton: {
    width: '100%',
    height: hp('6%'),
    backgroundColor: '#FFD700',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('4%'),
  },
  loginButtonText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
  },
  forgotPassword: {
    color: '#9A9A9A',
    fontSize: hp('2.3%'),
    textDecorationLine: 'underline',
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
  },
  errorTextRight: {
    color: 'red',
    fontSize: 14,
    marginBottom: hp('2%'),
    alignSelf: 'flex-start', // Aligns text to the right
    fontFamily: 'Poppins-Regular',
  },
});

export default LoginScreen;
