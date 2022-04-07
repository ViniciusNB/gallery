import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Editar({ route, navigation }) {
  const { id } = route.params;

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  function handleEditPress() {
    const data = {
      title: title,
      image: image,
      description: description,
    };
    axios
      .put(`http://localhost:4000/api/v1/posts/update-post/${id}`, data)
      .then(() => {
        navigation.navigate("Gallery");
      });
  }
  return (
    <View>
      <Text>Editar Page</Text>
      <View>
        {/* DIV TÍTULO */}
        <View>
          <Text style={{ fontSize: 25 }}>Título</Text>
          <TextInput
            placeholder="  Minha Bela Imagem"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></TextInput>
        </View>

        {/* DIV IMAGEM */}
        <View>
          <Text style={{ fontSize: 25 }}>URL da imagem</Text>
          <TextInput
            placeholder="  https://www.google.com"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          ></TextInput>
        </View>

        {/* DIV DESCRIÇÃO */}
        <View>
          <Text style={{ fontSize: 25 }}>Descrição</Text>
          <TextInput
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></TextInput>
        </View>
        <Button title="Editar" onPress={handleEditPress} />
      </View>
    </View>
  );
}
