import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Header from "./components/Header";
import Home from "./screens/Home";
import Criar from "./screens/Criar";
import Imagem from "./screens/Imagem";
import Visualizar from "./screens/Visualizar";
import Editar from "./screens/Editar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Galeria" component={Home} />
        {/* <Stack.Screen name="Visualizar" component={Imagem} /> */}
        <Stack.Screen name="Criar" component={Criar} />
        <Stack.Screen name="Visualizar" component={Visualizar} />
        <Stack.Screen name="Editar" component={Editar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
