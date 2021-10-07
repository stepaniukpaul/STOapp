import React from 'react';
import { StyleSheet, Text, Platform, Pressable } from 'react-native';

const LoginButton = () => {
    return (
        <Pressable
            android_ripple={{
                color: 'cyan',
                radius: 5,
            }}
            style={({ pressed }) => {
                return [styles.button, Platform.OS === 'ios' && {
                    opacity: pressed ? 0.7 : 1
                }
                ];
            }}>
            <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 5,
        borderColor: 'cyan',
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 20,
        color: 'cyan',
    }
});

export default LoginButton;