import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function NotFoundScreen({}) { 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Erro 404</Text>
            <Text style={styles.message}>Página não encontrada.</Text>
            <Link replace href="/" style={styles.styleLink}>Voltar para Home</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#d32f2f',
    },
    message: {
        fontSize: 18,
        marginBottom: 24,
        color: '#333',
        textAlign: 'center',
    },
    styleLink: {
        backgroundColor: '#0097FF',
        padding: 10,
        color: 'white'
    }
});