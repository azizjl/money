import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "./../../context/AuthContext";

const home = () => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.balance}>
        <Text style={styles.balanceText}>100.00 DT</Text>
        <View style={styles.avatar}></View>
        {/* <Text onPress={() => logout()}>logout</Text> */}
      </View>
      <View style={styles.actions}>
        <Text>hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  balance: {
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  balanceText: {
    fontSize: 40,
  },
  actions: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(237,237,237)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    backgroundColor: "violet",
    borderRadius: 50,
  },
});

export default home;
