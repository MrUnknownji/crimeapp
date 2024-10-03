

// import React from 'react';
// import { StyleSheet, View, TextInput, ImageBackground, TouchableOpacity, Text } from 'react-native';
// import { WebView } from 'react-native-webview';
// import Icon from 'react-native-vector-icons/Ionicons'; // Import icon library
// import { heightPercentageToDP } from 'react-native-responsive-screen';

// const MapScreen = ({ navigation }) => {
//     const googleMapUrl = "https://www.google.com/maps/d/u/0/viewer?mid=1tyb-dkXVIeG396lBO9hfeHQnfdI&g_ep=CAESCjExLjE0Mi4xMDAYACDdYiqZASw5NDIzMDUwNiw5NDIwMzMyNCw0NzA3NTQ4OSw5NDIxNjQyNiw5NDIxNjQxMyw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICVVM%3D&shorturl=1&ll=33.93438968565072%2C-118.2982988732238&z=13";

//     return (
//         <ImageBackground
//             source={require('../assets/images/SplashBg.png')}
//             style={styles.backgroundImage}
//         >
//             <View style={styles.container}>
//                 {/* Search Input */}
//                 <View style={styles.searchContainer}>
//                     <Icon name="search" size={24} color="#000" style={styles.searchIcon} />
//                     <TextInput
//                         style={styles.searchInput}
//                         placeholder="Search by Area"
//                         placeholderTextColor="#999" // Slightly dimmed color for placeholder
//                     />
//                 </View>

//                 {/* WebView for Google Map with set width, height, and margins */}
//                 <View style={styles.mapContainer}>
//                     <WebView
//                         source={{ uri: googleMapUrl }}
//                         style={styles.webview}
//                     />
//                 </View>

//                 {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateRateMap')}>
//                     <Text style={styles.buttonText}>All Done</Text>
//                 </TouchableOpacity> */}
//             </View>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover',
//     },
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     },
//     searchContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         borderRadius: 30,
//         marginBottom: 20,
//         paddingHorizontal: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 4,
//         elevation: 5,
//         height: heightPercentageToDP("6%"),
//         justifyContent: 'center',
//     },
//     searchIcon: {
//         marginRight: 10,
//     },
//     searchInput: {
//         flex: 1,
//         color: '#000',
//         fontSize: 16,
//         fontFamily: "Poppins-Medium",
//         fontWeight: "400",
//         paddingVertical: 0,
//     },
//     mapContainer: {
//         flex: 1,
//         borderRadius: 10,
//         overflow: 'hidden',
//         marginTop: 10,
//         marginBottom: 20,
//         marginHorizontal: 10,
//     },
//     webview: {
//         height: '100%',
//         width: '100%',
//     },
//     button: {
//         backgroundColor: '#FDC712',
//         paddingVertical: 12,
//         paddingHorizontal: 50,
//         borderRadius: 10,
//         alignItems: 'center',
//         shadowColor: "#000", // Button shadow
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 2.5,
//         elevation: 5, // Android shadow
//     },
//     buttonText: {
//         color: '#000',
//         fontSize: 16,
//         fontFamily: "Poppins-SemiBold",
//     },
// });

// export default MapScreen;







// import React, { useState } from 'react';
// import {
//     StyleSheet,
//     View,
//     TextInput,
//     ImageBackground,
//     TouchableOpacity,
//     Text,
//     Modal,
//     ScrollView,
// } from 'react-native';
// import { WebView } from 'react-native-webview';
// import Icon from 'react-native-vector-icons/Ionicons'; // Import icon library
// import { heightPercentageToDP } from 'react-native-responsive-screen';

// const MapScreen = ({ navigation }) => {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [locationDetails, setLocationDetails] = useState(''); // Store dynamic location details

//     const googleMapUrl = "https://www.google.com/maps/d/u/0/viewer?mid=1tyb-dkXVIeG396lBO9hfeHQnfdI&g_ep=CAESCjExLjE0Mi4xMDAYACDdYiqZASw5NDIzMDUwNiw5NDIwMzMyNCw0NzA3NTQ4OSw5NDIxNjQyNiw5NDIxNjQxMyw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICVVM%3D&shorturl=1&ll=33.93438968565072%2C-118.2982988732238&z=13";

//     const injectedJavaScript = `
//         document.addEventListener('click', function(event) {
//             if (event.target && event.target.classList.contains('place-container')) {
//                 window.ReactNativeWebView.postMessage('Location clicked with details');
//             }
//         });
//     `;

//     const handleMessage = (event) => {
//         // Assume the event data contains dynamic details of the clicked location
//         const details = event.nativeEvent.data;
//         setLocationDetails(details);
//         setModalVisible(true); // Open modal when location is clicked
//     };

//     return (
//         <ImageBackground
//             source={require('../assets/images/SplashBg.png')}
//             style={styles.backgroundImage}
//         >
//             <View style={styles.container}>
//                 {/* Search Input */}
//                 <View style={styles.searchContainer}>
//                     <Icon name="search" size={24} color="#000" style={styles.searchIcon} />
//                     <TextInput
//                         style={styles.searchInput}
//                         placeholder="Search by Area"
//                         placeholderTextColor="#999" // Slightly dimmed color for placeholder
//                     />
//                 </View>

