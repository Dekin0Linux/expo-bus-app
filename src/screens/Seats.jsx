import { View, Text ,ScrollView,ImageBackground} from 'react-native'
import React from 'react'
import { Button } from 'react-native';

const Seats = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white">
      <ImageBackground
        source={require("../../assets/bus2.jpg")}
        style={{ height: 200 }}
      />

      <View className="px-10 bg-white shadow">
        <Text>Select Seats</Text>
        <Button onPress={()=>navigation.navigate('Tickets')} title='View Ticket'/>
      </View>
    </ScrollView>
  )
}

export default Seats;