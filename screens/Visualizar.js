import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, Alert, StyleSheet } from "react-native";

export default function Visualizar({ route, navigation }) {
  const { id } = route.params;

  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/posts/single-post/${id}`)
      .then((res) => {
        setPost(res.data);
      });
  });

  function handleEditPress() {
    navigation.navigate("Editar", { id: id });
  }

  function handleDeletePress() {
    //MOBILE
    // Alert.alert(
    //   "x",
    //   "My Alert Msg",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel"
    //     },
    //     { text: "OK", onPress: () => console.log("OK Pressed") }
    //   ]
    // );

    //BROWSER
    const confirm = window.confirm("Deseja deletar?");

    if (confirm) {
      axios
        .delete(`http://localhost:4000/api/v1/posts/delete-post/${id}`)
        .then(() => {
          navigation.navigate("Galeria");
        });
    } else {
      window.alert("O post nao foi deletado");
    }
  }
  return (
    <>
      <View style={styles.container}>

        <Image source={{ uri: post.image }} style={{ width: 250, height: 250 }} />

        <Text>{post.title}</Text>
        <Text>{post.description}</Text>

        <Button title="Editar" onPress={handleEditPress} />
        <br />
        <Button title="Voltar" onPress={() => navigation.navigate("Galeria")} />
        <br />
        <Button title="Excluir" onPress={handleDeletePress} />

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
  }
})