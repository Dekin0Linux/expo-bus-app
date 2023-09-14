import { View, Text ,ScrollView,ImageBackground,Button} from 'react-native'
import React from 'react'
import BusesCard from '../components/BusesCard'

const Buses = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white">
      <ImageBackground
        source={require("../../assets/bus2.jpg")}
        style={{ height: 200 }}
      />

      <View className="px-5 bg-white shadow">
        <Text>Search Results</Text>
        <BusesCard navigation={navigation}/>
        {/* <Button onPress={()=>navigation.navigate('UserDetail')} title='Buses'/> */}

      </View>
    </ScrollView>
  )
}

export default Buses