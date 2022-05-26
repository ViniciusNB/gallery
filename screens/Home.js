import { React } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, RefreshControl } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { BASE_URL } from "../utils/api";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      request();
      setRefreshing(false);
    });
  });

  const request = () => {
    axios.get(`${BASE_URL}/all-posts`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/all-posts`).then((res) => {
      setData(res.data);
    });
  }, []);

  function handleDetailPress(id) {
    navigation.navigate("Visualizar", { id: id });
  }

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
          }
        >
          {/* TODOS OS POSTS */}
          <View style={styles.containerCards}>
            {data.map((x) => {
              return (
                <View key={x._id} style={styles.conteudo}>
                  <View key={x._id} style={styles.card}>
                    <TouchableOpacity
                      onPress={() => {
                        handleDetailPress(x._id);
                      }}
                    >
                      <Image source={{ uri: x.image }} style={styles.img} />
                    </TouchableOpacity>

                    <Text style={styles.txt}>{x.title}</Text>
                  </View>
                </View>
              );
            })}
          </View>
          <StatusBar style="auto" />
        </ScrollView>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          paddingBottom: 15,
          right: 0,
          paddingRight: 10,
        }}
      >
        <TouchableOpacity
          style={styles.add_btn}
          onPress={() => navigation.navigate("Criar")}
        >
          <Icon name="add" size={40} color="white" />
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
    textAlign: "center",
  },
  add: {
    backgroundColor: "#FFF",
    paddingLeft: 49,
    paddingRight: 49,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 50,
    margin: 60,
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
    borderTopRightRadius: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 365,
  },
  txt: {
    padding: 14,
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "left",
  },
  add_btn: {
    backgroundColor: "#F37676",
    textAlign: "center",
    width: 80,
    height: 80,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  containerCards: {
    marginTop: 30,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e8eaed",
  },
});
