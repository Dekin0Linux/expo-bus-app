import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabsNav from './src/components/TabsNav';
import Onboarding from './src/screens/Onboarding'

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaView className='flex-1 bg-red-400 '>
        <NavigationContainer>
        <StatusBar backgroundColor='transparent'/>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel : false,
      }}>

          <Stack.Screen name='Onboarding' component={Onboarding} />
          <Stack.Screen name='Tabs' component={TabsNav} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    
  );
}

