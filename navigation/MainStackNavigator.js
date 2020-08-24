import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Image } from 'react-native';
import Home from '../screens/Home'
import Landing from '../screens/Landing'
import Detail from '../screens/Details'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import HeaderComponent from '../components/headerCommon'

const Stack = createStackNavigator()

const Profile = () => {
  return <div>
          <Image
            style={{width: 50,  height: 50,}}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            onPress={() => {
              alert("Opportunities");
             }}
          />     
      </div>
 
}

function MainStackNavigator() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'  screenOptions={{
         
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
         <Stack.Screen
          name='Home'
          component={Home}    
          options={{
            headerTitle: (props) => (
              <HeaderComponent
                {...props}
                onPress={() => {
                  // Do something
                }}
              />
            ),
            headerLeft: (props) => (
              <Profile
                {...props}
                
              />
            ),
            headerRight: (props) => (
              <Profile
                {...props}
                
              />
            ),
            headerTitleAlign:'center'
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}





export default MainStackNavigator