import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from '../screens/Landing'
import Detail from '../screens/Details'
import Login from '../screens/Login'
import Signup from '../screens/Signup'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'  screenOptions={{
          /* headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false */
        }}>
           <Stack.Screen
          name='Landing'
          component={Landing}     
          options={{headerShown: false}}     
        />
          
        <Stack.Screen
          name='Login'
          component={Login}  
          options={{headerShown: false}}        
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{ title: 'Signup Screen' }}
          headerLeft={null}
        />
       <Stack.Screen
        name='Detail'
        component={Detail}
        options={({ route }) => ({
            title: route.params.item.token
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}





export default MainStackNavigator