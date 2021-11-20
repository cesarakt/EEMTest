import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Session from "../Pages/Session";
import Home from "../Pages/Home";

const AppStack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Session"
        component={Session}
        options={{
          headerTitle: "Selecione a sessão Principal",
          headerStyle: {
            backgroundColor: "#005D95",
          },
          headerTintColor: "#FFF",
        }}
      />
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
}

export default AppRoutes;
