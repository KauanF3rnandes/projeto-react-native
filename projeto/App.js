import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "./src/components/HomePages/HomePage";
import LoginPage from "./src/components/LoginPages/LoginPage";

const Stack = createStackNavigator()

function StackNavigator () {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name='HomePage' 
          component={HomePage} 
          options={{
            headerShown:false,
          }}
        /> 
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Login' 
          component={LoginPage}
          options={{
            headerShown:false,
          }}
        /> 
        <Stack.Screen 
          name='Home' 
          component={StackNavigator} 
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}