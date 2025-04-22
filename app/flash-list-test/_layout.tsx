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
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: "daftar product",
          headerShown: true,
          // animation: "none",
        }}
      />
      <Stack.Screen
        name="[detailId]"
        options={{
          headerShown: true,
          title: "Detail Produk",
          headerTitleAlign: "center",
          // animation: "none",
          // presentation: "transparentModal",
        }}
      />
    </Stack>
  );
}
