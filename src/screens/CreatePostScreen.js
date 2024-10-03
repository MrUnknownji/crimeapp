// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ImageBackground, ScrollView, Dimensions } from 'react-native';
// import { widthPercentageToDP } from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

// const { width, height } = Dimensions.get('window');
// const postData = [
//     {
//         id: '1',
//         profileName: 'Ethan Rivers',
//         profileSubtitle: 'Lucas Brooks',
//         postDate: '2 May 2024',
//         commentCount: 89,
//         postImage: require('../assets/images/unnamed.png'),
//         profileImage: require('../assets/images/profile.jpeg'),
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//     },
//     {
//         id: '2',
//         profileName: 'John Doe',
//         profileSubtitle: 'Jane Smith',
//         postDate: '10 April 2024',
//         commentCount: 56,
//         postImage: require('../assets/images/crime.jpg'),
//         profileImage: require('../assets/images/profile.jpeg'),
//         description: 'This is another example post to demonstrate multiple cards in a FlatList.',
//     },
//     {
//         id: '3',
//         profileName: 'Jane Smith',
//         profileSubtitle: 'Jane Smith',
//         postDate: '10 April 2024',
//         commentCount: 60,
//         postImage: require('../assets/images/police.jpg'),
//         profileImage: require('../assets/images/profile.jpeg'),
//         description: 'This is another example post to demonstrate multiple cards in a FlatList.',
//     },
// ];



// const CreatePostScreen = ({ navigation }) => {
//     const [image, setImage] = useState(null);


//     const handleImagePicker = () => {
//         launchImageLibrary({ mediaType: 'photo', quality: 1 }, response => {
//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.errorCode) {
//                 console.log('ImagePicker Error: ', response.errorCode);
//             } else {
//                 setImage(response.assets[0].uri);
//             }
//         });
//     };

//     const handleCamera = () => {
//         launchCamera({ mediaType: 'photo', quality: 1 }, response => {
//             if (response.didCancel) {
//                 console.log('User cancelled camera picker');
//             } else if (response.errorCode) {
//                 console.log('Camera Error: ', response.errorCode);
//             } else {
//                 setImage(response.assets[0].uri);
//             }
//         });
//     };


//     // Moved renderItem function outside JSX to fix syntax error
//     const renderItem = ({ item }) => (
//         <View style={styles.postCard}>
//             {/* Profile Image, Name, and Date */}
//             <View style={styles.postHeader}>
//                 <View style={styles.profileSection}>
//                     <Image source={item.profileImage} style={styles.profileImage} />
//                     <View>
//                         <Text style={styles.profileName}>{item.profileName}</Text>
//                         <Text style={styles.profileSubtitle}>{item.profileSubtitle}</Text>
//                     </View>
//                 </View>
//                 {/* Date with adjusted style */}
//                 <Text style={styles.postDate} numberOfLines={1}>
//                     {item.postDate}
//                 </Text>
//             </View>

//             {/* Post Image */}
//             <Image source={item.postImage} style={styles.postImage} />

//             {/* Comment Section */}
//             <View style={styles.commentSection}>
//                 <Icon name="comment" size={16} color="#333" style={{ marginBottom: 4, marginLeft: 5 }} />
//                 <Text style={styles.commentText}>{item.commentCount} Comments</Text>
//             </View>

//             {/* Description Section */}
//             <View style={styles.profileSection}>
//                 <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
//                     <Image source={item.profileImage} style={styles.profileImage} />
//                 </TouchableOpacity>
//                 <View>
//                     <Text style={styles.profileName}>{item.profileName}</Text>
//                     <Text style={styles.profileSubtitle}>{item.description}</Text>
//                 </View>
//             </View>
//         </View>
//     );

//     return (
//         <ImageBackground
//             source={require('../assets/images/SplashBg.png')}
//             style={styles.background}
//         >
//             <ScrollView style={styles.overlayContainer} showsVerticalScrollIndicator={false}>
//                 {/* Top Section Text */}
//                 <View style={styles.topText}>
//                     <Text style={styles.leftText}>Create a Post</Text>
//                 </View>

