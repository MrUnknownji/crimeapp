


// import React from 'react';
// import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const ProfileScreen = () => {
//     return (
//         <ImageBackground
//             source={require('../assets/images/SplashBg.png')}
//             style={styles.container}
//         >
//             {/* Header Section */}
//             <View style={styles.header}>
//                 <TouchableOpacity style={styles.iconContainer}>
//                     <Icon name="chevron-back-outline" size={27} color="black" />
//                 </TouchableOpacity>
//                 <Text style={styles.headerText}>Welcome Aryan</Text>
//             </View>

//             {/* Popup Section */}
//             <View style={styles.popUp}>
//                 <View style={styles.topBar}>
//                     <Text style={styles.nameText}>Aryan Bishnoii</Text>
//                 </View>

//                 <View style={styles.profileImageContainer}>
//                     <Image
//                         source={require('../assets/images/ProfileImg.png')}
//                         style={styles.profileImage}
//                     />
//                 </View>

//                 {/* Person Details Section */}
//                 <View style={styles.detailsSection}>
//                     <View style={styles.personDetailsContainer}>
//                         <Text style={styles.sectionTitle}>Person details</Text>
//                         <TouchableOpacity style={styles.editIconContainer}>
//                             <Icon name="pencil-outline" size={20} color="white" />
//                         </TouchableOpacity>
//                     </View>
//                 </View>

//                 <View style={styles.personRow}>
//                     <Text style={styles.personLabelBold}>Name:</Text>
//                     <Text style={styles.personText}>Aryan bishnoi</Text>
//                 </View>
//                 <View style={styles.personRow}>
//                     <Text style={styles.personLabelBold}>Email:</Text>
//                     <Text style={styles.personText}>aryan@gmail.com</Text>
//                 </View>






//                 <View style={styles.detailsSection}>
//                     <View style={styles.personDetailsContainer}>
//                         <Text style={styles.sectionTitle}>Address details</Text>
//                         <TouchableOpacity style={styles.editIconContainer}>
//                             <Icon name="pencil-outline" size={20} color="white" />
//                         </TouchableOpacity>
//                     </View>
//                 </View>




//                 <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
//                     <View style={styles.detailRow}>
//                         <Text style={styles.detailLabelBold}>Address</Text>
//                         <Text style={styles.detailText}>VPO:Raipura</Text>
//                     </View>
//                     <View style={{ marginRight: "20%" }}>
//                         <Text style={styles.detailLabelBold}>Country</Text>
//                         <Text style={styles.detailText}>India</Text>
//                     </View>
//                 </View>
//                 <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
//                     <View style={styles.detailRow}>
//                         <Text style={styles.detailLabelBold}>City:</Text>
//                         <Text style={styles.detailText}>Abohar</Text>
//                     </View>
//                     <View style={{ marginRight: "25%" }}>
//                         <Text style={styles.detailLabelBold}>Pin:</Text>
//                         <Text style={styles.detailText}>152116</Text>
//                     </View>
//                 </View>
//             </View>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     header: {
//         width: '90%',
//         backgroundColor: '#FBBC05',
//         padding: 20,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 15,
//         position: 'absolute',
//         top: "7%",
//     },
//     headerText: {
//         color: '#000',
//         fontSize: 25,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         flex: 1,
//     },

//     popUp: {
//         width: '90%',
//         height: '80%',
//         backgroundColor: '#fff',
//         // borderRadius: 15,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 6,
//         elevation: 5,
//         justifyContent: 'flex-start',
//         marginTop: 150,
//         borderTopRightRadius: 15,
//         borderTopLeftRadius: 15,
//     },
//     topBar: {
//         width: '100%',
//         backgroundColor: '#FBBC05',
//         padding: 15,
//         borderTopLeftRadius: 15,
//         borderTopRightRadius: 15,
//         alignItems: 'center',
//     },
//     nameText: {
//         color: '#000',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },

//     profileImageContainer: {
//         alignItems: 'center',
//         marginTop: "6%"
//     },
//     profileImage: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         borderWidth: 3,
//         borderColor: '#FBBC05',
//     },

//     editIconContainer: {
//         backgroundColor: '#000',
//         borderRadius: 15,
//         padding: 5,
//         elevation: 5,
//         position: 'absolute',
//         right: 10,
//         top: 3,
//     },

//     personDetailsContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         // position: 'relative',
//         marginTop: 10,
//     },

//     detailsSection: {
//         padding: 10,
//         // marginBottom: 10,
//         // position: 'relative',
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#000',
//         textAlign: 'center',

//     },

//     personRow: {
//         // flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 10,
//     },
//     personLabelBold: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#000',
//         marginLeft: 15
//     },
//     personText: {
//         fontSize: 16,
//         color: '#959AAC',
//         marginLeft: 15
//     },



//     detailRow: {
//         // flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 10,
//     },
//     detailLabelBold: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#000',
//         marginLeft: 10
//     },
//     detailText: {
//         fontSize: 16,
//         color: '#959AAC',
//         marginLeft: 10
//     },
// });

// export default ProfileScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
const { width } = Dimensions.get('window');

