import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Animated,
  PermissionsAndroid,
  Platform,
  Alert,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {useUser} from '../hooks/useUser';

const {width, height} = Dimensions.get('window');

const CreatePostScreen = ({navigation}) => {
  const postData = [
    {
      id: '1',
      profileName: 'Ethan Rivers',
      profiletitle: 'Lucas Brooks',
      postDate: '2 May 2024',
      commentCount: 89,
      postImage: require('../assets/images/unnamed.png'),
      profileImage: require('../assets/images/profile.jpeg'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: '2',
      profileName: 'John Doe',
      profiletitle: 'Jane Smith',
      postDate: '10 April 2024',
      commentCount: 56,
      postImage: require('../assets/images/crime.jpg'),
      profileImage: require('../assets/images/profile.jpeg'),
      description:
        'This is another example post to demonstrate multiple cards in a FlatList.',
    },
    {
      id: '3',
      profileName: 'Jane Smith',
      profiletitle: 'Jane Smith',
      postDate: '10 April 2024',
      commentCount: 60,
      postImage: require('../assets/images/police.jpg'),
      profileImage: require('../assets/images/profile.jpeg'),
      description:
        'This is another example post to demonstrate multiple cards in a FlatList.',
    },
  ];

  const [image, setImage] = useState(null);
  const [postText, setPostText] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [postStatus, setPostStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const fadeAnim = new Animated.Value(0);

  const {uploadImage} = useUser();

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const showStatus = (status, message) => {
    setPostStatus(status);
    setStatusMessage(message);
    fadeIn();
    setTimeout(() => {
      fadeOut();
      setTimeout(() => {
        setPostStatus('');
        setStatusMessage('');
      }, 500);
    }, 2000);
  };

  const handlePost = async () => {
    if (!image || !postText.trim()) {
      return;
    }

    setIsPosting(true);
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: image,
        type: 'image/jpeg',
        name: 'photo.jpg',
      });
      formData.append('text', postText.trim());

      await uploadImage(formData);
      showStatus('success', 'Post created successfully!');
      setImage(null);
      setPostText('');
    } catch (error) {
      showStatus('error', error.message || 'Failed to create post');
    } finally {
      setIsPosting(false);
    }
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission to take pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const handleGallery = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      maxWidth: 1280,
      maxHeight: 1280,
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets[0]) {
        setImage(response.assets[0].uri);
      }
    });
  };

  const handleCamera = async () => {
    const hasCameraPermission = await requestCameraPermission();

    if (!hasCameraPermission) {
      Alert.alert(
        'Permission Denied',
        'Please grant camera permission to use the camera',
      );
      return;
    }

    const options = {
      mediaType: 'photo',
      quality: 1,
      maxWidth: 1280,
      maxHeight: 1280,
      includeBase64: false,
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else if (response.assets && response.assets[0]) {
        setImage(response.assets[0].uri);
      }
    });
  };

  const renderItem = ({item}) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <View style={styles.profileSection}>
          <Image source={item.profileImage} style={styles.profileImage} />
          <View>
            <Text style={styles.profileName}>{item.profileName}</Text>
            <Text style={styles.profiletitle}>{item.profiletitle}</Text>
          </View>
        </View>
        <Text style={styles.postDate} numberOfLines={1}>
          {item.postDate}
        </Text>
      </View>

      <Image source={item.postImage} style={styles.postImage} />

      <View style={styles.commentSection}>
        <Icon
          name="comment"
          size={16}
          color="#333"
          style={styles.commentIcon}
        />
        <Text style={styles.commentText}>{item.commentCount} Comments</Text>
      </View>

      <View style={styles.profileSection}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Image source={item.profileImage} style={styles.profileImage} />
        </TouchableOpacity>
        <View>
          <Text style={styles.profileName}>{item.profileName}</Text>
          <Text style={styles.profileSubtitle}>{item.description}</Text>
        </View>
      </View>
    </View>
  );

  const getButtonStyle = () => {
    if (isPosting) {
      return styles.postButtonPosting;
    }
    if (postStatus === 'success') {
      return styles.postButtonSuccess;
    }
    if (postStatus === 'error') {
      return styles.postButtonError;
    }
    return !image || !postText.trim()
      ? styles.postButtonDisabled
      : styles.postButton;
  };

  const getStatusBackgroundColor = () => {
    return {
      backgroundColor: postStatus === 'success' ? '#4CAF50' : '#f44336',
    };
  };

  return (
    <ImageBackground
      source={require('../assets/images/SplashBg.png')}
      style={styles.background}>
      <ScrollView
        style={styles.overlayContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.topText}>
          <Text style={styles.leftText}>Create a Post</Text>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.topButtons}>
            <TouchableOpacity style={styles.button} onPress={handleGallery}>
              <Icon name="image" size={24} color="#000" />
              <Text style={styles.buttonText}>Upload Photos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCamera}>
              <Icon name="camera" size={24} color="#000" />
              <Text style={styles.buttonText}>Take Photo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputSection}>
            <View style={styles.inputContainer}>
              {image && (
                <Image source={{uri: image}} style={styles.uploadedImage} />
              )}
              <TextInput
                style={styles.input}
                placeholder="What's on your mind?"
                placeholderTextColor="#999"
                multiline
                value={postText}
                onChangeText={text => setPostText(text)}
              />
            </View>
          </View>

          <TouchableOpacity
            style={getButtonStyle()}
            onPress={handlePost}
            disabled={isPosting || !image || !postText.trim()}>
            {isPosting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.postButtonText}>
                {postStatus ? statusMessage : 'Post'}
              </Text>
            )}
          </TouchableOpacity>

          <Animated.View
            style={[
              styles.statusMessage,
              getStatusBackgroundColor(),
              {opacity: fadeAnim},
            ]}>
            <Text style={styles.statusText}>{statusMessage}</Text>
          </Animated.View>
        </View>

        <FlatList
          data={postData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          scrollEnabled={false}
        />
      </ScrollView>
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
  overlayContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  topText: {
    marginVertical: 15,
  },
  leftText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
  },
  cardContainer: {
    width: width * 0.9,
    backgroundColor: '#FFD700',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    alignSelf: 'center',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '45%',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    marginTop: 5,
    color: '#000',
  },
  inputSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    marginRight: 10,
  },
  uploadedImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  commentIcon: {
    marginBottom: 4,
    marginLeft: 5,
  },
  postButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    fontSize: 18,
  },
  postCard: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
  },
  profileSubtitle: {
    fontSize: 14,
    color: '#777',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    width: '49%',
  },
  profiletitle: {
    fontSize: 14,
    color: '#777',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
  },
  postDate: {
    fontSize: 12,
    color: '#333',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  commentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  commentText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
  },
  listContent: {
    paddingVertical: 10,
  },
  postButtonDisabled: {
    backgroundColor: '#cccccc',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  postButtonPosting: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  postButtonSuccess: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  postButtonError: {
    backgroundColor: '#f44336',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  statusMessage: {
    position: 'absolute',
    top: -30,
    left: 20,
    right: 20,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});

export default CreatePostScreen;
