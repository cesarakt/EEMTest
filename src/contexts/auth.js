import React, { useState, createContext } from "react";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

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
        } else {
          alert("Usuário e senha incorreto");
        }
      })
      .catch((error) => {
        alert("Ops, ocorreu um erro!");
        console.log(error);
      });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, userLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
