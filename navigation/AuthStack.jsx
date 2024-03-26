import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign In"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default AuthStack;
