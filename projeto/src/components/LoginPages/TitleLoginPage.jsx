import { Image, View, StyleSheet } from "react-native";

const TitleLoginPage = () => {
    return (
        <View style={styles.BoxTitle}>
            <Image style={styles.logo} source={require("../../img/pokemon-logo.png")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    BoxTitle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red',
        height: 'auto',
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    logo: {
        width: "30%",
        height: "21%",
    }
})

export default TitleLoginPage;