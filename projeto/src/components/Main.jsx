import { View } from "react-native";
import LoginPage from "./LoginPage";
import TitleLoginPage from "./TitleLoginPage";

const Main = () => {
    return (
        <View >
            <TitleLoginPage />
            <LoginPage/>
        </View>
    );
}

export default Main;