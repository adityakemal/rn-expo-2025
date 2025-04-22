import { Stack, useRouter } from "expo-router";
import React from "react";

export const unstable_settings = {
  initialRouteName: "index", // set the initial route here
};

export default function ProdDetailLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // animation: "none",
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: "daftar product",
          // headerShown: false,
          // animation: "none",
        }}
      />
      <Stack.Screen name="detail" />
    </Stack>
  );
}
