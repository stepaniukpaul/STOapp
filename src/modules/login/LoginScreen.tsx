import React from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import LoginButton from './LoginButton';

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <LoginHeader />
                    <LoginForm />
                    <LoginButton />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 20,
        flex: 1,
        justifyContent: 'space-evenly',
    },
});

export default LoginScreen;