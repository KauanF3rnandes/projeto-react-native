import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "./src/components/HomePages/HomePage";
import LoginPage from "./src/components/LoginPages/LoginPage";
import Routes from './src/components/routes';



export default function App() {
  return (
    <NavigationContainer>
        <Routes/>
    </NavigationContainer>
  );
}