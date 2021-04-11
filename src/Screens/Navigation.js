import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddUserScreen from '../Screens/AddUserScreen'
import UserDetailScreen from '../Screens/UserDetailScreen'
import UserScreen from '../Screens/UserScreen'

const Stack = createStackNavigator();

function MyStack (){
    return (
        <Stack.Navigator
      screenOptions={{
          headerShown:false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
      <Stack.Screen 
        name="AddUserScreen" 
        component={AddUserScreen} 
        options={{ title: 'Add User' }}
      />
      <Stack.Screen 
        name="UserScreen" 
        component={UserScreen} 
        options={{ title: 'Users List' }}
      />
      <Stack.Screen 
       name="UserDetailScreen" 
       component={UserDetailScreen} 
       options={{ title: 'User Detail' }}
      />
    </Stack.Navigator>
    )
}

export default function StackNavigation () {
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}