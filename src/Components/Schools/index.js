import React from "react";
import { Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Container, AreaSchool, NameSchool } from "../../styles";

export default function Schools({ data }) {
  return (
    <Container bgColor="#FFF">
      <Pressable
        onPress={() => {
          alert("foi");
        }}
      >
        <AreaSchool>
          <Image
            source={{ uri: data.urlLogoContexto }}
            style={{ width: 150, height: 90, resizeMode: "contain" }}
          />
          <NameSchool>{data.nomeAplicacao}</NameSchool>
          <AntDesign name="caretright" size={24} color="#161B22" />
        </AreaSchool>
      </Pressable>
    </Container>
  );
}
