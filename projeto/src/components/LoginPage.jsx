import { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

const LoginPage = () => {

    const [login, setLogin] = useState(null)
    const [password, setPassword] = useState(null)


    return (
        <SafeAreaView>
            <View style={styles.formContext}>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Email:</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setLogin}
                        value={login}
                        placeholder="exemplo@exemplo.com"
                        keyboardType="Email Address"
                    />
                    <Text style={styles.formLabel}>Senha:</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="password"
                        keyboardType="password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.Button} >
                        <Text style={styles.textButton} >Fazer Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: "100%",
        backgroundColor: "#FFF",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    form: {
        width: "100%",
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: "bold"
    }, 
    formInput: {
        width: "80%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    Button: {
        width: "90%",
        height: 50,
        borderRadius: 50,
        backgroundColor: "#ff0000",
        fontWeight: "bold",
        margin: 12,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40
    },
    textButton: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",    
    },
    logo: {
        width: 100,
        height: 100
    }
})

export default LoginPage;