import { Tabs } from "expo-router";
import { Feather, Octicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs initialRouteName="home">
      <Tabs.Screen
        name="home"
        options={{
          href: "/home",
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          href: {
            pathname: "/market",
          },
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          href: {
            pathname: "/account",
          },
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <Octicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
