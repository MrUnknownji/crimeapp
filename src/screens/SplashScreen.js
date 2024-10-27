import React, {useEffect} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  Text,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Set a timeout to navigate to the next screen after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('LoginScreen'); // Navigate to the "Next" screen
    }, 2000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/images/SplashBg.png')} // Your background image path
      style={styles.background}>
      <View style={styles.container}>
        {/* First image (small size) */}
        {/* <Image
                    source={require('../assets/images/1Life.png')}
                    style={styles.smallImage}
                />

                <Image
                    source={require('../assets/images/1Love.png')}
                    style={styles.largeImage}
                /> */}
        {/* Logo image */}
        <Image
          source={require('../assets/images/Eagle.png')} // Your logo path
          style={styles.logo}
        />
        {/* Third image (medium size) */}
        <Image
          source={require('../assets/images/Boundaries.png')} // Image for "1 BrotherHood"
          style={styles.mediumImage} // Medium size for the third image
        />
        {/* <Text style={{ fontFamily: "old-english-text-mt", color: "white", fontSize: 50 }}>HLO</Text> */}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallImage: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  largeImage: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  mediumImage: {
    width: 270,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  logo: {
    // width: 200,
    // height: 200,
    resizeMode: 'contain',
    marginBottom: 20, // Space after the logo
  },
});

export default SplashScreen;
