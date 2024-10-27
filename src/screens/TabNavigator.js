import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MapScreen from './MapScreen';
import CreatePostScreen from './CreatePostScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused, color, size) => {
  let iconName;

  if (route.name === 'Map') {
    iconName = focused ? 'location' : 'location-outline';
  } else if (route.name === 'CreatePost') {
    iconName = focused ? 'add-circle' : 'add-circle-outline';
  } else if (route.name === 'Explore') {
    iconName = focused ? 'search' : 'search-outline';
  } else if (route.name === 'Profile') {
    iconName = focused ? 'person' : 'person-outline';
  }

  const finalSize = route.name === 'CreatePost' ? size + 0 : size;

  return <Icon name={iconName} size={finalSize} color={color} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          getTabBarIcon(route, focused, color, size),
        tabBarLabelStyle: {
          fontFamily: 'Poppins-SemiBold',
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
      })}>
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{tabBarLabel: 'Map'}}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{tabBarLabel: 'Create Post'}}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{tabBarLabel: 'Explore'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
