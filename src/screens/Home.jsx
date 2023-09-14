import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { popUp, dialogPop } from "../../toast"; //POP UP ALERT
import axios from "axios";

import COLORS from "../utils/colors";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import LoadingScreen from "../components/LoadingScreen";

const Home = ({ navigation }) => {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [persons, setPersons] = useState("1");

  const [fromLocations, setFromLocation] = useState([]);
  const [toLocations, setToLocations] = useState([]);
  const [loading,setLoading] = useState(true)


  const getLocations=async()=>{
    setLoading(true)
    await axios.get(`https://myrydgh.onrender.com/bus`)
    .then(resp => {
      if(resp.status == 200){
        
        let fromStations =  (resp.data.map(station=>station["depature_loc"]))
        let arrivalStations = (resp.data.map(station=>station["arrival_loc"]))
        let filterFromLoc = [...new Set(fromStations)]
        let filterToLoc = [...new Set(arrivalStations)]

        setFromLocation(filterFromLoc)
        setToLocations(filterToLoc)
        setLoading(false)
        
      }else{
        console.warn('Invalid URL')
      }
    }).catch(err=>{
      dialogPop("WARNING", "NETWORK ERROR", "Trouble with your network");
    })
  }

  useEffect(()=>{
    getLocations()

  },[])



  //DATE STATES & CALENDA VIEW

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  // CHECKING FORM DATA
  const formValidation = () => {
    if (from == "" && to == "" && travelDate == "") {
      popUp("WARNING", "EMPTY FIELDS", "Please fill in all fields");
      navigation.navigate("Buses");
      return;
    }
    if (from === to) {
      popUp("WARNING", "SAME CITY ERROR", `You can't choose the same city`);
      return
    }
    console.log(travelDate)
    console.log(from)
    console.log(to)
    console.log(persons)

    dialogPop("SUCCESS", "Booked", "Your ticket is booked");
  };

  // FUNCTION TO CONTROL PICKER VIEW
  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  // FUNCTION TO FORMAT THE DATE
  const dateFormatter = (chosenDate) => {
    let date = new Date(chosenDate);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();

    d = d < 10 ? `0${d}` : d;
    m = m < 10 ? `0${m}` : m;

    return `${d}-${m}-${y}`;
  };

  // FUNCTION TO GET DATE VALUE FOR ANDROID
  const onChangeDate = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        togglePicker();
        setTravelDate(dateFormatter(currentDate));
      }
    } else {
      togglePicker();
    }
  };

  return (
    <AlertNotificationRoot>
      <ImageBackground
        source={require("../../assets/bus2.jpg")}
        style={{ height: 200 }}
      />
      <ScrollView showsVerticalScrollIndicator={false} className="p-5">
        <View
          className="px-5 mb-5 bg-white rounded-xl"
          style={{ elevation: 8, margin: 10, shadowColor: "#96cee9" }}
        >
          <Text className="text-center text-[#3B82F6] font-semibold text-2xl my-1 py-2 ">
            Book Your Ticket
          </Text>

          <View className=" rounded my-2">
            <Text className="pb-1 text-md">From</Text>
            <SelectList
              setSelected={(val) => setFrom(val)}
              data={fromLocations}
              value="value"
              style={{ backgroundColor: "red" }}
              searchPlaceholder={"Where are you moving from"}
              boxStyles={{
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#3B82F6",
              }}
            />
          </View>

          <View className=" rounded my-2">
            <Text className="pb-1 text-md">To</Text>
            <SelectList
              setSelected={(val) => setTo(val)}
              data={toLocations}
              value="value"
              searchPlaceholder={"Where are you moving to"}
              boxStyles={{
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#3B82F6",
              }}
            />
          </View>

          <View className="flex-row rounded my-2 gap-x-5">
            {/* persons */}
            <View className="flex-1 rounded ">
              <Text className="pb-1 text-md">No. of persons</Text>
              <View className="border-[#3B82F6] px-2 border-2 rounded-xl flex-row items-center overflow-hidden">
                <FontAwesome5 name="user-friends" size={20} color={COLORS.blue} />
                <TextInput
                  className="py-2 mx-1 w-full text-lg px-2"
                  inputMode={"numeric"}
                  onChangeText={(text) => setPersons(text)}
                  value={persons}
                />
              </View>
            </View>
            {/* Date */}
            <View className=" rounded flex-1 ">
              <Text className="pb-1 text-md">Date</Text>
              {!showPicker && (
                <Pressable
                  onPress={togglePicker}
                  className="border-[#3B82F6] border-2 gap-x-2 rounded-xl flex-row items-center"
                >
                  <FontAwesome5 name="calendar-alt" size={20} color={COLORS.blue} />
                  <TextInput
                    className="p-2 text-black"
                    inputMode={"numeric"}
                    editable={false}
                    value={travelDate}
                    onChangeText={setTravelDate}
                    onPressIn={togglePicker}
                  />
                </Pressable>
              )}
              {/* SHOW OR HIDE PICKER */}
              {showPicker && (
                <DateTimePicker
                  mode="date"
                  display="calendar"
                  value={date}
                  onChange={onChangeDate}
                  minimumDate={new Date()}
                />
              )}
            </View>
          </View>


          <View className=" rounded my-3">
            <TouchableOpacity
              className={`bg-[${COLORS.blue}] p-3 rounded-lg`}
              onPress={formValidation}
            >
              <Text className="text-center text-white text-lg">
                Search Buses
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          className="p-5 bg-white rounded-xl"
          style={{ elevation: 8, margin: 10, shadowColor: "#96cee9" }}
        ></View>
      </ScrollView>
      {loading ? <LoadingScreen msg='Loading Buses'/> : ''}
    </AlertNotificationRoot>
  );
};
export default Home;
