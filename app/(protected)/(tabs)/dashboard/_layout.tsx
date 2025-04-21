import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Dashboard" }}
      />
      <Stack.Screen
        name="[id]"
        options={{ headerShown: true, title: "Detail" }}
      />
    </Stack>
  );
};

export default Layout;
