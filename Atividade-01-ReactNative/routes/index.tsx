import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home';
import Ajuda from '../screens/Ajuda';
import Sobre from '../screens/Sobre';
import Login from '../screens/Login';
import CustonDrawer from '../components/CustomDrawer';

export default function Routes() {
    const Drawer = createDrawerNavigator();
    return (
    <Drawer.Navigator
    drawerContent={CustonDrawer}
    screenOptions={{
        drawerInactiveTintColor:'gray',
        drawerActiveTintColor:'#00ff',
    }}
    >
        <Drawer.Screen name='Login' component={Login}/>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='Ajuda' component={Ajuda}/>
        <Drawer.Screen name='Sobre' component={Sobre}/>
    </Drawer.Navigator>
  )
}