//                 <View style={styles.cardContainer}>
//                     <View style={styles.topButtons}>
//                         <TouchableOpacity style={styles.button} onPress={handleImagePicker}>
//                             <Text style={styles.buttonText}>Updated Photos</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.button} onPress={handleCamera}>
//                             <Text style={styles.buttonText}>Add a Photo</Text>
//                         </TouchableOpacity>
//                     </View>

//                     <View style={styles.inputSection}>
//                         {image ? (
//                             <Image source={{ uri: image }} style={styles.uploadedImage} />
//                         ) : (
//                             <TouchableOpacity style={styles.imagePlaceholder}>
//                                 <Text style={styles.placeholderText}>What's on your mind?</Text>
//                             </TouchableOpacity>
//                         )}
//                     </View>

//                     <TouchableOpacity style={styles.postButton}>
//                         <Text style={styles.postButtonText}>Post</Text>
//                     </TouchableOpacity>
//                 </View>

//                 {/* Posts List */}
//                 <FlatList
//                     data={postData}
//                     keyExtractor={(item) => item.id}
//                     renderItem={renderItem}
//                     contentContainerStyle={styles.listContent}
//                     scrollEnabled={false} // FlatList should not scroll because ScrollView will handle scrolling
//                 />

//                 {/* 
//                 <View style={styles.card}>
//                     <View style={styles.profileInfo}>
//                         <Image
//                             source={require('../assets/images/profile.jpeg')} // Placeholder image link (replace with your own image path)
//                             style={styles.profileImage}
//                         />

//                         <Text style={styles.emailText}>thanphamdhbk@gmail.com</Text>
//                     </View>

//                     <TouchableOpacity style={styles.editIconContainer}>
//                         <Icon name="pencil" size={20} color="#fff" />
//                     </TouchableOpacity>
//                 </View> */}

//             </ScrollView>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     background: {
//         flex: 1,
//         width: width,
//         height: height,
//         resizeMode: 'cover',
//     },
//     overlayContainer: {
//         flex: 1,
//         paddingHorizontal: 15,
//     },
//     topText: {
//         marginVertical: 15,
//     },
//     leftText: {
//         fontSize: 18,
//         color: '#000',
//         fontFamily: "Poppins-Medium",
//         fontWeight: "400"
//     },
//     cardContainer: {
//         width: width * 0.9,
//         backgroundColor: '#FFD700',
//         borderRadius: 20,
//         padding: 20,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         elevation: 5,
//         alignSelf: 'center',  // Make sure the container is centered
//     },
//     postCard: {
//         backgroundColor: '#FFD700',
//         borderRadius: 10,
//         padding: 15,
//         marginBottom: 20,
//         shadowColor: '#000',
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         elevation: 3,
//         minHeight: 250,
//         width: width * 0.9,   // Set width relative to the screen width
//         alignSelf: 'center',  // Make sure the card is centered
//     },
//     topButtons: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 20,
//     },
//     button: {
//         flexDirection: 'column',
//         alignItems: 'center',
//         width: '45%',
//     },
//     buttonText: {
//         textAlign: 'center',
//         fontFamily: "Poppins-Medium",
//         fontWeight: "400"
//     },
//     inputSection: {
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding: 10,
//         marginBottom: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     imagePlaceholder: {
//         height: 100,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     placeholderText: {
//         fontSize: 18,
//         color: '#999',
//         fontFamily: "Poppins-Medium",
//         fontWeight: "400"
//     },
//     uploadedImage: {
//         width: '100%',
//         height: 150,
//         borderRadius: 10,
//         marginVertical: 10,
//     },
//     postButton: {
//         backgroundColor: '#FFA500',
//         paddingVertical: 10,
//         borderRadius: 20,
//         alignItems: 'center',
//     },
//     postButtonText: {
//         color: '#fff',
//         fontFamily: "Poppins-Medium",
//         fontWeight: "400",
//         fontSize: 18,
//     },
//     // postCard: {
//     //     backgroundColor: '#FFD700',
//     //     borderRadius: 10,
//     //     padding: 15,
//     //     marginBottom: 20,
//     //     shadowColor: '#000',
//     //     shadowOpacity: 0.3,
//     //     shadowRadius: 5,
//     //     elevation: 3,
//     //     minHeight: 250,
//     //     width: width * 0.9,
//     //     alignSelf: 'center',
//     // },
//     postHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     profileSection: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     profileImage: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         marginRight: 10,
//     },
//     profileName: {
//         fontWeight: 'bold',
//         fontSize: 16,
//         color: '#000',
//         fontFamily: 'Poppins-Regular',
//     },
//     profileSubtitle: {
//         flexWrap: 'wrap',
//         maxWidth: width * 0.7, // Adjust this value based on the available space
//         lineHeight: 16,
//         fontFamily: 'Poppins-Regular',

