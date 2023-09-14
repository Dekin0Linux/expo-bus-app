import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const LoadingScreen = ({msg}) => {
  return (
    <View className='h-screen bg-white items-center justify-center absolute w-full'>
        <ActivityIndicator size={'large'} color={'black'}/>
        <Text>{msg}</Text>
    </View>
  )
}

export default LoadingScreen