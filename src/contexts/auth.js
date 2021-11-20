import React, { useState, createContext, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("Auth_user");
      if (storageUser) {
        setUser(JSON.parse(storageUser));
      }
    }

    loadStorage();
  }, []);

  async function userLogin(username, password) {
    await axios
      .post("https://api.tst2.escolaapp.com/api/v1/Acesso/login", {
        login: username,
        senha: password,
        nomeApp: "EEMTest",
      })
      .then((response) => {
        const data = response.data;
        const content = data.conteudo;

        if (content.length > 0) {
          setUser({
            login: username,
            token: content.token,
          });
          storageUser({ login: content.login, id: content.id });
          setData(content);
        } else {
          alert("Usuário e senha incorreto");
        }
      })
      .catch((error) => {
        alert("Ops, ocorreu um erro!");
        console.log(error);
      });
  }

  async function storageUser(data) {
    await AsyncStorage.setItem("Auth_user", JSON.stringify(data));
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, data, userLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
