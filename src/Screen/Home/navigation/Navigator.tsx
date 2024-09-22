import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import First from '../Tabs/Tab01';
import Second from '../Tabs/Tab02';


const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: '#2d307d' }, 
          tabBarActiveTintColor: '#2d307d',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: 'white' },
          tabBarLabelStyle: { fontSize: 16 },
        }}
      >
      <Tab.Screen name="완료" component={First} />
      <Tab.Screen name="진행중" component={Second} />
    </Tab.Navigator>
  );
}

export default Tabs;