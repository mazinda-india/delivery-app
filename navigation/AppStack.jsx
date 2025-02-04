import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

function AppStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default AppStack;
