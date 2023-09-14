import { View, Text, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native-gesture-handler";

const BusesCard = ({navigation}) => {
  return (
    <View
      className="my-5 p-3 rounded-xl bg-white border border-[#dbdbdb]"
      style={{ elevation: 8, margin: 5, shadowColor: "#96cee9" }}
    >
      <View className="flex-row justify-between">
        <View className="flex-row">
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/thumbnails/007/794/726/small/travel-bus-illustration-logo-on-light-background-free-vector.jpg",
            }}
            style={{ resizeMode: "contain", width: 80, height: 80 }}
          />
          <View>
            <Text className="font-bold text-lg">VVIP | (Kasoa)</Text>
            <Text className="text-md text-red-600"><MaterialCommunityIcons name="car-seat"/> Seats left: 21</Text>
            
          </View>
        </View>

        <View>
          <Text className="text-xl text-[#3B82F6]">GH 150</Text>
        </View>
      </View>

     <View className='flex-row gap-3'>
        <View>
            <Text className="text-md text-slate-900">Bus No</Text>
            <Text className="text-md text-slate-500">AG-5269-12</Text>
        </View>
        <View>
            <Text className="text-md text-slate-900">Amenities</Text>
            <Text className="text-md text-slate-500">WIFI Tv Coffee</Text>
        </View>

     </View>


      <View className="border border-slate-100 my-4"></View>

      <View className="flex-row justify-between items-center ">
        <View className="flex-row">
          <View>
            <Text className="font-bold text-lg text-slate-600">Accra</Text>
            <Text className="font-bold text-base text-[#3B82F6] py-2">15:00</Text>
            <Text className="text-md text-slate-600">29-08-2023</Text>
          </View>
        </View>

        <View className='bg-white p-2 rounded-full border-2 border-[#3B82F6]'>
            <MaterialCommunityIcons name="bus-side" size={32} color="#3B82F6" />
        </View>

        <View>
          <View>
          <Text className="font-bold text-lg text-slate-600">Kumasi</Text>
            <Text className="font-bold text-base text-[#3B82F6] py-2">15:00</Text>
            <Text className="text-md text-slate-600">29-08-2023</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
            className="bg-[#3B82F6] p-2 mt-5 rounded-lg"
            onPress={()=>navigation.navigate('UserDetail')}
        >
            <Text className="text-center text-white text-md font-semibold">
            Book Bus
            </Text>
        </TouchableOpacity>
    </View>
  );
};

export default BusesCard;
