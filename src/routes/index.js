import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#009ca1" />
      <AuthRoutes />
    </NavigationContainer>
  );
}

export default Routes;
