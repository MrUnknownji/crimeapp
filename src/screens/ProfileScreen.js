import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Alert,
} from 'react-native';
import {useUser} from '../hooks/useUser';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

const ProfileScreen = () => {
  const {update, show, logout} = useUser();
  const [user_id, setUserId] = useState('');
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [userPassword, setUserPassword] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleLogout = useCallback(async () => {
    try {
      const loginToken = await AsyncStorage.getItem('loginToken');
      await logout(loginToken);
      AsyncStorage.multiRemove(['loginToken', 'userId', 'loggedIn']);
      navigation.replace('LoginScreen');
    } catch (error) {
      console.error('Error logging out:', error);
      Alert.alert('Error', 'Failed to logout');
    }
  }, [logout, navigation]);

  const fetchUserData = useCallback(async () => {
    const loginToken = await AsyncStorage.getItem('loginToken');
    try {
      const response = await show(loginToken);
      const user = response.data.data;
      setUserId(user.id);
      setUserData({name: user.name, email: user.email, phone: user.phone});
    } catch (error) {
      console.error('Error fetching user data:', error);
      Alert.alert('Error', 'Failed to fetch user data');
      handleLogout();
    }
  }, [show, handleLogout]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handlePasswordChange = value => {
    setUserPassword(value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    let updatedData = {...userData};
    if (userPassword !== '') {
      updatedData.password = userPassword;
      updatedData.password_confirmation = userPassword;
    }
    try {
      console.log(updatedData);
      await update(updatedData, user_id);
      setIsEditing(false);
      setUserPassword('');
      Alert.alert('Success', 'Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile');
    }
  };

  const handleChange = (key, value) => {
    setUserData({...userData, [key]: value});
  };

  return (
    <ImageBackground
      source={require('../assets/images/SplashBg.png')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <Image
            source={require('../assets/images/ProfileImg.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>{userData.name}</Text>
          <Text style={styles.profileEmail}>{userData.email}</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={userData.name}
            style={styles.inputField}
            editable={isEditing}
            onChangeText={value => handleChange('name', value)}
          />
          <TextInput
            value={userData.email}
            style={styles.inputField}
            editable={isEditing}
            onChangeText={value => handleChange('email', value)}
          />
          <TextInput
            value={userData.phone}
            style={styles.inputField}
            editable={isEditing}
            onChangeText={value => handleChange('phone', value)}
          />
          {isEditing && (
            <TextInput
              value={userPassword}
              style={styles.inputField}
              onChangeText={handlePasswordChange}
              placeholder="New Password"
              placeholderTextColor="#000"
              secureTextEntry
            />
          )}

          {isEditing ? (
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleEdit}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
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
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
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
    textAlign: 'left',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    color: '#000',
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
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
  },
});

export default ProfileScreen;
