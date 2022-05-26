import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import * as imagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import { BASE_URL } from "../utils/api";
Icon.loadFont();

export default function Editar({ route, navigation }) {
  const { id } = route.params;

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState(false);

  const selectFile = async () => {
    const result = await imagePicker.launchImageLibraryAsync({
      mediaTypes: imagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (result.type === "image") {
      setImage(result.uri);
      setSelected(true);
    } else {
      alert("O Arquivo só pode ser uma imagem(JPG, PNG, SVG...)");
      setImage("");
      setSelected(false);
    }
  };

  function handleEditPress() {
    const data = {
      title: title,
      image: image,
      description: description,
    };
    axios.put(`${BASE_URL}/update-post/${id}`, data).then(() => {
      navigation.navigate("Galeria");
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        {/* DIV TÍTULO */}
        <View style={styles.title}>
          <Text style={{ fontSize: 25, marginBottom: 2 }}>Título</Text>
          <TextInput
            placeholder="Minha Bela Imagem"
            style={styles.inputs}
            onChangeText={(text) => {
              setTitle(text);
            }}
          ></TextInput>
        </View>

        {/* DIV IMAGEM */}
        <View style={styles.image}>
          <Text style={{ fontSize: 25, marginBottom: 2 }}>
            Selecionar imagem
          </Text>
          {selected ? (
            <View style={styles.select}>
              <Image
                source={{ uri: image }}
                style={{ width: 100, height: 100 }}
              />
              <TouchableOpacity
                style={styles.add}
                onPress={() => {
                  setSelected(false), setImage("");
                }}
              >
                <Icon name="delete-forever" size={50} color="white" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.add} onPress={selectFile}>
              <Text style={{ fontSize: 20, color: "#FFF" }}>
                Selecionar Arquivo
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* DIV DESCRIÇÃO */}
        <View style={styles.desc}>
          <Text style={{ fontSize: 25, marginBottom: 7 }}>Descrição</Text>
          <TextInput
            multiline={true}
            style={styles.inputDesc}
            onChangeText={(text) => {
              setDescription(text);
            }}
          ></TextInput>
        </View>
      </View>

      <Button title="Editar" onPress={handleEditPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 0,
    padding: 0,
  },
  conteudo: {
    marginTop: 31,
  },
  add: {
    backgroundColor: "#0066FF",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
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
  inputs: {
    borderWidth: 1,
    borderColor: "#BBBB",
    width: 364,
    height: 40,
    borderRadius: 15,
  },
  inputDesc: {
    borderWidth: 1,
    borderColor: "#BBBB",
    width: 364,
    height: 309,
    borderRadius: 15,
  },
  image: {
    paddingTop: 23,
  },
  desc: {
    paddingTop: 23,
    paddingBottom: 54,
  },
  select: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
