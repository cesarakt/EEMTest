import React, { useContext } from "react";
import { StatusBar, FlatList } from "react-native";

import Schools from "../../Components/Schools";
import { Container, InputArea, Input, AreaList } from "../../styles";
import { AuthContext } from "../../contexts/auth";

export default function Session() {
  const { data } = useContext(AuthContext);
  return (
    <Container bgColor="#FFF">
      <StatusBar backgroundColor="#005D95" />
      <InputArea>
        <Input placeholder="Busca" />
      </InputArea>
      <AreaList>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Schools data={item} />}
        />
      </AreaList>
    </Container>
  );
}
