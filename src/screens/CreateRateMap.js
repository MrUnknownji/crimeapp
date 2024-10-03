// import React from 'react';
// import { StyleSheet, View, ImageBackground, Text } from 'react-native';
// import { heightPercentageToDP } from 'react-native-responsive-screen';
// import { WebView } from 'react-native-webview';

// const CreateRateMap = ({ navigation }) => {
//     const googleMapUrl = "https://www.google.com/maps/d/u/0/viewer?mid=1tyb-dkXVIeG396lBO9hfeHQnfdI&g_ep=CAESCjExLjE0Mi4xMDAYACDdYiqZASw5NDIzMDUwNiw5NDIwMzMyNCw0NzA3NTQ4OSw5NDIxNjQyNiw5NDIxNjQxMyw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICVVM%3D&shorturl=1&ll=33.93438968565072%2C-118.2982988732238&z=13";

//     const crimeData = [
//         { type: 'Assault', value: 59, note: '0.41x less than average' },
//         { type: 'Burglary', value: 39, note: '2.92x more than average' },
//         { type: 'Larceny', value: 189, note: '1.89x more than average' },
//         { type: 'Murder', value: 183, note: '1.83x more than average' },
//         { type: 'Motor Vehicle Theft', value: 79, note: '0.00x less than average' },
//         { type: 'Property Crime', value: 89, note: '2.42x less than average' },
//     ];

//     return (
//         <ImageBackground
//             source={require('../assets/images/SplashBg.png')}
//             style={styles.backgroundImage}
//         >
//             <View style={styles.container}>
//                 {/* Header */}
//                 <Text style={styles.headerTitle}>Crime Rate Map</Text>

//                 {/* WebView for Google Map */}
//                 <View style={styles.mapContainer}>
//                     <WebView
//                         source={{ uri: googleMapUrl }}
//                         style={styles.webview}
//                         scalesPageToFit={true}
//                     />
//                 </View>

//                 {/* Single Card for Crime Data */}
//                 <View style={styles.crimeCard}>
//                     <Text style={styles.cardTitle}>Zahl (58856) Crime Index</Text>
//                     {crimeData.map((item, index) => (
//                         <View key={index} style={styles.crimeRow}>
//                             <Text style={styles.crimeType}>{item.type}</Text>
//                             <Text style={styles.crimeValue}>{item.value}</Text>
//                             <Text style={styles.crimeNote}>{item.note}</Text>
//                         </View>
//                     ))}
//                 </View>
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
//     // Top header style for "Crime Rate Map"
//     headerTitle: {
//         fontSize: 20, // Reduced font size
//         fontFamily: "Poppins-Bold", // Font family for the title
//         color: '#FFF',
//         textAlign: 'center',
//         marginBottom: 10,
//     },
//     mapContainer: {
//         flex: 0.6,
//         borderRadius: 10,
//         overflow: 'hidden',
//         marginTop: 10,
//         marginBottom: 10,
//         marginHorizontal: 10,
//     },
//     webview: {
//         height: '100%',
//         width: '100%',
//     },
//     // Updated card style
//     crimeCard: {
//         flex: 0.4,
//         backgroundColor: '#ca943e', // Different card color
//         borderRadius: 10,
//         padding: 10, // Reduced padding to fit content
//         elevation: 5,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 2.5,
//         height: heightPercentageToDP('7%'),
//         marginTop: heightPercentageToDP('2')
//     },
//     cardTitle: {
//         fontSize: 16, // Reduced font size to fit better
//         fontFamily: "Poppins-Bold",
//         color: '#554c4c',
//         marginBottom: 10,
//         textAlign: 'center',
//     },
//     crimeRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: '#e6c185', // Entire row background color
//         padding: 3, // Added padding to the row
//         borderRadius: 5,
//         marginBottom: 5,
//     },
//     crimeType: {
//         fontSize: 12, // Reduced font size
//         fontFamily: "Poppins-Medium",
//         color: '#000', // Darker color to contrast with background
//         width: '30%',
//     },
//     crimeValue: {
//         fontSize: 14, // Reduced font size
//         fontFamily: "Poppins-Bold",
//         color: '#000',
//         width: '15%',
//         textAlign: 'center',
//     },
//     crimeNote: {
//         fontSize: 12, // Reduced font size
//         fontFamily: "Poppins-Regular",
//         color: '#000',
//         width: '50%', // Adjusted width to fit within the row
//         textAlign: 'right',
//     },
// });

// export default CreateRateMap;

// import React from 'react';
// import { StyleSheet, View, ImageBackground, Text, ScrollView } from 'react-native';
// import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
// import { WebView } from 'react-native-webview';

