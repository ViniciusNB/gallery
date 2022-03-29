import { React } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Imagem() {
    const navigation = useNavigation();


    return (
        <>
            <View style={styles.container}>
                <View style={styles.conteudo}>
                    <Text style={styles.imgTitle}>Imagem Exemplo</Text>
                    <Image source={require('../test.jpg')} />

                    <View style={{width: 323, height:'auto'}}></View>

                
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

        backgroundColor: '#e8eaed',
    },
    conteudo: {
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#fff',

    },
    imgTitle: {
        maxWidth: 323,
    },
    description: {

    }

});