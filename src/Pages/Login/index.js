import React, { useState, useContext } from "react";
import {
  Container,
  AreaLogin,
  Title,
  InputUser,
  InputPassword,
  ButtonSend,
  TextButton,
  AreaInput,
} from "../../styles";

import { AuthContext } from "../../contexts/auth";
import { AntDesign } from "@expo/vector-icons";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userLogin } = useContext(AuthContext);

  function handleLogin() {
    userLogin(username, password);
  }

  return (
    <Container bgColor="#009ca1">
      <AreaLogin>
        <Title>Informe o usuário e a senha encaminhados pela escola</Title>
        <AreaInput>
          <AntDesign name="user" size={24} color="#FFF" />
          <InputUser
            placeholder="Usuário"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </AreaInput>
        <AreaInput>
          <AntDesign name="lock1" size={24} color="#FFF" />
          <InputPassword
            placeholder="Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>
        <ButtonSend onPress={handleLogin}>
          <TextButton>Entrar</TextButton>
        </ButtonSend>
      </AreaLogin>
    </Container>
  );
}
