import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Pages/Login";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
