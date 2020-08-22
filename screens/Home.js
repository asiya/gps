import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Interested() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Interested!</Text>
    </View>
  );
}

function Applied() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Applied!</Text>
    </View>
  );
}

function Saved() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Saved!</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function Home() {  
  return (
      <Tab.Navigator backBehavior="none"  tabBarOptions={{
        activeTintColor: '#d63447',
      }}>
        <Tab.Screen name="Interested" component={Interested} 
        options={{
          tabBarLabel: 'Interested',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Applied" component={Applied} 
         options={{
          tabBarLabel: 'Applied',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="check-circle" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Saved" component={Saved}  options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="download" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
  );
}