import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { fetchAuthData } from "../../redux/AuthReducer";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/delivery-person/login",
        { phoneNumber: credentials.phoneNumber, password: credentials.password }
      );
      if (data.success) {
        await AsyncStorage.setItem("@AuthToken", data.token);
        dispatch(fetchAuthData());
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={tw`bg-white h-full flex flex-col items-center`}>
      <Image
        style={{
          height: 60,
          objectFit: "contain",
          marginTop: 30,
          marginBottom: 20,
        }}
        source={require("../../assets/logo/logo_mazinda_full.png")}
      />
      <View style={tw`w-full px-5`}>
        <Text style={tw`text-2xl text-center font-extrabold`}>
          DELIVERY LOGIN
        </Text>

        <TextInput
          onChangeText={(text) => {
            setError("");
            setCredentials({ ...credentials, phoneNumber: text });
          }}
          placeholder="Enter your phone number"
          style={tw`border border-gray-300 py-3 px-4 mt-5 rounded-xl`}
          maxLength={10}
          textContentType="telephoneNumber"
        />

        <TextInput
          onChangeText={(text) => {
            setError("");
            setCredentials({ ...credentials, password: text });
          }}
          secureTextEntry
          placeholder="Enter your password"
          style={tw`border border-gray-300 py-3 px-4 mt-5 rounded-xl`}
        />

        {error && <Text style={tw`text-red-500 font-bold mt-5`}>{error}</Text>}

        <View>
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={tw`bg-black py-2 px-4 mt-5 rounded-xl`}
          >
            {loading ? (
              <ActivityIndicator size={"small"} />
            ) : (
              <Text style={tw`text-white font-bold text-center text-lg`}>
                Login
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
