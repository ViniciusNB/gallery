import { React } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export function Header() {
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>Gallery</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    appTitle: {
        fontFamily: 'Roboto',
        fontSize: 32,
        lineHeight: 38,

        marginTop: 65,
        marginLeft: 13
    },

  });