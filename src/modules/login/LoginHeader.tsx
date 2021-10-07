import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

const LoginHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Login</Text>
            <Pressable>
                <Text style={styles.link}>Sign Up</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        color: 'white',
        fontSize: 36,
    },
    link: {
        textAlign: 'right',
        fontSize: 14,
        color: 'white',
    },
});

export default LoginHeader;