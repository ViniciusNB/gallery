import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Criar from "./screens/Criar";
import Visualizar from "./screens/Visualizar";
import Editar from "./screens/Editar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Galeria" component={Home} />
        <Stack.Screen name="Criar" component={Criar} />
        <Stack.Screen name="Visualizar" component={Visualizar} />
        <Stack.Screen name="Editar" component={Editar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
