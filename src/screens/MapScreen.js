import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Modal,
  ScrollView,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useLocation} from '../hooks/useLocation';

const MapScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [locationDetails, setLocationDetails] = useState('');
  const [webViewKey, setWebViewKey] = useState(0);
  const [gangs, setGangs] = useState([]);
  const {getSearchLocationUI} = useLocation();

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await getSearchLocationUI();
        if (response?.data) {
          setGangs(response.data);
          console.log('Gangs data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching gangs:', error);
      }
    };
    fetchLocation();
  }, [getSearchLocationUI]);

  const customMapHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <style>
          body { margin: 0; padding: 0; }
          #map { height: 100vh; width: 100%; }
          #searchBar {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
            background: white;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            display: flex;
            width: 90%;
          }
          #searchInput {
            flex: 1;
            padding: 8px;
            margin-right: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          #searchButton {
            padding: 8px 16px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .leaflet-control-zoom {
            margin-top: 10vh !important; /* Push zoom controls down */
          }
        </style>
      </head>
      <body>
        <div id="searchBar">
          <input type="text" id="searchInput" placeholder="Search by Gang Name">
          <button id="searchButton">Search</button>
        </div>
        <div id="map"></div>
        <script>
          const map = L.map('map').setView([34.0522, -118.2437], 10);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);

          const drawnItems = new L.FeatureGroup();
          map.addLayer(drawnItems);

          async function loadGangData(query = '') {
            try {
              const apiUrl = 'https://paprola.in/public/api/gangs' + (query ? '/search?q=' + encodeURIComponent(query) : '');
              const response = await fetch(apiUrl);
              const data = await response.json();

              drawnItems.clearLayers();

              data.forEach((gang) => {
                const coordinates = JSON.parse(gang.coordinates);
                let layer;

                if (gang.shapeType === 'polygon') {
                  layer = L.polygon(coordinates, { color: gang.color });
                } else if (gang.shapeType === 'rectangle') {
                  layer = L.rectangle(coordinates, { color: gang.color });
                }

                if (layer) {
                  layer.bindPopup(\`<b>Gang Name:</b> \${gang.gang_name}<br><b>Description:</b> \${gang.description}\`);
                  drawnItems.addLayer(layer);

                  layer.on('click', () => {
                    window.ReactNativeWebView.postMessage(JSON.stringify({
                      type: 'GANG_DETAILS',
                      gangName: gang.gang_name,
                      description: gang.description
                    }));
                  });
                }
              });
            } catch (error) {
              window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'ERROR',
                message: error.message
              }));
            }
          }

          loadGangData();

          document.getElementById('searchButton').onclick = () => {
            const query = document.getElementById('searchInput').value;
            loadGangData(query);
          };

          document.getElementById('searchInput').onkeypress = (e) => {
            if (e.key === 'Enter') {
              const query = document.getElementById('searchInput').value;
              loadGangData(query);
            }
          };
        </script>
      </body>
    </html>
  `;

  const handleMessage = event => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.type === 'GANG_DETAILS') {
        console.log(data.description);
        setLocationDetails(
          `Gang Name: ${data.gangName}\nDescription: ${data.description}`,
        );
        setModalVisible(true);
      }
    } catch (error) {
      console.log('Error handling message:', error);
    }
  };

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
            source={{html: customMapHTML}}
            style={styles.webview}
            onMessage={handleMessage}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
          <TouchableOpacity style={styles.fab} onPress={handleReload}>
            <Icon name="reload" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.fab, {bottom: 90}]}
            onPress={() => setModalVisible(true)}>
            <Icon name="list" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ScrollView contentContainerStyle={styles.scrollContent}>
                {locationDetails ? (
                  // Show specific gang details when a gang is selected
                  <>
                    <Text style={styles.modalTitle}>Location Details</Text>
                    <Text style={styles.modalDetails}>{locationDetails}</Text>
                  </>
                ) : (
                  // Show list of all gangs when no specific gang is selected
                  <>
                    <Text style={styles.modalTitle}>Gang List</Text>
                    {gangs.map((gang, index) => (
                      <View key={index} style={styles.gangItem}>
                        <Text style={styles.gangName}>{gang.gang_name}</Text>
                        <View
                          style={[
                            styles.colorIndicator,
                            {backgroundColor: gang.color},
                          ]}
                        />
                      </View>
                    ))}
                  </>
                )}
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => {
                    setModalVisible(false);
                    setLocationDetails('');
                  }}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    height: heightPercentageToDP('6%'),
    justifyContent: 'center',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    paddingVertical: 0,
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
  modalContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    height: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  modalDetails: {
    fontSize: 16,
    marginBottom: 20,
    color: '#000',
  },
  closeButton: {
    backgroundColor: '#FDC712',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
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
  gangItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '100%',
  },
  gangName: {
    fontSize: 16,
    fontWeight: '500',
  },
  colorIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 10,
  },
});

export default MapScreen;
