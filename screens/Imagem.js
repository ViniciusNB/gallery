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
                    <Image source={require('../test.jpg')} style={styles.imagem} />
                    
                    <View style={{backgroundColor:'#fff', width:345, height: 220, borderBottomLeftRadius:25, borderBottomRightRadius:25 }}>
                        <Text style={styles.imgTitle}>Imagem Exemplo</Text>
                    </View>
                    
                    <View>
                        <TouchableOpacity>
                            <Text>X</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text>X</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text>X</Text>
                        </TouchableOpacity>
                    </View>
                
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
    },
    imgTitle: {
        paddingTop: 12,
        fontSize:32,
        textAlign: 'center'
    },
    description: {

    },
    imagem: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }

});