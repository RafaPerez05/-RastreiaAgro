import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function InfoTalhao({ talhaoSelecionado, plantio }) {
    return (
        <Text style={styles.subtitle}>
            Talhão Selecionado 
            <View style={styles.bordaArredondada}>
                <Text style={styles.selecionado}>{talhaoSelecionado}</Text>
            </View>
            Plantio: 
            <View style={styles.bordaArredondada}>
                <Text style={styles.plantio}>{plantio}</Text>
            </View>
        </Text>
    );
}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 16,
        color: '#fff',
        backgroundColor: 'rgba(9, 255, 122, 0.3)',
        borderRadius: 40,
        padding: 7,
    },
    bordaArredondada: {
        borderRadius: 15, 
        backgroundColor: '#BEC127', 
        paddingHorizontal: 10, 
        paddingVertical: 5, 
        marginHorizontal: 2,
    },
    selecionado: {
        color: '#fff',
        fontWeight: 'bold',
    },
    plantio: {
        backgroundColor: '#BEC127',
        color: '#fff',
    },
});
