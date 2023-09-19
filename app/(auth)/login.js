import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "./../../context/AuthContext";

const login = () => {
  const { login } = useAuth();
  return (
    <View>
      <Text onPress={() => login("AZIZ")}>login</Text>
    </View>
  );
};

export default login;
