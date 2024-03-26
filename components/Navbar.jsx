import { View, Text, Image, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";

const Navbar = () => {
  return (
    <SafeAreaView>
      <View style={tw`flex flex-row justify-between px-3`}>
        <Image
          style={{
            width: 120,
            height: 50,
            objectFit: "contain",
          }}
          source={require("../assets/logo/logo_mazinda_full.png")}
        />
        <Text>Location</Text>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
