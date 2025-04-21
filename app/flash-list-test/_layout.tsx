import { Stack, useRouter } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons"; // atau lucide, feather dll
import HeaderWithBack from "@/components/HeaderWithBack";

export const unstable_settings = {
  initialRouteName: "index", // set the initial route here
};

export default function ProdDetailLayout() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          // headerShown: false,
          header: ({ options }) => (
            <HeaderWithBack title={options.title as string} />
          ),
        }}>
        <Stack.Screen
          name="index"
          options={{
            title: "daftar product",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="[detailId]"
          options={{
            headerShown: true,
            title: "Detail Produk",
            headerTitleAlign: "center",
            header: ({ options }) => (
              <HeaderWithBack title={options?.title as string} />
            ),
            // animation: "fade",
            // presentation: "transparentModal",
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
