import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

type StackParamList = {
    Home: { foo: string, onBar: () => void } | undefined
}

type NavigationProps = StackNavigationProp<StackParamList>

const LoginScreen: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation<NavigationProps>();

    const handleLogin = () => {
        const isAuthenticated = true;

        if (isAuthenticated) {
            navigation.navigate('Home');
        } else {
            console.log("Invalid username or password");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
});

export default LoginScreen;
