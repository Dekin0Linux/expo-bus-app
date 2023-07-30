import { View, Text, Image ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'


const Onboarding = ({navigation}) => {

  
  return (
    <View className="flex-1 justify-center items-center">
      <View className=''>
        <Image source={require('../../assets/screenImg.png')} style={{width:350,height:250 ,resizeMode:'contain' }}/>
      </View>
      <Text className='text-center my-5 px-10 text-slate-500 text-base'>Discover the easiest way to book bus tickets, right at your fingertips. Skip the long queues and secure your seat effortlessly. Enjoy a seamless travel experience with MyRyd.  </Text>
    <TouchableOpacity style={styles.startBtn} onPress={()=>navigation.navigate('Tabs')}>
      <Text className='text-white text-center font-bold'>Let's get started!</Text>
    </TouchableOpacity>
      
    </View>
  )
}


const styles = StyleSheet.create({
  startBtn : {
    backgroundColor: '#3B82F6',
    padding: 10,
    width : 200,
    borderRadius: 4,
  }
})

export default Onboarding