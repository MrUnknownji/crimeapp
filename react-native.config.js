module.exports = {
    assets: ['./assets/fonts'], // Add your custom fonts here
    dependencies: {
        'react-native-vector-icons': {
            platforms: {
                ios: null, // This disables automatic linking for iOS as per your requirement
                android: {},
            },
        },
    },
};
