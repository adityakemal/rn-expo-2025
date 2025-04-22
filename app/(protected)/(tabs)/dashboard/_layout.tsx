import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  // return (
  //   <Stack screenOptions={{ headerShown: false }}>
  //     <Stack.Screen
  //       name="index"
  //       options={{ headerShown: false, title: "Dashboard" }}
  //     />
  //     <Stack.Screen
  //       name="[id]"
  //       options={{ headerShown: true, title: "Detail" }}
  //     />
  //   </Stack>
  // );
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default Layout;
