import { React } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { Header } from '../components/Header';


export default function Galeria({ navigation }) {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.conteudo}>
                
            </View>
            <StatusBar style="auto" />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: '#fff',
    },
    conteudo: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    add: {
        backgroundColor: '#e8eaed',
        paddingLeft: 49,
        paddingRight: 49,
        paddingTop: 15,
        paddingBottom: 15,

        borderRadius: 50,


    },
    aviso: {
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: 18,
        paddingBottom: 33,
        lineHeight: 29.3,

        textAlign: 'center',

        color: "#201E1E",
    }
});