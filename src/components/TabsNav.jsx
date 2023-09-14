import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Booking from '../screens/Bookings'
import Profile from '../screens/Profile'
import Tickets from '../screens/Tickets'
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';


// const {width,height} = Dimensions.get(screen)

const Tabs = createBottomTabNavigator()

const TabsNav = () => {

  return (
    <Tabs.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle :{elevation:0,height:60,backgroundColor:'white',margin:15,borderRadius:15,borderTopWidth: 0,justifyContent:'center'},
        tabBarShowLabel:false, 
    }}
    >
        <Tabs.Screen name="Home" component={Home} options={{
          tabBarIcon:({focused,color,size})=>(
            <View className={`flex-row py-3 px-5 rounded-xl items-center gx-2 bg-blue-${focused ? 100: ''}`}>
              <Ionicons name='home' size={20} color={color}/>
              {
                  focused ? <View style={{}}><Text style={{color:`${color}`,marginLeft:5,fontWeight:'bold'}}>Home</Text></View> : ''
              }
            </View>
          )
        }}/>
        {/* <Tabs.Screen name="Booking" component={Booking} /> */}
        <Tabs.Screen name="Tickets" component={Tickets} options={{
          tabBarIcon:({focused,color,size})=>(
            <View className={`flex-row py-3 px-5 rounded-xl items-center gx-2 bg-blue-${focused ? '100':''}`}>
              <Fontisto name='ticket-alt' size={size} color={color}/>
              {
                  focused ? <View style={{}}><Text style={{color:`${color}`,marginLeft:5,fontWeight:'bold'}}>Tickets</Text></View> : ''
              }
            </View>
          ),
        }} />
        <Tabs.Screen name="Profle" component={Profile} options={{
          tabBarIcon:({focused,color,size})=>(
            <View className={`flex-row py-3 px-5 rounded-xl items-center gx-2 bg-blue-${focused ? '100':''}`}>
              <Ionicons name='person' size={size} color={color}/>
              {
                  focused ? <View style={{}}><Text style={{color:`${color}`,marginLeft:5,fontWeight:'bold'}}>Profile</Text></View> : ''
              }
            </View>
          ),
        }}/>


    </Tabs.Navigator>
  )
}

export default TabsNav