//     },
//     postDate: {
//         fontSize: 15,  // Reduce font size to fit
//         color: '#999',
//         fontFamily: 'Poppins-Regular',
//         // textAlign: 'right',  // Align the date to the right
//         // flexShrink: 1,  // Allow shrinking of date if necessary
//         // marginRight: '10%'
//     },
//     postImage: {
//         width: '100%',
//         height: 180,
//         borderRadius: 10,
//         marginVertical: 10,
//     },
//     commentSection: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         marginTop: 5,
//     },
//     commentText: {
//         marginLeft: 5,
//         fontSize: 14,
//         fontFamily: 'Poppins-Regular',
//         color: "#000    "
//     },
//     listContent: {
//         paddingVertical: 10,
//     },

//     card: {
//         width: width * 0.9,
//         backgroundColor: 'grey',
//         borderRadius: 20,
//         paddingVertical: 20,
//         paddingHorizontal: 15,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         elevation: 5,
//         alignSelf: 'center',
//     },
//     profileInfo: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },

//     emailText: {
//         marginLeft: 15,
//         fontSize: 16,
//         color: '#555',
//         fontWeight: 'bold',
//     },
//     editIconContainer: {
//         backgroundColor: '#FFA500', // Orange background for the icon
//         padding: 10,
//         borderRadius: 50,
//     },
// });

// export default CreatePostScreen;




import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const { width, height } = Dimensions.get('window');

