import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomePages/HomePage";
import LoginPage from "./LoginPages/LoginPage";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PokemonDetail from "./DetailsPokemon/DetailsPokemon";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
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
        name="Login"
        component={LoginPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),headerShown: false
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),headerShown: false
        }}
      />
      <Tab.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card-outline" color={color} size={size} />
          ),headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