// Sample comments data
const comments = [
    { id: '1', name: 'Declan Website', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '5 mins ago', profileImg: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: '2', name: 'Ava Rae', comment: 'Lorem Ipsum has been the industry\'s standard dummy text...', time: '5 mins ago', profileImg: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: '3', name: 'Jackson Lane', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '5 mins ago', profileImg: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: '4', name: 'Lucas Brooks', comment: 'Lorem Ipsum has been the industry\'s standard dummy text...', time: '5 mins ago', profileImg: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: '5', name: 'Jackson Lane', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '5 mins ago', profileImg: 'https://randomuser.me/api/portraits/men/4.jpg' }
];

const ExploreScreen = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <View style={styles.commentCard}>
            <Image source={{ uri: item.profileImg }} style={styles.commentProfileImg} />
            <View style={styles.commentTextWrapper}>
                <Text style={styles.commentName}>{item.name}</Text>
                <Text style={styles.commentText}>{item.comment}</Text>
                <Text style={styles.commentTime}>{item.time}</Text>
            </View>
        </View>
    );



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


    return (
        <ImageBackground
            source={require('../assets/images/SplashBg.png')}
            style={styles.background}
        >
            {/* Adding ScrollView to wrap the entire content */}
            <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>



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


                    {/* Profile Card */}
                    {/* <View style={styles.card}>
                        <View style={styles.profileInfo}>
                            <Image
                                source={require('../assets/images/profile.jpeg')}
                                style={styles.profileImage}
                            />
                            <Text style={styles.emailText}>thanphamdhbk@gmail.com</Text>
                        </View>

                        <TouchableOpacity style={styles.editIconContainer}
                        // onPress={() => navigation.navigate("ProfileScreen")}
                        >
                            <Icon name="pencil" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View> */}



























                    {/* Post Section */}
                    {/* <View style={styles.postSection}>
                        <View style={styles.dateInfo}>
                            <Text style={styles.postDate}>2 May 2024</Text>
                        </View>
                        <Image
                            source={require('../assets/images/unnamed.png')}
                            style={styles.postImage}
                        />

                        <View style={styles.postInfo}>
                            <View style={styles.dateCommentContainer}>
                                <TouchableOpacity onPress={() => navigation.navigate("ExploreEditScreen")}>
                                    <View style={styles.commentCount}>

                                        <Icon name="comment" size={16} color="#333" style={{ color: "white" }} />
                                        <Text style={styles.commentNumber}>134</Text>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> */}

                    {/* Repeat post section if necessary */}
                    {/* <View style={styles.postSection}>
                        <View style={styles.dateInfo}>
                            <Text style={styles.postDate}>2 May 2024</Text>
                        </View>
                        <Image
                            source={require('../assets/images/crime.jpg')}
                            style={styles.postImage}
                        />

                        <View style={styles.postInfo}>
                            <View style={styles.dateCommentContainer}>
                                <TouchableOpacity onPress={() => navigation.navigate("ExploreEditScreen")}>
                                    <View style={styles.commentCount}>

                                        <Icon name="comment" size={16} color="#333" style={{ color: "white" }} />
                                        <Text style={styles.commentNumber}>134</Text>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> */}



                    <View style={styles.postSection}>
                        <View style={styles.dateInfo}>
                            <Text style={styles.postDate}>2 May 2024</Text>
                        </View>
                        {/* Image Post */}
                        <Image
                            source={require('../assets/images/police.jpg')}
                            style={styles.postImage}
                        />

                        {/* Date and Comment Count on the right */}
                        <View style={styles.postInfo}>
                            <View style={styles.dateCommentContainer}>
                                {/* Comments Count */}
                                <TouchableOpacity onPress={() => navigation.navigate("ExploreEditScreen")}>
                                    <View style={styles.commentCount}>

                                        <Icon name="comment" size={16} color="#333" style={{ color: "white" }} />
                                        <Text style={styles.commentNumber}>134</Text>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    {/* Comments List */}
                    <FlatList
                        data={comments}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        style={styles.commentsList}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: width,
        resizeMode: 'cover',
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 20,
    },
    card: {
        width: width * 0.9,
        backgroundColor: '#FFD700',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        alignSelf: 'center',
        marginBottom: 20,
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    emailText: {
        marginLeft: 10,
        fontSize: 15,
        color: '#555',
        fontFamily: 'Poppins-Regular',
        fontWeight: "400"
    },
    editIconContainer: {
        backgroundColor: 'grey',
        width: '10%',
        height: heightPercentageToDP("4%"),
        borderRadius: 60,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 5
    },
    postSection: {
        marginBottom: 20,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    postInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    dateInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    dateCommentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postDate: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Poppins-Regular',
        marginRight: 15,
    },
    commentCount: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    commentNumber: {
        fontSize: 14,
        marginLeft: 5,
        color: '#fff',
        fontFamily: 'Poppins-Regular',
    },
    commentsList: {
        marginTop: 20,
    },
    commentCard: {
        flexDirection: 'row',
        backgroundColor: '#FFD700',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
    },
    commentProfileImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    commentTextWrapper: {
        flex: 1,
    },
    commentName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'Poppins-Regular',
    },
    commentText: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
        fontFamily: 'Poppins-Regular',
    },
    commentTime: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'Poppins-Regular',
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
        marginBottom: 20
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

});

export default ExploreScreen;