// const CreateRateMap = ({ navigation }) => {
//     const googleMapUrl = "https://www.google.com/maps/d/u/0/viewer?mid=1tyb-dkXVIeG396lBO9hfeHQnfdI&g_ep=CAESCjExLjE0Mi4xMDAYACDdYiqZASw5NDIzMDUwNiw5NDIwMzMyNCw0NzA3NTQ4OSw5NDIxNjQyNiw5NDIxNjQxMyw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICVVM%3D&shorturl=1&ll=33.93438968565072%2C-118.2982988732238&z=13";

//     const crimeData = [
//         { type: 'Assault', value: 59, note: '0.41x less than average' },
//         { type: 'Burglary', value: 39, note: '2.92x more than average' },
//         { type: 'Larceny', value: 189, note: '1.89x more than average' },
//         { type: 'Murder', value: 183, note: '1.83x more than average' },
//         { type: 'Motor Vehicle Theft', value: 79, note: '0.00x less than average' },
//         { type: 'Property Crime', value: 89, note: '2.42x less than average' },
//     ];

//     return (
//         <ImageBackground
//             source={require('../assets/images/SplashBg.png')}
//             style={styles.backgroundImage}
//         >
//             <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
//                 <View style={styles.container}>
//                     {/* Header */}
//                     <Text style={styles.headerTitle}>Crime Rate Map</Text>

//                     {/* WebView for Google Map */}
//                     <View style={styles.mapContainer}>
//                         <WebView
//                             source={{ uri: googleMapUrl }}
//                             style={styles.webview}
//                             scalesPageToFit={true}
//                         />
//                     </View>

//                     {/* Single Card for Crime Data */}
//                     <View style={styles.crimeCard}>
//                         <Text style={styles.cardTitle}>Zahl (58856) Crime Index</Text>
//                         {crimeData.map((item, index) => (
//                             <View key={index} style={styles.crimeRow}>
//                                 <Text style={styles.crimeType}>{item.type}</Text>
//                                 <Text style={styles.crimeValue}>{item.value}</Text>
//                                 <Text style={styles.crimeNote}>{item.note}</Text>
//                             </View>
//                         ))}
//                     </View>
//                 </View>
//             </ScrollView>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover',
//     },
//     scrollContainer: {
//         flexGrow: 1,
//     },
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     },
//     // Top header style for "Crime Rate Map"
//     headerTitle: {
//         fontSize: heightPercentageToDP('2.5%'), // Responsive font size
//         fontFamily: "Poppins-Bold", // Font family for the title
//         color: '#FFF',
//         textAlign: 'center',
//         marginBottom: heightPercentageToDP('1%'),
//     },
//     mapContainer: {
//         height: heightPercentageToDP('50%'), // Increased map height to 50% of the screen
//         borderRadius: 10,
//         overflow: 'hidden',
//         marginTop: heightPercentageToDP('2%'),
//         marginBottom: heightPercentageToDP('2%'),
//         marginHorizontal: widthPercentageToDP('2%'),
//     },
//     webview: {
//         height: '100%',
//         width: '100%',
//     },
//     // Updated card style
//     crimeCard: {
//         backgroundColor: '#ca943e',
//         borderRadius: 10,
//         padding: heightPercentageToDP('2%'), // Responsive padding
//         elevation: 5,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 2.5,
//         marginTop: heightPercentageToDP('2%'),
//     },
//     cardTitle: {
//         fontSize: heightPercentageToDP('2%'), // Responsive font size
//         fontFamily: "Poppins-Bold",
//         color: '#554c4c',
//         marginBottom: heightPercentageToDP('1.5%'),
//         textAlign: 'center',
//     },
//     crimeRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: '#e6c185', // Entire row background color
//         padding: heightPercentageToDP('1%'), // Responsive padding
//         borderRadius: 5,
//         marginBottom: heightPercentageToDP('0.5%'),
//     },
//     crimeType: {
//         fontSize: heightPercentageToDP('1.5%'), // Responsive font size
//         fontFamily: "Poppins-Medium",
//         color: '#000', // Darker color to contrast with background
//         width: '30%',
//     },
//     crimeValue: {
//         fontSize: heightPercentageToDP('1.8%'), // Responsive font size
//         fontFamily: "Poppins-Bold",
//         color: '#000',
//         width: '15%',
//         textAlign: 'center',
//     },
//     crimeNote: {
//         fontSize: heightPercentageToDP('1.5%'), // Responsive font size
//         fontFamily: "Poppins-Regular",
//         color: '#000',
//         width: '50%',
//         textAlign: 'right',
//     },
// });

// export default CreateRateMap;
