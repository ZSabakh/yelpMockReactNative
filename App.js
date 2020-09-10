import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./src/screens/SearchScreen";
import DetailScreen from "./src/screens/DetailScreen";
const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Search" screenOptions={{}}>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Search!" }}
      />
      <Stack.Screen name="Restaurant" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
