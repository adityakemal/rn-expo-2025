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
            headerShown: false,
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="detail"
          // options={{
          //   headerShown: true,
          //   title: "Detail",
          //   headerTitleAlign: "center",
          //   header: ({ options }) => (
          //     <HeaderWithBack title={options?.title as string} />
          //   ),
          //   // animation: "fade",
          //   // presentation: "transparentModal",
          // }}
          options={{
            headerShown: false,
            animation: "slide_from_right", // Use Expo Router's built-in animations
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
