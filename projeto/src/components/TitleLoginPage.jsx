import { Image, View, StyleSheet } from "react-native";

const TitleLoginPage = () => {
    return (
        <View style={styles.BoxTitle}>
            <Image style={styles.logo} source={require("../img/pokemon-logo.png")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    BoxTitle: {
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: "30%",
        height: "20%",
    }
})

export default TitleLoginPage;