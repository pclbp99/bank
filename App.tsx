/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import Login from './src/Screen/Auth/Login';
import Join from './src/Screen/Auth/Join';
import Main from './src/Screen/Home/Main';
import AddCard from './src/Screen/Home/AddCard';
import Transcation from './src/Screen/Home/Transcation';
import TranscationList from './src/Screen/Home/TranscationList';
import Payment from './src/Screen/Home/Payment';
import Exchange from './src/Screen/Home/Exchange';
import Account from './src/Screen/Home/Account';


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen 
            name='Login' 
            component={Login} 
            options={{
              title: '',
              headerTransparent: true,
              headerShown: false,
              animationTypeForReplace: 'pop'
            }} 
          />
          <Stack.Screen 
            name='Main' 
            component={Main} 
            options={{
              title: '',
              headerTransparent: true,
              headerShown: false,
              animationTypeForReplace: 'pop'
            }} 
          />
          <Stack.Screen 
            name='Join' 
            component={Join} 
            options={{
              title: '',
              headerTransparent: true,
              headerShown: false,
              animationTypeForReplace: 'pop'
            }} 
          />
          <Stack.Screen 
            name='AddCard' 
            component={AddCard} 
            options={{
              title: '',
              headerTransparent: true,
              headerShown: false,
              animationTypeForReplace: 'pop'
            }} 
          />
          <Stack.Screen 
            name='Transcation' 
            component={Transcation} 
            options={{
              title: '',
              headerTransparent: true,
              headerShown: false,
              animationTypeForReplace: 'pop'
            }} 
          />
          <Stack.Screen 
            name='TranscationList' 
            component={TranscationList} 
            options={{
              title: '',
              headerTransparent: true,
              headerShown: false,
              animationTypeForReplace: 'pop'
            }} 
          />
          <Stack.Screen 
            name='Payment' 
            component={Payment} 
            options={{
              title: '',
              headerTransparent: true,
              headerShown: false,
              animationTypeForReplace: 'pop'
            }} 
          />
          <Stack.Screen 
            name='Exchange' 
            component={Exchange} 
            options={{
              title: '',
              headerTransparent: true,
              headerShown: false,
              animationTypeForReplace: 'pop'
            }} 
          />
          <Stack.Screen 
            name='Account' 
            component={Account} 
            options={{
              title: '',
              headerTransparent: true,
              headerShown: false,
              animationTypeForReplace: 'pop'
            }} 
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
