import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Booking from '../screens/Bookings'
import Profile from '../screens/Profile'


// const {width,height} = Dimensions.get(screen)


const Tabs = createBottomTabNavigator()

const TabsNav = () => {
  return (
    <Tabs.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Booking" component={Booking} />
        <Tabs.Screen name="Profle" component={Profile} />


    </Tabs.Navigator>
  )
}

export default TabsNav