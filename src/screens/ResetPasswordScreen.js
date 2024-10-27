import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../hooks/useAuth';

const ResetPasswordScreen = ({navigation, route}) => {
  const {email} = route.params;
  const [otpCode, setOtpCode] = useState('');
  const {resetPassword, loading, error} = useAuth();

  const handleContinue = async () => {
    try {
      // Note: This is a placeholder. The actual reset process might be different
      // depending on your backend implementation.
      const response = await resetPassword({
        email,
        token: otpCode,
        password: '', // This should be set in the next screen
        password_confirmation: '', // This should be set in the next screen
      });
      if (response.message === 'Your password has been reset!') {
        navigation.navigate('SetNewPasswordScreen', {email, token: otpCode});
      }
    } catch (err) {
      console.log('Error occurred while verifying OTP: ', err);
    }
  };

  const handleOTPChange = code => {
    setOtpCode(code);
    console.log(`OTP Code Entered: ${code}`);
  };

  return (
    <ImageBackground
      source={require('../assets/images/SplashBg.png')}
      style={styles.background}>
      <View style={styles.container}>
        {/* Custom Mail Icon */}
        <View style={styles.iconContainer}>
          <Icon
            name="mail-outline"
            size={40}
            color="#FFF"
            style={styles.icon}
          />
        </View>

        {/* Title and Email Information */}
        <Text style={styles.title}>Password Reset</Text>
        <Text style={styles.subtitle}>
          We sent a code to{' '}
          <Text style={styles.boldEmail}>splash@123gmail.com</Text>
        </Text>

        {/* OTP Input Fields using react-native-otp-textinput */}
        <OTPTextInput
          handleTextChange={handleOTPChange} // Callback when OTP is being typed
          inputCount={4} // Number of OTP digits
          tintColor="#FFAA00" // Color for active input box
          offTintColor="#FFF" // Color for inactive input box
          inputCellLength={1} // Number of characters per input cell
          textInputStyle={styles.otpInput} // Styling for each input box
        />

        {/* Continue Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>

        {/* Resend Email Text */}
        <Text style={styles.resendText}>
          Didn't receive the email?{' '}
          <Text style={styles.resendLink}>Click to resend</Text>
        </Text>

        {/* Back to Login with Arrow Icon */}
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
    width: '95%',
  },
  iconContainer: {
    borderColor: '#FDC712',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,

    marginBottom: 10,
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  boldEmail: {
    fontWeight: 'bold',
    color: '#FFD700',
  },
  otpInput: {
    borderWidth: 2,
    borderColor: '#FFD700',
    borderRadius: 8,
    width: wp('14%'),
    height: hp('7%'),
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 5,
    backgroundColor: '#FFF',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 40,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFD700',
    // padding: 15,
    height: hp('6%'),
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,

    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
  },
  resendText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
  },
  resendLink: {
    color: '#FFD700',
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    fontSize: 14,
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
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

export default ResetPasswordScreen;
