import { Router } from "./navigation/Router.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
