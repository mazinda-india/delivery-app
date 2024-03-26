import React, { useState } from "react";
import { View, Text, Switch, Alert } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useSelector, useDispatch } from "react-redux";
import { setAvailability } from "../../redux/InfoReducer";

const AvailabilityStatus = () => {
  const dispatch = useDispatch();
  const isAvailable = useSelector((state) => state.info.isAvailable);
  console.log(isAvailable);

  const toggleSwitch = () => {
    if (isAvailable) {
      Alert.alert(
        "Confirmation",
        "Do you really want to go off duty?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              dispatch(setAvailability(!isAvailable));
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      dispatch(setAvailability(!isAvailable));
    }
  };

  return (
    <View>
      <View
        style={tw`flex flex-row justify-between items-center py-2 px-4 mx-5 my-2 border border-gray-300 rounded-xl`}
      >
        <Text style={tw`text-lg font-bold text-gray-700`}>
          {isAvailable ? "ON DUTY" : "OFF DUTY"}
        </Text>
        <Switch onValueChange={toggleSwitch} value={isAvailable} />
      </View>
    </View>
  );
};

export default AvailabilityStatus;
