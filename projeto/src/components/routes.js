import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./HomePages/HomePage";
import LoginPage from "./LoginPages/LoginPage";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PokemonDetail from "./DetailsPokemon/DetailsPokemon";
import SobrePage from "./Sobre/SobrePage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      showLabel: false,
      style: {
        backgroundColor: '#FF0000',
        borderTopWidth: 0,
      },
    }}
  >
     <Tab.Screen
      name="Home"
      component={HomePage}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Sobre"
      component={SobrePage}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{ headerShown: false }}
    />
    </Stack.Navigator>
  );
}

export default Routes;