const CreatePostScreen = ({ navigation }) => {

    const postData = [
        {
            id: '1',
            profileName: 'Ethan Rivers',
            profiletitle: 'Lucas Brooks',
            postDate: '2 May 2024',
            commentCount: 89,
            postImage: require('../assets/images/unnamed.png'),
            profileImage: require('../assets/images/profile.jpeg'),
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: '2',
            profileName: 'John Doe',
            profiletitle: 'Jane Smith',
            postDate: '10 April 2024',
            commentCount: 56,
            postImage: require('../assets/images/crime.jpg'),
            profileImage: require('../assets/images/profile.jpeg'),
            description: 'This is another example post to demonstrate multiple cards in a FlatList.',
        },
        {
            id: '3',
            profileName: 'Jane Smith',
            profiletitle: 'Jane Smith',
            postDate: '10 April 2024',
            commentCount: 60,
            postImage: require('../assets/images/police.jpg'),
            profileImage: require('../assets/images/profile.jpeg'),
            description: 'This is another example post to demonstrate multiple cards in a FlatList.',
        },
    ];

    const [image, setImage] = useState(null);
    const [postText, setPostText] = useState('');

    const handleImagePicker = () => {
        launchImageLibrary({ mediaType: 'photo', quality: 1 }, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else {
                setImage(response.assets[0].uri);
            }
        });
    };

    const handleCamera = () => {
        launchCamera({ mediaType: 'photo', quality: 1 }, response => {
            if (response.didCancel) {
                console.log('User cancelled camera picker');
            } else if (response.errorCode) {
                console.log('Camera Error: ', response.errorCode);
            } else {
                setImage(response.assets[0].uri);
            }
        });
    };

    const renderItem = ({ item }) => (
        <View style={styles.postCard}>
            {/* Profile Image, Name, and Date */}
            <View style={styles.postHeader}>
                <View style={styles.profileSection}>
                    <Image source={item.profileImage} style={styles.profileImage} />
                    <View>
                        <Text style={styles.profileName}>{item.profileName}</Text>
                        <Text style={styles.profiletitle}>{item.profiletitle}</Text>
                    </View>
                </View>
                {/* Date with adjusted style */}
                <Text style={styles.postDate} numberOfLines={1}>
                    {item.postDate}
                </Text>
            </View>

            {/* Post Image */}
            <Image source={item.postImage} style={styles.postImage} />

            {/* Comment Section */}
            <View style={styles.commentSection}>
                <Icon name="comment" size={16} color="#333" style={{ marginBottom: 4, marginLeft: 5 }} />
                <Text style={styles.commentText}>{item.commentCount} Comments</Text>
            </View>

            {/* Description Section */}
            <View style={styles.profileSection}>
                <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
                    <Image source={item.profileImage} style={styles.profileImage} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.profileName}>{item.profileName}</Text>
                    <Text style={styles.profileSubtitle}>{item.description}</Text>
                </View>
            </View>
        </View>
    );


    return (
        <ImageBackground
            source={require('../assets/images/SplashBg.png')}
            style={styles.background}
        >
            <ScrollView style={styles.overlayContainer} showsVerticalScrollIndicator={false}>
                {/* Top Section Text */}
                <View style={styles.topText}>
                    <Text style={styles.leftText}>Create a Post</Text>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.topButtons}>
                        <TouchableOpacity style={styles.button} onPress={handleImagePicker}>
                            <Text style={styles.buttonText}>Updated Photos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleCamera}>
                            <Text style={styles.buttonText}>Add a Photo</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputSection}>
                        <View style={styles.inputContainer}>
                            {image && (
                                <Image source={{ uri: image }} style={styles.uploadedImage} />
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

                    <TouchableOpacity style={styles.postButton}>
                        <Text style={styles.postButtonText}>Post</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={postData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContent}
                    scrollEnabled={false} // FlatList should not scroll because ScrollView will handle scrolling
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
        fontFamily: "Poppins-Medium",
        fontWeight: "400"
    },
    cardContainer: {
        width: width * 0.9,
        backgroundColor: '#FFD700',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
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
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: "Poppins-Medium",
        fontWeight: "400"
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
        fontFamily: "Poppins-Medium",
        fontWeight: "400",
        marginRight: 10,
    },
    uploadedImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    postButton: {
        backgroundColor: '#FFA500',
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    postButtonText: {
        color: '#fff',
        fontFamily: "Poppins-Medium",
        fontWeight: "400",
        fontSize: 18,
    },

    postCard: {
        backgroundColor: '#FFD700', // Yellow background for the post card
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
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
        fontFamily: "Poppins-Medium",
        fontWeight: "400",
    },
    profileSubtitle: {
        fontSize: 14,
        color: '#777',
        fontFamily: "Poppins-Medium",
        fontWeight: "400",
        width: "49%"

    },

    profiletitle: {
        fontSize: 14,
        color: '#777',
        fontFamily: "Poppins-Medium",
        fontWeight: "400",
    },
    postDate: {
        fontSize: 12,
        color: '#333',
        fontFamily: "Poppins-Medium",
        fontWeight: "400",
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
        justifyContent: "flex-end"
    },
    commentText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#333',
        fontFamily: "Poppins-Medium",
        fontWeight: "400",
    },
    listContent: {
        paddingVertical: 10,
    },
});

export default CreatePostScreen;