//                 {/* WebView for Google Map */}
//                 <View style={styles.mapContainer}>
//                     <WebView
//                         source={{ uri: googleMapUrl }}
//                         style={styles.webview}
//                         injectedJavaScript={injectedJavaScript}
//                         onMessage={handleMessage}
//                     />
//                 </View>

//                 {/* Modal for displaying dynamic details */}
//                 <Modal
//                     animationType="slide"
//                     transparent={true}
//                     visible={modalVisible}
//                     onRequestClose={() => setModalVisible(false)} // Close modal on back press
//                 >
//                     <View style={styles.modalContainer}>
//                         <View style={styles.modalContent}>
//                             <ScrollView>
//                                 <Text style={styles.modalTitle}>Location Details</Text>
//                                 <Text style={styles.modalDetails}>{locationDetails}</Text>
//                                 <TouchableOpacity
//                                     style={styles.closeButton}
//                                     onPress={() => setModalVisible(false)} // Close button to dismiss the modal
//                                 >
//                                     <Text style={styles.closeButtonText}>Close</Text>
//                                 </TouchableOpacity>
//                             </ScrollView>
//                         </View>
//                     </View>
//                 </Modal>
//             </View>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover',
//     },
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     },
//     searchContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         borderRadius: 30,
//         marginBottom: 20,
//         paddingHorizontal: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 4,
//         elevation: 5,
//         height: heightPercentageToDP("6%"),
//         justifyContent: 'center',
//     },
//     searchIcon: {
//         marginRight: 10,
//     },
//     searchInput: {
//         flex: 1,
//         color: '#000',
//         fontSize: 16,
//         fontFamily: "Poppins-Medium",
//         fontWeight: "400",
//         paddingVertical: 0,
//     },
//     mapContainer: {
//         flex: 1,
//         borderRadius: 10,
//         overflow: 'hidden',
//         marginTop: 10,
//         marginBottom: 20,
//         marginHorizontal: 10,
//     },
//     webview: {
//         height: '100%',
//         width: '100%',
//     },
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     modalContent: {
//         width: '90%',
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding: 20,
//         alignItems: 'center',
//     },
//     modalTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     modalDetails: {
//         fontSize: 16,
//         marginBottom: 20,
//     },
//     closeButton: {
//         backgroundColor: '#FDC712',
//         padding: 10,
//         borderRadius: 5,
//     },
//     closeButtonText: {
//         color: '#000',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });

// export default MapScreen;

import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Text,
    Modal,
    ScrollView,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icon library
import { heightPercentageToDP } from 'react-native-responsive-screen';

const MapScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [locationDetails, setLocationDetails] = useState(''); // Store dynamic location details

    const googleMapUrl = "https://www.google.com/maps/d/u/0/viewer?mid=1tyb-dkXVIeG396lBO9hfeHQnfdI&g_ep=CAESCjExLjE0Mi4xMDAYACDdYiqZASw5NDIzMDUwNiw5NDIwMzMyNCw0NzA3NTQ4OSw5NDIxNjQyNiw5NDIxNjQxMyw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICVVM%3D&shorturl=1&ll=33.93438968565072%2C-118.2982988732238&z=13";

    const injectedJavaScript = `
        document.addEventListener('click', function(event) {
            if (event.target && event.target.classList.contains('place-container')) {
                window.ReactNativeWebView.postMessage('Location clicked with details');
            }
        });
    `;

    const handleMessage = (event) => {
        // Assume the event data contains dynamic details of the clicked location
        const details = event.nativeEvent.data;
        setLocationDetails(details);
        setModalVisible(true); // Open modal when location is clicked
    };

    return (
        <ImageBackground
            source={require('../assets/images/SplashBg.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                {/* Search Input */}
                <View style={styles.searchContainer}>
                    <Icon name="search" size={24} color="#000" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search by Area"
                        placeholderTextColor="#999" // Slightly dimmed color for placeholder
                    />
                </View>

                {/* WebView for Google Map */}
                <View style={styles.mapContainer}>
                    <WebView
                        source={{ uri: googleMapUrl }}
                        style={styles.webview}
                        injectedJavaScript={injectedJavaScript}
                        onMessage={handleMessage}
                    />
                </View>

                {/* Modal for displaying dynamic details */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)} // Close modal on back press
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <ScrollView contentContainerStyle={styles.scrollContent}>
                                <Text style={styles.modalTitle}>Location Details</Text>
                                <Text style={styles.modalDetails}>{locationDetails}</Text>
                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={() => setModalVisible(false)} // Close button to dismiss the modal
                                >
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
        // padding: 20,
        // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 30,
        marginBottom: 20,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        height: heightPercentageToDP("6%"),
        justifyContent: 'center',
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: '#000',
        fontSize: 16,
        fontFamily: "Poppins-Medium",
        fontWeight: "400",
        paddingVertical: 0,
    },
    mapContainer: {
        flex: 1,
        borderRadius: 10,
        // overflow: 'hidden',
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 10,
        height: "100%"
    },
    webview: {
        height: '100%',
        width: '100%',
    },
    modalContainer: {
        position: 'absolute',   // Full screen
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Slightly darker background
    },
    modalContent: {
        height: '100%',        // Full height
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,  // Rounded top edges
        borderTopRightRadius: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalDetails: {
        fontSize: 16,
        marginBottom: 20,
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


});

export default MapScreen;
