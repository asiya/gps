import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Detail from '../screens/Details'
import Login from '../screens/Login'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'  screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false
        }}>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login Screen' }}
        />
       <Stack.Screen
        name='Detail'
        component={Detail}
        options={({ route }) => ({
            title: route.params.item.email
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}





export default MainStackNavigator