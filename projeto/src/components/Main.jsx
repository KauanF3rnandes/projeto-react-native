import { SafeAreaView, View } from "react-native";
import LoginPage from "./LoginPages/LoginPage";
import TitleLoginPage from "./LoginPages/TitleLoginPage";
import HomePage from "./HomePages/HomePage";

const Main = () => {
    return (
        <SafeAreaView>
            <TitleLoginPage />
            <LoginPage/>
        </SafeAreaView>
    );
}


export default Main;