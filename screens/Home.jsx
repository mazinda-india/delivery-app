import { View, Text, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import AvailabilityStatus from "../components/utility/AvailabilityStatus";

const Home = () => {
  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <AvailabilityStatus />
    </SafeAreaView>
  );
};

export default Home;
