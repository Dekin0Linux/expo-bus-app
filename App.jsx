import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabsNav from './src/components/TabsNav';
import Onboarding from './src/screens/Onboarding'
import Buses from './src/screens/Buses';
import UserDetail from './src/screens/UserDetail';
import Seats from './src/screens/Seats';
import Tickets from './src/screens/Tickets';

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <StatusBar backgroundColor='white' animated hidden/>
        <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel : false,
      }}>

          <Stack.Screen name='Onboarding' component={Onboarding} />
          <Stack.Screen name='Tabs' component={TabsNav} />
          <Stack.Screen name='Buses' component={Buses}/>
          <Stack.Screen name='UserDetail' component={UserDetail} />
          <Stack.Screen name='Seats' component={Seats} />
          <Stack.Screen name='Ticket' component={Tickets} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    
  );
}

