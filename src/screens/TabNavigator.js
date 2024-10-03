// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
// import HomeScreen from './HomeScreen';
// import ProfileScreen from './ProfileScreen';
// import FavoritesScreen from './FavoritesScreen';

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName;

//                     // Set the icons for each tab based on the route name
//                     if (route.name === 'Home') {
//                         iconName = focused ? 'home' : 'home-outline';
//                     } else if (route.name === 'Favorites') {
//                         iconName = focused ? 'heart' : 'heart-outline';
//                     } else if (route.name === 'Messages') {
//                         iconName = focused ? 'chatbubble' : 'chatbubble-outline';
//                     } else if (route.name === 'Notifications') {
//                         iconName = focused ? 'notifications' : 'notifications-outline';
//                     } else if (route.name === 'Profile') {
//                         iconName = focused ? 'person' : 'person-outline';
//                     }

//                     // Return the icon
//                     return <Icon name={iconName} size={size} color={color} />;
//                 },
//                 tabBarShowLabel: true, // Hide the label under the icon
//                 tabBarActiveTintColor: '#FFD700', // Gold color for active icons
//                 tabBarInactiveTintColor: 'black',  // Black color for inactive icons
//                 tabBarStyle: {
//                     backgroundColor: '#FFF', // White background for the tab bar
//                     height: 60, // Adjust height if needed
//                     paddingBottom: 10, // Adjust padding for icons
//                 },
//                 headerShown: false, // Hide header for each tab
//             })}
//         >
//             <Tab.Screen name="Home" component={HomeScreen} />
//             <Tab.Screen name="Favorites" component={FavoritesScreen} />
//             {/* <Tab.Screen name="Messages" component={MessageScreen} /> */}
//             {/* <Tab.Screen name="Notifications" component={NotificationsScreen} /> */}
//             <Tab.Screen name="Profile" component={ProfileScreen} />
//         </Tab.Navigator>
//     );
// };

// export default TabNavigator;
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MapScreen from './MapScreen';
import CreatePostScreen from './CreatePostScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen'; // Import ProfileScreen

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    // Define icons for each tab
                    if (route.name === 'Map') {
                        iconName = focused ? 'location' : 'location-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    } else if (route.name === 'Explore') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline'; // Profile icon for Ionicons
                    }

                    const finalSize = route.name === 'CreatePost' ? size + 0 : size;

                    return <Icon name={iconName} size={finalSize} color={color} />;
                },
                tabBarLabelStyle: {
                    fontFamily: "Poppins-SemiBold",
                    // fontWeight: route.name === 'CreatePost' ? '400' : 'normal',
                    fontSize: 12,
                },
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#FFD700',
                tabBarInactiveTintColor: 'black',
                tabBarStyle: {
                    backgroundColor: '#FFF',
                    height: 70,
                    paddingBottom: 10,
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Map" component={MapScreen} options={{ tabBarLabel: 'Map' }} />
            <Tab.Screen name="CreatePost" component={CreatePostScreen} options={{ tabBarLabel: 'Create Post' }} />
            <Tab.Screen name="Explore" component={ExploreScreen} options={{ tabBarLabel: 'Explore' }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profile' }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
