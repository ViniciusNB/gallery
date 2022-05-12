import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, Alert, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/MaterialIcons";
Icon.loadFont();

export default function Visualizar({ route, navigation }) {
  const { id } = route.params;

  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://gallery-rn.herokuapp.com/api/v1/posts/single-post/${id}`)
      .then((res) => {
        setPost(res.data);
      });
  }, []);

  function handleEditPress() {
    navigation.navigate("Editar", { id: id });
  }

  function handleDeletePress() {
    //MOBILE
    Alert.alert("CUIDADO!", "Tem certeza que deseja apagar esse post?", [
      {
        text: "Não",
        onPress: () => Alert.alert("UFA!", "O post não foi deletado"),
      },
      {
        text: "Sim",
        onPress: () =>
          axios
            .delete(
              `https://gallery-rn.herokuapp.com/api/v1/posts/delete-post/${id}`
            )
            .then(() => {
              navigation.navigate("Galeria");
            }),
      },
    ]);

    //BROWSER
    // const confirm = window.confirm("Deseja deletar?");
    // if (confirm) {
    //   axios
    //     .delete(
    //       `https://gallery-rn.herokuapp.com/api/v1/posts/delete-post/${id}`
    //     )
    //     .then(() => {
    //       navigation.navigate("Galeria");
    //     });
    // } else {
    //   window.alert("O post nao foi deletado");
    // }
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.conteudo}>
          <View style={styles.card}>
            <Image source={{ uri: post.image }} style={styles.img} />

            <Text style={styles.title}>{post.title}</Text>

            <View style={styles.descView}>
              <Text style={styles.desc}>{post.description}</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttons}>
          <View style={{ margin: 20 }}>
            <TouchableOpacity
              style={styles.btnDelete}
              onPress={handleDeletePress}
            >
              <Icon name="delete-forever" size={35} color="white" />
            </TouchableOpacity>
          </View>

          <View style={{ margin: 20 }}>
            <TouchableOpacity
              style={styles.btnBack}
              onPress={() => navigation.navigate("Galeria")}
            >
              <Icon name="close" size={35} color="#7E7E7E" />
            </TouchableOpacity>
          </View>

          <View style={{ margin: 20 }}>
            <TouchableOpacity style={styles.btnEdit} onPress={handleEditPress}>
              <Icon name="edit" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8eaed",
  },
  img: {
    width: 345,
    height: 379,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  conteudo: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "flex-start",
    width: 344,
    height: "auto",
    marginTop: 25,
  },
  desc: {
    flexWrap: "wrap",
    fontSize: 16,
    paddingBottom: 20,
  },
  title: {
    flexWrap: "wrap",
    fontSize: 32,
    padding: 12,
  },
  btnBack: {
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 50,
  },
  btnDelete: {
    padding: 15,
    backgroundColor: "red",
    borderRadius: 50,
  },
  btnEdit: {
    padding: 15,
    backgroundColor: "#0066FF",
    borderRadius: 50,
  },
  buttons: {
    flexDirection: "row",
  },
  descView: {
    width: 323,
    alignSelf: "center",
  },
});
