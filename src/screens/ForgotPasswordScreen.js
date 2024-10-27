import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useAuth} from '../hooks/useAuth';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
});

const ForgotPasswordScreen = ({navigation}) => {
  const {forgotPassword, loading, error} = useAuth();

  const handleForgotPassword = async (values, {setSubmitting}) => {
    try {
      await forgotPassword(values.email);
      Alert.alert(
        'Success',
        'Password reset instructions have been sent to your email.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('LoginScreen'),
          },
        ],
      );
    } catch (err) {
      Alert.alert(
        'Error',
        err.message || 'An error occurred while sending reset instructions',
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/SplashBg.png')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name="finger-print" size={40} color="#FFF" />
        </View>

        <Text style={styles.header}>Forgot Password?</Text>
        <Text style={styles.subHeader}>
          No worries, we'll send you reset instructions.
        </Text>

        <Formik
          initialValues={{email: ''}}
          validationSchema={ForgotPasswordSchema}
          onSubmit={handleForgotPassword}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <View style={styles.formContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={[
                  styles.input,
                  touched.email && errors.email && styles.inputError,
                ]}
                placeholder="Enter your email"
                placeholderTextColor="#FFFFFF80"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                editable={!loading}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <TouchableOpacity
                style={[
                  styles.button,
                  (loading || isSubmitting) && styles.buttonDisabled,
                ]}
                onPress={handleSubmit}
                disabled={loading || isSubmitting}>
                {loading || isSubmitting ? (
                  <ActivityIndicator color="#FFF" />
                ) : (
                  <Text style={styles.buttonText}>Reset Password</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.navigate('LoginScreen')}
          disabled={loading}>
          <Icon name="arrow-back" size={18} color="#FFF" />
          <Text style={styles.backText}>Back to login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: wp('5%'),
    justifyContent: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: hp('3%'),
  },
  header: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: hp('1%'),
  },
  subHeader: {
    fontSize: wp('4%'),
    color: '#FFFFFF80',
    textAlign: 'center',
    marginBottom: hp('4%'),
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: wp('4%'),
    color: '#FFF',
    marginBottom: hp('1%'),
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: wp('4%'),
    color: '#FFF',
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  inputError: {
    borderColor: '#FF0000',
    borderWidth: 1,
  },
  errorText: {
    color: '#FF0000',
    fontSize: wp('3.5%'),
    marginBottom: hp('1%'),
  },
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    padding: wp('4%'),
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  buttonDisabled: {
    backgroundColor: '#FFD70080',
  },
  buttonText: {
    color: '#000',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%'),
  },
  backText: {
    color: '#FFF',
    fontSize: wp('4%'),
    marginLeft: wp('2%'),
  },
});

export default ForgotPasswordScreen;
