import { React } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/posts/all-posts`).then((res) => {
      setData(res.data);
    });
  }, []);

  function handleDetailPress(id) {
    navigation.navigate("Visualizar", { id: id });
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.conteudo}>
          <Text style={styles.aviso}>
            Você ainda não adicionou {"\n"} nenhuma imagem.
          </Text>
          <TouchableOpacity
            style={styles.add}
            onPress={() => navigation.navigate("Criar")}
          >
            <Text style={{ fontSize: 20 }}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        {/* TODOS OS POSTS */}
        <View>
          {data.map((x) => {
            return (
              <View key={x._id}>
                <Text>{x.title}</Text>
                <Text>{x.image}</Text>
                <Image source={{ uri: x.image }} style={styles.img} />
                <Text>{x.description}</Text>
                <Button
                  title="Detalhes"
                  onPress={() => {
                    handleDetailPress(x._id);
                  }}
                />
                <br />
              </View>
            );
          })}
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#fff",
  },
  conteudo: {
    justifyContent: "center",
    alignItems: "center",
  },
  add: {
    backgroundColor: "#e8eaed",
    paddingLeft: 49,
    paddingRight: 49,
    paddingTop: 15,
    paddingBottom: 15,

    borderRadius: 50,
  },
  aviso: {
    fontStyle: "normal",
    fontWeight: "100",
    fontSize: 18,
    paddingBottom: 33,
    lineHeight: 29.3,

    textAlign: "center",

    color: "#201E1E",
  },
  img: {
    width: 250,
    height: 250,
  },
});
