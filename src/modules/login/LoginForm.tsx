import React from 'react';
import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

const LoginForm = () => {
    return (
        <View>
            <View style={styles.inputWrap}>
                <Feather 
                    style={styles.inputIcon} 
                    name="user"/>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Username" 
                    placeholderTextColor="dimgrey" 
                    textContentType="username">
                </TextInput>
            </View>
            <View style={styles.inputWrap}>
                <Feather 
                name="key" 
                style={styles.inputIcon} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Password" 
                    placeholderTextColor="dimgrey" 
                    textContentType="password">
                </TextInput>
            </View>
            <Pressable>
                <Text style={styles.link}>
                    Forgot password?
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrap: {
        marginBottom: 5,
        marginTop: 20,
        backgroundColor: 'black',
        borderRadius: 5,
        shadowColor: 'cyan',
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.78,
        shadowRadius: 10,
    },
    inputIcon: {
        color: 'cyan',
        fontSize: 23,
        position: 'absolute',
        top: 15,
        left: 10,
    },
    textInput: {
        height: 50,
        borderRadius: 5,
        borderColor: 'cyan',
        borderBottomWidth: 1,
        paddingLeft: 40,
        color: 'white',
    },
    link: {
        textAlign: 'right',
        fontSize: 14,
        color: 'white',
    },
});

export default LoginForm;