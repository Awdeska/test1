import React from 'react';
import DealScreen from "./DealScreen";
import store from "./store/store";
import { Provider } from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Home" component={DealScreen} />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
};

export default App;
