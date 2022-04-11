import { React } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

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
        <ScrollView>
          <View style={styles.conteudo}>
            <View>

              <TouchableOpacity
                style={styles.add}
                onPress={() => navigation.navigate("Criar")}
              >
                <Text style={{ fontSize: 20 }}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* TODOS OS POSTS */}
          <View style={styles.containerCards} >
            {data.map((x) => {
              return (
                <View key={x._id} style={styles.conteudo}>

                  <View key={x._id} style={styles.card}>

                    <TouchableOpacity onPress={() => {
                      handleDetailPress(x._id);
                    }}>
                      <Image source={{ uri: x.image }} style={styles.img} />
                    </TouchableOpacity>

                    <Text style={styles.txt}>{x.title}</Text>
                  </View>

                  <br />
                </View>
              );
            })}
          </View>
          <StatusBar style="auto" />
        </ScrollView>
      </View>

      <View style={{ position: 'fixed', bottom: 0, paddingBottom: 15, right: 0, paddingRight: 10 }}>
        <TouchableOpacity style={styles.add_btn} onPress={() => navigation.navigate("Criar")} >
          <Text style={{ fontSize: 45, color: "#fff" }}>+</Text>
        </TouchableOpacity>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#e8eaed",
  },
  conteudo: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
  },
  add: {
    backgroundColor: "#FFF",
    paddingLeft: 49,
    paddingRight: 49,
    paddingTop: 15,
    paddingBottom: 15,

    borderRadius: 50,
    margin: 60
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
    width: 365,
    height: 157,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  txt: {
    padding: 14,
    fontSize: 20
  },
  add_btn: {
    backgroundColor: "#F37676",
    textAlign: 'center',
    width: 100, height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: "center",
    textAlign: 'center'
  },
  containerCards: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#e8eaed",

  }
});
