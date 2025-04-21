import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Mail, Profile, Setting } from '../screens/TabScreens';
import AntDesign from '@expo/vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color }) => <AntDesign name={name} color={color} size={size} />;

const TabNav = () => {
  return (
    <Tab.Navigator
      id={undefined}
      initialRouteName="Profile"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          backgroundColor: 'skyblue',
          borderTopColor: '#fff',
          borderTopWidth: 3,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'blue',
      }}
    >
      <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarIcon: (props) => {
            return <TabIcon name={props.focused ? 'mail' : 'mail-outlined'} {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => {
            return <TabIcon name="user" {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: (props) => {
            return <TabIcon name="setting" {...props} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
