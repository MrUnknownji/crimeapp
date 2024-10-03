import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

// Sample comments data
const comments = [
    { id: '1', name: 'Declan Website', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '5 mins ago', Number: "20", profileImg: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: '2', name: 'Ava Rae', comment: 'Lorem Ipsum has been the industry\'s standard dummy text...', time: '5 mins ago', Number: "20", profileImg: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: '3', name: 'Jackson Lane', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '5 mins ago', Number: "20", profileImg: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: '4', name: 'Lucas Brooks', comment: 'Lorem Ipsum has been the industry\'s standard dummy text...', time: '5 mins ago', Number: "20", profileImg: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: '5', name: 'Jackson Lane', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '5 mins ago', Number: "20", profileImg: 'https://randomuser.me/api/portraits/men/4.jpg' }
];

const ExploreEditScreen = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <View style={styles.commentCard}>
            <Image source={{ uri: item.profileImg }} style={styles.commentProfileImg} />
            <View style={styles.commentTextWrapper}>
                <Text style={styles.commentName}>{item.name}</Text>
                <Text style={styles.commentText}>{item.comment}</Text>
                <View style={styles.commentFooter}>
                    <Text style={styles.commentTime}>{item.time}</Text>
                    <View style={styles.commentInfo}>
                        <Text style={styles.commentNumber}>{item.Number}</Text>
                        <Icon name="comments" size={16} color="#333" style={{ marginBottom: 4, marginLeft: 5 }} />
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <ImageBackground
            source={require('../assets/images/SplashBg.png')}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>

                    {/* Profile Card */}
                    <View style={styles.card}>
                        <View style={styles.profileInfo}>
                            <Image
                                source={require('../assets/images/profile.jpeg')}
                                style={styles.profileImage}
                            />
                            <View>
                                <Text style={{ color: "#000", fontWeight: "500", marginLeft: 10, fontFamily: 'Poppins-Medium', fontSize: 15 }}>Brumo Pham</Text>
                                <Text style={styles.emailText}>thanphamdhbk@gmail.com</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.editIconContainer}
                        //  onPress={() => navigation.navigate("ProfileScreen")}
                        >
                            <Icon name="pencil" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>

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
                                <View style={styles.commentCount}>
                                    <Icon name="comment" size={16} color="#333" style={{ color: "white" }} />
                                    <Text style={styles.commentNumber1}>134</Text>

                                </View>
                            </View>
                        </View>
                    </View> */}
                    {/* //////////////////// */}

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
                                <View style={styles.commentCount}>
                                    <Icon name="comment" size={16} color="#333" style={{ color: "white" }} />
                                    <Text style={styles.commentNumber1}>134</Text>

                                </View>
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
                                <View style={styles.commentCount}>
                                    <Icon name="comment" size={16} color="#333" style={{ color: "white" }} />
                                    <Text style={styles.commentNumber1}>134</Text>
                                </View>
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
    scrollContainer: {
        flexGrow: 1,
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
        color: '#000',
        fontFamily: 'Poppins-Regular',
    },
    commentNumber1: {
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
        backgroundColor: '#fff',
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
    commentFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    commentTime: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'Poppins-Regular',
        marginRight: 10,
    },
    commentInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
});

export default ExploreEditScreen;
