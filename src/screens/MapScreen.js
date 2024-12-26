import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';

const MapScreen = ({navigation}) => {
  const [webViewKey, setWebViewKey] = useState(0);

  const googleMapsHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { margin: 0; padding: 0; }
          iframe {
            width: 100%;
            height: 100vh;
            border: none;
          }
        </style>
      </head>
      <body>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1tyb-dkXVIeG396lBO9hfeHQnfdI&ehbc=2E312F"
          width="100%"
          height="100%"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
        ></iframe>
      </body>
    </html>
  `;

  const handleReload = () => {
    setWebViewKey(prevKey => prevKey + 1);
  };

  return (
    <ImageBackground
      source={require('../assets/images/SplashBg.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <WebView
            key={webViewKey}
            source={{html: googleMapsHTML}}
            style={styles.webview}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
          <TouchableOpacity style={styles.fab} onPress={handleReload}>
            <Icon name="reload" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    height: '100%',
  },
  webview: {
    height: '100%',
    width: '100%',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FDC712',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});

export default MapScreen;
