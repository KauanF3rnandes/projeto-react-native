import { useState } from "react";
import { Image, TouchableOpacity, Vibration } from "react-native";
import { TextInput } from "react-native";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

const LoginPage = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const onCLickValidation = () => {
        if (email != null && password != null) {
            setEmail(null)
            setPassword(null)
            setErrorMessage(null)
            return
        }
        Vibration.vibrate()
        setErrorMessage("Campo Obrigatorio*")
    }

    return (
        <SafeAreaView>
            <View style={styles.formContext}>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Email:</Text>
                    <Text style={styles.messageError}>{errorMessage}</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="exemplo@exemplo.com"
                        keyboardType="Email Address"
                    />
                    <Text style={styles.formLabel}>Senha:</Text>
                    <Text style={styles.messageError}>{errorMessage}</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="password"
                        keyboardType="password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.Button} onPress={() => {onCLickValidation()}}>
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
    messageError: {
        color: '#ff0000',
        fontSize: 12,
        marginLeft: 16
    }
})

export default LoginPage;